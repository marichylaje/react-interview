import React, { memo } from 'react';
import {RichText} from 'components';
import { Box } from '@mui/material';
import { QuestionaireResponse } from 'components';
import globalTheme from 'theme';


export type QuestionaireProps = {
    contentProp: QuestionType;
}

import { styled } from '@mui/system';
import { QuestionType } from 'store';

const StyledQuestionBox = styled(Box)`
    padding: 40px;
    display: table;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    background-color: ${globalTheme.palette.grey.light};
    border-radius: 10px;
`;

const Questionaire:React.FC<QuestionaireProps> = ({contentProp}: QuestionaireProps) => {
    if(!contentProp) return null;

    const { question, falseResponse1, falseResponse2, falseResponse3, correctResponse } = contentProp && contentProp;
    if(!question) return null;

    const responses = [
        {
            resp: correctResponse,
            isTrue: true
        },{
            resp: falseResponse1,
            isTrue: false
        },{
            resp: falseResponse2,
            isTrue: false
        },{
            resp: falseResponse3,
            isTrue: false
        }
    ];

    const randomizeArray = (array: {resp: string; isTrue: boolean;}[]) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const randomizedResponses = randomizeArray(responses);

    return (
        <>
            <StyledQuestionBox>
                <RichText complexText={question && question} />
            </StyledQuestionBox>
            <div>
                {randomizedResponses.map((answer, index) => (
                    <QuestionaireResponse 
                        key={answer.resp} 
                        answer={answer} 
                        index={index} 
                        randomizedResponses={randomizedResponses} 
                        contentProp={contentProp}
                    />
                ))}
            </div>
        </>

    );
}

export default memo(Questionaire);