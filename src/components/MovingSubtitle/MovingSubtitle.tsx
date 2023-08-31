import React from "react"
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { WithFadeInAnim } from "HOC";

export type MovingSubtitleProps = {
    titleProp: string;
}

const MovingSubtitle: React.FC<MovingSubtitleProps> = ({titleProp}: MovingSubtitleProps) => {
    
    const theme = useTheme();

    return (
        <WithFadeInAnim duration={1} delay={0.5}>
            <Typography variant="h3" color={theme.palette.primary.main}>{titleProp}</Typography>
        </WithFadeInAnim>
    )
}

export default MovingSubtitle;
