import Grid from '@mui/material/Grid';
import React from 'react';
import { ButtonOptions } from 'components';
import { WithFadeInAnim } from 'HOC';

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
        <div className="max-w-lg">
            {btnTexts.map((text, i) => (
                <div className="w-1/2 inline-block relative" style={{minWidth: "200px"}} key={i}>
                    <WithFadeInAnim delay={.7 + (i * 0.42)}>
                        <ButtonOptions className="xs:translate-x-1/3 translate-x-3" btnText={text} onClickBtn={() => setClickedBtnArrayPos(i)} />
                    </WithFadeInAnim>
                </div>
            ))}
        </div>
    );
};

export default SetButtonOptions;
