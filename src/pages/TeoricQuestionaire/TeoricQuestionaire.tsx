import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

import { TeoricGrid, Questionaire } from 'components';
import { titleCaseFromHashParams } from 'helper';
import { updateLevel } from 'store';
import { star } from 'assets';
import type { QuestionaireType, UserExpType, QuestionType } from 'store';
import { WithBounceVerticallyAnim, WithFadeInAnim } from 'HOC';

type DifficultyCount = {
    [difficulty: number]: number;
};


const emptyQuestionaireData: QuestionType = {
    title: '',
    question: '',
    correctResponse: '',
    falseResponse1: '',
    falseResponse2: '',
    falseResponse3: '',
    difficulty: 1,
}

// TODO: stand alone component
const LevelUp: React.FC = () => {
    return(
        <>
            <WithFadeInAnim>
                <img src={star} style={{width: "200px", height: "200px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}/>
            </WithFadeInAnim>
            <WithFadeInAnim delay={.3}>
                    <img src={star} style={{width: "100px", height: "100px", position: "absolute", top: "55%", left: "40%", transform: "translate(-50%, -50%)"}}/>
            </WithFadeInAnim>
            <WithFadeInAnim delay={.6}>
                    <img src={star} style={{width: "100px", height: "100px", position: "absolute", top: "55%", left: "60%", transform: "translate(-50%, -50%)"}}/>
            </WithFadeInAnim>
            <h1 style={{width: "200px", height: "30px", position: "absolute", top: "56%", left: "43%"}}>Level Up!</h1>
        </>
    )
}

const TeoricQuestionaire: React.FC = () => {
    const dispatch = useDispatch();
    
    const allQuestions: QuestionType[] = useSelector((state: { questionaire: QuestionaireType }): QuestionType[] => state.questionaire.questions);
    const userStats: UserExpType = useSelector((state: { questionaire: QuestionaireType }) => state.questionaire.userExp);
    const { level, expPoints }: UserExpType = userStats;

    const [hashData, setHashData] = useState<string>(titleCaseFromHashParams());
    const [currentData, setCurrentData] = useState<QuestionType>(emptyQuestionaireData);
    const [showLevelUp, setShowLevelUp] = useState<boolean>(false);

    const countByDifficulty: [string, number][] = allQuestions && Object.entries(allQuestions.reduce((count: DifficultyCount, obj) => {
        const { difficulty } = obj;
        count[difficulty] = (count[difficulty] || 0) + 1;
        return count;
    }, {}));

    const roughtExpPerLevel: number[] = countByDifficulty.map((_, index) => {
        const response: number = countByDifficulty[index - 1] && (countByDifficulty[index - 1][1]) || 0;
        return response
    })

    const minimumExpPerLevel: number[] = roughtExpPerLevel.map((_, index, array) =>
        array.slice(0, index + 1).reduce((accumulator, currentValue) => accumulator + currentValue)
    );

    const dataWithExpCost: QuestionType[] = allQuestions.map((obj) => {
        const indexNumber: number = obj.difficulty - 1;
        return { 
            ...obj, expCost: (minimumExpPerLevel[indexNumber]), hasAnsweredRight: obj.hasAnsweredRight ?? false 
        }
    })

    const dataWithExpCostSorted = dataWithExpCost.sort((a, b) => {
        if (a.difficulty !== b.difficulty) {
          return a.difficulty - b.difficulty;
        } else {
          return a.title.localeCompare(b.title);
        }
    });

    // TODO: esto deberia de estar en un state?
    const expPercentageTillNextLevel = expPoints !== 0 ? ((minimumExpPerLevel[level] - expPoints) / minimumExpPerLevel[level]) * 100 : 0;

    useEffect(() => {
        if(expPercentageTillNextLevel === 0 && expPoints !== 0){
            dispatch(updateLevel());
            setShowLevelUp(true)
            setTimeout(() => {
                setShowLevelUp(false)
            }, 3000);
        }
    }, [expPercentageTillNextLevel])

    useEffect(() => {
        if(dataWithExpCostSorted){
            setCurrentData(dataWithExpCostSorted.find((obj) => obj.title === hashData) || emptyQuestionaireData); 
        }
    }, [hashData])

    /*
        NOTAS PROBLEMA hasAnsweredRight:
        - si respondemos False, este componente no se ejecuta nuevamente.
        - si respondemos True, este componente se ejecuta nuevamente.

        - obj.hasAnsweredRight ?? false devuelve TRUE al seleccionar la resp correcta
        - para los demas, se asigna hasAnsweredRight UNDEFINED
        - podemos tocar multiples veces el boton resp true, para ganar exp

        - si pongo un "console.log({question})" en el Reducer, se ejecuta y me devuelve un Proxy
    */
    let scrollYPos = 0;
    const [ positionLevelBar, setPositionLevelBar ]  = useState("unset");
        useEffect(() => {
            const handleScroll = () => {
              scrollYPos = window.scrollY;
              const a = scrollYPos > 211 ? "sticky" : "unset";
              if(a !== positionLevelBar) {
                setPositionLevelBar(a)
            };
                console.log({scrollYPos});
                console.log({positionLevelBar});
                console.log({a});
            };
          
            window.addEventListener("scroll", handleScroll);
          
            return () => {
              window.removeEventListener("scroll", handleScroll);
            };
          }, [positionLevelBar]);
          

    return (
        <>
            <Box sx={{ width: '100%', position: positionLevelBar, zIndex: 9, paddingTop: "35px", top: 0, backgroundColor: "white" }}>
                <p>Level {level}</p>
                <LinearProgress variant="determinate" value={expPercentageTillNextLevel}/>
            </Box>
            <TeoricGrid 
                menuData={dataWithExpCostSorted} 
                teoricalContent={ <Questionaire contentProp={currentData}/> } 
                hashData={hashData}
                setHashData={setHashData}
            />
            {showLevelUp && <LevelUp />}
        </>

    );
}

export default TeoricQuestionaire
