import React from 'react';
import { styled } from '@mui/system';

import { formatTextWithBold } from 'helper';
import { Typography } from '@mui/material';

//TODO: move stand-alone component, and use theme colors
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

type RichTextType = {
    complexText: any
}
const RichText: React.FC<RichTextType> = ({complexText}: RichTextType) => {

    if (complexText === undefined) return null;

    const valuesToRenderFromFinalObj = (finalObj) => {
        let response;

        if(finalObj.nodeType === "list-item"){
            response = finalObj.content.map(value => {
                return (
                    obtainValuesFromLastChildArr(value)
                )
            })
        } else if(finalObj.content?.length > 1){
            response = finalObj.content.map(value => {
                return (
                    obtainValuesFromLastChildArr(value)
                )
            })
        } else if(finalObj?.marks && finalObj?.marks[0]?.type === "code"){
            response = finalObj.value.split('\n').map(value => {
                return (
                    <StyledSpan>{value}</StyledSpan>
                )
            })
        } else {
            response = (finalObj.value?.includes("**") ?
                finalObj.value.split("**").map(value => {
                    return (
                        <span>{formatTextWithBold(value)}</span>
                    )
                }) : response = finalObj.value
            )
        }

        return response
    }
    
    const obtainValuesFromLastChildArr = ({childArr, key}) => {
        const response = childArr?.content?.map((finalObj) => {
                return(
                    valuesToRenderFromFinalObj(finalObj)
                )})

        if(childArr?.nodeType === "ordered-list"){
            return(
                <ol key={key}>{childArr?.content?.map((itemList, index) => (
                    <li key={index}>
                        {itemList?.content?.map((item) => {
                            return (
                            valuesToRenderFromFinalObj(item.content[0])
                        )})}
                    </li>
                ))}</ol>
        )} else if(childArr?.nodeType === "paragraph"){
            return(
                <Typography variant="body1" key={key}>{response}</Typography>
        )} else if(childArr?.nodeType === "heading-1" || childArr?.nodeType === "heading-2"){
            return(
                <Typography variant="h4" key={key}>{response}</Typography>
        )}
        else {
            return(
                <Typography variant="h5" key={key}>{response}</Typography>
        )}
    }

    const ContentComponent = ({ complexText }: RichTextType) => {
        return (
        complexText ? (
            complexText.content.map((childArr, key) => (
                obtainValuesFromLastChildArr({ childArr, key })
            ))
        ) : null
      )};

    return (
        <ContentComponent complexText={complexText} />
    );
}

export default RichText;