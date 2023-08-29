import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {TeoricGrid, RichText} from 'components';
import { titleCaseFromHashParams } from 'helper';
import type { ContentfulStateType } from 'store';
 
const TeoricContent: React.FC = () => {
    const myData = useSelector((state: { contentful: ContentfulStateType }) => state.contentful.teorical);

    const [hashData, setHashData] = useState(titleCaseFromHashParams());

    const teoricalContent = myData.find((obj) => obj.title === hashData)?.content;

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