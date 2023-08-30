import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {TeoricGrid, RichText} from 'components';
import { titleCaseFromHashParams } from 'helper';
import type { ContentfulStateType } from 'store';
 
const TeoricContent: React.FC = () => {
    const menuData = useSelector((state: { contentful: ContentfulStateType }) => state.contentful.teorical);

    const [hashData, setHashData] = useState(titleCaseFromHashParams());

    const teoricalContent = menuData.find((obj) => obj.title === hashData)?.content;

    return (
        <TeoricGrid 
            menuData={menuData} 
            teoricalContent={<RichText complexText={teoricalContent} />} 
            hashData={hashData}
            setHashData={setHashData}
        />
    );
}

export default TeoricContent;