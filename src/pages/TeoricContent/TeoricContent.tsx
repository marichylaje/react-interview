import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/system';

import {TeoricGrid, RichText} from 'components';

import type { TeoricalType } from 'store';
import { titleCaseFromHashParams } from 'helper';

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
const TeoricContent: React.FC = () => {
    const myData = useSelector((state: { contentful: TeoricalType[] }) => state.contentful.teorical);

    const [hashData, setHashData] = useState(titleCaseFromHashParams());

    const teoricalContent = myData.map((obj) => (
            obj.title === hashData && obj.content
    )).filter(item => item)[0];

    return (
        <TeoricGrid 
            menuData={myData} 
            teoricalContent={<RichText complexText={teoricalContent} />} 
            hashData={hashData}
            setHashData={setHashData}
        />
    );
}

export default TeoricContent;