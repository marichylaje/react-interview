import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateExpPoints, updateAnsweredQuestion } from 'store';
import type { QuestionaireType, ExperienceType } from 'store';
import { StyledCard } from './StyledCard';
import { StyledCloseIcon } from './StyledCloseIcon';

export type QuestionaireResponseProps = {
    answer: {
        resp: string,
        isTrue: boolean
    },
    index: number,
    randomizedResponses: {
        resp: string,
        isTrue: boolean
    }[],
    contentProp: any,
}

const QuestionaireResponse: React.FC<QuestionaireResponseProps > = ({ answer, index, randomizedResponses, contentProp }: QuestionaireResponseProps) => {
    if(answer && !answer.resp) return null;
    console.log({contentProp})
    
    const dispatch = useDispatch();
    const userStats = useSelector((state: { questionaire: ExperienceType }) => state.questionaire.experience);
    const hasSelectedAnswer = useSelector((state: { questionaire: QuestionaireType }) => state.questionaire.hasSelectedAnswer);

    const [ isOpenFullText, setIsOpenFullText ] = useState<boolean>(false);
    const [ isAnswered, setIsAnswered ] = useState<boolean>(false);

    const [ isAnsweredRight, setIsAnsweredRight ] = useState<boolean>(false);
    const [ componentHeight, setComponentHeight ] = useState<number>(200);

    const componentRef = useRef(null);
    useEffect(() => {
        if (componentRef.current) {
            setComponentHeight(componentRef.current.offsetHeight);
        }
    }, [isOpenFullText]);

    let hasBeenClicked = false;

    const resetStates = () => {
        hasBeenClicked = false;
        setIsOpenFullText(false);
        setIsAnswered(false);
        setIsAnsweredRight(false);
    }

    const verifyResponse = ({index, e}: {index: number; e: React.MouseEvent<HTMLDivElement>}) => {
        e.stopPropagation();
        console.log("HERE: " + contentProp.hasAnsweredRight)

        if(hasSelectedAnswer){
            resetStates();
            return;
        }
        
        if(isOpenFullText){
            hasBeenClicked = true;
            setIsAnswered(true);
            if(contentProp.hasAnsweredRight){
                return
            }
            if(randomizedResponses[index].isTrue){
                const updatedQuestionWithRightResponse = {
                    ...contentProp,
                    hasAnsweredRight: true,
                }
                setIsAnsweredRight(true);
                dispatch(updateAnsweredQuestion(updatedQuestionWithRightResponse))

                dispatch(updateExpPoints(userStats.expPoints + 1));
                console.log({updatedQuestionWithRightResponse})
                
            } else {
                setIsAnsweredRight(false);
            }
        }

        if(!hasBeenClicked){
            setIsOpenFullText((isOpenFullText) => !isOpenFullText);
        }
    }

    /*if(contentProp.hasAnsweredRight === false && isAnswered === true) {
        resetStates();
    }*/

    const resetResponse = (e: React.MouseEvent<SVGSVGElement>) => {
        e.stopPropagation();

        resetStates();
    }

    return (
        <div style={{ display: "inline" }}>
            <StyledCard 
                elevation={3} 
                index={index}
                isopenfulltext={isOpenFullText.toString()}
                isanswered={isAnswered.toString()}
                isansweredright={isAnsweredRight.toString()}
                componentheight={componentHeight}
                onClick={(e) => {
                    !contentProp.hasAnsweredRight && verifyResponse({index, e});
                }}
            >
                {
                    isOpenFullText && 
                        <StyledCloseIcon onClick={(e) => resetResponse(e)} />
                }
                <div ref={componentRef}>
                    {answer.resp}
                </div>
            </StyledCard>
        </div>
    );
}

export default QuestionaireResponse