import React from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { snakeCaseText } from 'helper';
import type { ContentfulStateType, ExperienceType } from 'store';
import { useSelector } from 'react-redux';

const MenuList:React.FC<ContentfulStateType> = ({mydata}) => {
    const level = useSelector((state: { questionaire: ExperienceType }) => state.questionaire.experience.level);
    return (
        
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <List>
                {
                mydata.teorical ? 
                    mydata.teorical.map((obj, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton href={"#" + snakeCaseText(obj.title)}>
                                <ListItemText primary={obj.title} />
                            </ListItemButton>
                        </ListItem>
                    ))
                :
                    mydata.map((obj, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton disabled={obj.difficulty > level} href={"#" + snakeCaseText(obj.title)}>
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