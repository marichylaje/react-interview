import React from 'react';
import { StyledButtonOptions } from './StyledButtonOptions';

export type ButtonOptionsProps = {
    btnText: string;
    onClickBtn: () => void;
}

const ButtonOptions: React.FC<ButtonOptionsProps> = ({btnText, onClickBtn}: ButtonOptionsProps) => {
  return (
    <div>
        <StyledButtonOptions variant="outlined" onClick={onClickBtn}>{btnText}</StyledButtonOptions>
    </div>
  );
}

export default ButtonOptions
