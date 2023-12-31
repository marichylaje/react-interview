import React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from '@mui/material/styles';
import { WithBounceVerticallyAnim } from "HOC";

export type MovingTitleProps = {
    titleProp: string;
}

const MovingTitle: React.FC<MovingTitleProps> = ({titleProp}: MovingTitleProps) => {
    const theme = useTheme();

    return (
        <WithBounceVerticallyAnim>
            <Typography variant="h4" color={theme.palette.primary.main}>{titleProp}</Typography>
        </WithBounceVerticallyAnim>
    );
};

export default MovingTitle;
