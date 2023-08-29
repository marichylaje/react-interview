import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { Button, Grid, ThemeProvider, createTheme } from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';

import globalTheme from "./theme";
import './App.css'

import { MovingTitle } from "components"
import { MovingSubtitle } from "components";
import { SetButtonOptions } from "components";
import Pages from "pages";
import { updateContentfulTeorical, updateContentfulQuestionaire, initTContentStore, initTQuestionairetStore } from "store";
import type { QuestionType, TeoricalType } from "store";

const StyledDivTitle = styled("div")`
  margin: 30px 0px;
`;

const StyledGoBackButton = styled(Button)`
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: ${globalTheme.palette.grey.light};
  border: 1px solid ${globalTheme.palette.grey.main};
  color: ${globalTheme.palette.primary.dark};
`;

// TODO: mover los mockedData a un archivo especifico
const mockedTeoricalData: TeoricalType[] = [{
  content: "",
  title: "",
}]

const mockedQuestionaireData: QuestionType[] = [{
  title: "",
  question: "",
  correctResponse: "",
  falseResponse1: "",
  falseResponse2: "",
  falseResponse3: "",
  difficulty: 1,
}]

const App: React.FC = () => {
  const theme = createTheme(globalTheme);
  const dispatch = useDispatch();

  const titleComp: string = "Welcome to";
  const title: string = "React Interview Training";

  const [ clickedBtnArrayPos, setClickedBtnArrayPos ] = useState<number>(-1);
  const [ teoricalData, setTeoricalData ] = useState<TeoricalType[]>(mockedTeoricalData);
  const [ questionaireData, setQuestionaireData ] = useState<QuestionType[]>(mockedQuestionaireData);

  useEffect(() => {
    initTContentStore(setTeoricalData)
    initTQuestionairetStore(setQuestionaireData)
  }, []);

  useEffect(() => {
    teoricalData && dispatch(updateContentfulTeorical(teoricalData))
  }, [teoricalData]);

  useEffect(() => {
    questionaireData && dispatch(updateContentfulQuestionaire(questionaireData))
  }, [questionaireData]);

  const goBack = () => {
    setClickedBtnArrayPos(-1)
  }
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container maxWidth="lg">
          <StyledGoBackButton href={"/#"} onClick={goBack}>Go Back</StyledGoBackButton>
          <StyledDivTitle>
            <MovingTitle titleProp={titleComp}/>
            <MovingSubtitle titleProp={title}/>
          </StyledDivTitle>

          <Grid container spacing={2}>  
            {
              clickedBtnArrayPos >= 0 
              ?
                <Pages clickedBtnArrayPos={clickedBtnArrayPos} />
              :
                <SetButtonOptions setClickedBtnArrayPos={setClickedBtnArrayPos}/>
            }
          </Grid>
        </Container>
      </ThemeProvider>
    </>

  )
}

export default App;
