import { IconProps } from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';

type StyledCloseIconProps = {

} & IconProps; // Use '&' instead of 'extends'

const StyledCloseIcon = styled(CloseIcon)(({}: StyledCloseIconProps) => ({
    float: "right", 
    backgroundColor: "white", 
    borderRadius: "50%", 
    padding: "2px", 
    cursor: "pointer", 
    position: "absolute", 
    top: "15px", 
    right: "15px",
}));

export { StyledCloseIcon };