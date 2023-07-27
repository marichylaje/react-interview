import * as React from 'react';
import TeoricQuestionaire from './TeoricQuestionaire';
import TeoricContent from './TeoricContent';
import CodingChallenges from './CodingChallenges';
import RoadmapMission from './RoadmapMission';

export type PagesProps = {
    clickedBtnArrayPos: number;
}

/*
    SetButtonOptions LINE 10 - definition of each button position:

    const btnTexts = [
        'Teoric Questionaire',
        'Teoric Content',
        'Coding Challenges',
        'Roadmap Mission',
    ]
*/

const Pages:React.FC<PagesProps> = ({clickedBtnArrayPos}: PagesProps) => {
    return (
      <>
        { clickedBtnArrayPos == 0 && <TeoricQuestionaire/> }
        { clickedBtnArrayPos == 1 && <TeoricContent/> }
        { clickedBtnArrayPos == 2 && <CodingChallenges/> }
        { clickedBtnArrayPos == 3 && <RoadmapMission/> }
      </>
    );
}

export default Pages;