import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { snakeCaseText } from 'helper';
import type { QuestionType, TeoricalType, QuestionaireType } from 'store';

const MenuList: React.FC<{ menuData: (TeoricalType | QuestionType)[] }> = ({ menuData }): JSX.Element => {
    const level = useSelector((state: { questionaire: QuestionaireType }) => state.questionaire.experience.level);

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <List>
                {
                    menuData?.map((obj, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton disabled={obj?.difficulty > level || false} href={"#" + snakeCaseText(obj.title)}>
                                <ListItemText primary={obj.title} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
}

export default MenuList;