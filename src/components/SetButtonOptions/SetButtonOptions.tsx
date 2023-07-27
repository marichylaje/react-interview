import Grid from '@mui/material/Grid';
import React from 'react';
import { ButtonOptions } from 'components';
import { FadeInAnim } from 'animatedHOC';

export type SetButtonOptionsProps = {
    setClickedBtnArrayPos: (i: number) => void;
}

const btnTexts = [
    'Teoric Questionaire',
    'Teoric Content',
    'Coding Challenges',
    'Roadmap Mission',
];

const SetButtonOptions: React.FC<SetButtonOptionsProps> = ({ setClickedBtnArrayPos }: SetButtonOptionsProps) => {
    return (
        <Grid container spacing={2}>
            {btnTexts.map((text, i) => (
                <Grid item xs={6} key={i}>
                    <FadeInAnim delay={1 + (i * 0.42)}>
                        <ButtonOptions btnText={text} onClickBtn={() => setClickedBtnArrayPos(i)} />
                    </FadeInAnim>
                </Grid>
            ))}
        </Grid>
    );
};

export default SetButtonOptions;
