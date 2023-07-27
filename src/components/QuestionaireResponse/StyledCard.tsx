import { Paper, PaperProps } from '@mui/material';
import { styled } from '@mui/system';
import globalTheme from '../../theme';

const selectedColor = globalTheme.palette.grey.light;
const trueColor = globalTheme.palette.success.main;
const falseColor = globalTheme.palette.error.main;

type StyledCardProps = {
    index: number;
    isopenfulltext: string;
    isanswered: string;
    isansweredright: string;
    componentheight: number;
} & PaperProps; // Use '&' instead of 'extends'

const StyledCard = styled(Paper)(({ index, isopenfulltext, isanswered, isansweredright, componentheight }: StyledCardProps) => ({
    position: 'relative',
    display: 'inline-block',
    marginRight: index % 2 !== 0 ? '0px' : '20px',
    marginBottom: '20px',
    maxWidth: '48.2%',
    borderRadius: '10px',
    backgroundColor: isanswered === "true"
        ? isansweredright === "true"
          ? trueColor
          : falseColor
        : isopenfulltext === "true"
          ? selectedColor
          : undefined,
    height: isopenfulltext  !== "true" ? '200px' : componentheight < 150 ? '200px' : 'auto',
    overflow: isopenfulltext  !== "true" ? 'hidden' : undefined,
    border: isopenfulltext  !== "true" ? '20px solid white' : 'hidden',
    padding: isopenfulltext  !== "true" ? '10px' : '30px',
    float: 'left',
}));

export { StyledCard };
