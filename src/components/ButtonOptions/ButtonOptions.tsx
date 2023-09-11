import React from 'react';
import { StyledButtonOptions } from './StyledButtonOptions';
import { ButtonProps } from '@mui/material/Button';


export interface ButtonOptionsProps extends ButtonProps {
    btnText: string;
    onClickBtn: () => void;
}

const ButtonOptions: React.FC<ButtonOptionsProps> = ({btnText, onClickBtn, ...props}: ButtonOptionsProps) => {
  return (
      <StyledButtonOptions onClick={onClickBtn} variant={props.variant ?? "outlined"} {...props}>{btnText}</StyledButtonOptions>
  );
}

export default ButtonOptions
