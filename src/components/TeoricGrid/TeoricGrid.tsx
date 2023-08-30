import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';

import { MenuList } from 'components';
import { titleCaseFromHashParams } from 'helper';
import type { TeoricalType } from 'store';

export type TeoricGridProps = {
    menuData: TeoricalType,
    teoricalContent: JSX.Element,
    setHashData: (data: string) => void,
    hashData: string,
}

const TeoricGrid:React.FC<TeoricGridProps> = ({
    menuData,
    teoricalContent,
    setHashData,
    hashData,
}: TeoricGridProps) => {

    useEffect(() => {
        const handleHashChange = () => {
          setHashData(titleCaseFromHashParams());
        };
    
        window.addEventListener('hashchange', handleHashChange);
    
        return () => {
          window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <>
            <Grid item xs={3}>
                <MenuList menuData={menuData} />
            </Grid>
            <Grid item xs={9} sx={{ whiteSpace: "pre-wrap", maxWidth: "600px !important" }}>
                <h3>{hashData}</h3>
                {teoricalContent}
            </Grid>
        </>
    );
}

export default TeoricGrid;
