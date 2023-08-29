import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

import { formatTextWithBold } from 'helper';

const StyledSpan = styled('span')`
    background-color: #282a36;
    color: #f8f8f2;
    padding: 10px;
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    line-height: 1.5;
    border-radius: 5px;
    overflow: auto;
    display: block;
    text-align: initial;
`;

interface RichTextProps {
    complexText: any;
}

const RichText: React.FC<RichTextProps> = ({ complexText }: RichTextProps) => {
    if (complexText === undefined) return null;

    const valuesToRenderFromFinalObj = (finalObj: any): JSX.Element | JSX.Element[] | string => {
        let response: JSX.Element | JSX.Element[] | string;

        if (finalObj.nodeType === 'list-item' || (finalObj.content?.length && finalObj.content?.length > 1)) {
            response = finalObj.content.map((value: any) => obtainValuesFromLastChildArr(value));
        } else if (finalObj?.marks && finalObj?.marks[0]?.type === 'code') {
            response = finalObj.value.split('\n').map((value: string) => (
                <StyledSpan key={value}>{value}</StyledSpan>
            ));
        } else {
            response = finalObj.value?.includes('**')
                ? finalObj.value.split('**').map((value: string) => (
                      <span key={value}>{formatTextWithBold(value)}</span>
                  ))
                : finalObj.value;
        }

        return response;
    };

    const obtainValuesFromLastChildArr = ({ childArr, key }: { childArr: any; key: number }): JSX.Element => {
        const response = childArr?.content?.map((finalObj: any) => valuesToRenderFromFinalObj(finalObj));

        if (childArr?.nodeType === 'ordered-list') {
            return (
                <ol key={key}>
                    {childArr?.content?.map((itemList: any, index: number) => (
                        <li key={index}>
                            {itemList?.content?.map((item: any) => {
                                return valuesToRenderFromFinalObj(item.content[0]);
                            })}
                        </li>
                    ))}
                </ol>
            );
        } else if (childArr?.nodeType === 'paragraph') {
            return <Typography variant="body1" key={key}>{response}</Typography>;
        } else if (childArr?.nodeType === 'heading-1' || childArr?.nodeType === 'heading-2') {
            return <Typography variant="h4" key={key}>{response}</Typography>;
        } else {
            return <Typography variant="h5" key={key}>{response}</Typography>;
        }
    };

    const ContentComponent: React.FC<RichTextProps> = ({ complexText }: RichTextProps) => {
        return complexText ? (
            <>{complexText.content.map((childArr: any, key: number) => obtainValuesFromLastChildArr({ childArr, key }))}</>
        ) : null;
    };

    return <ContentComponent complexText={complexText} />;
};

export default RichText;
