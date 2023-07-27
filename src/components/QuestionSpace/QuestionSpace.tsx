import React from "react";
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { FadeInAnim } from "animatedHOC";

const QuestionSpace: React.FC = () => {
    const titleComp: string = "Question Space";
    const theme = useTheme();

    return (
        <FadeInAnim duration={1.5}>
            <Typography variant="h3" color={theme.palette.primary.main}>{titleComp}</Typography>
        </FadeInAnim>
    );
};

export default QuestionSpace;
