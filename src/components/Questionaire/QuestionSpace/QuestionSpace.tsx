import React from "react";
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { WithFadeInAnim } from "HOC";

const QuestionSpace: React.FC = () => {
    const titleComp: string = "Question Space";
    const theme = useTheme();

    return (
        <WithFadeInAnim duration={1.5}>
            <Typography variant="h3" color={theme.palette.primary.main}>{titleComp}</Typography>
        </WithFadeInAnim>
    );
};

export default QuestionSpace;
