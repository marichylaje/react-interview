import React, { Suspense, lazy} from 'react';

const TeoricQuestionaire = lazy(() => import("./TeoricQuestionaire")); 
const TeoricContent = lazy(() => import("./TeoricContent")); 
const CodingChallenges = lazy(() => import("./CodingChallenges")); 
const RoadmapMission = lazy(() => import("./RoadmapMission")); 

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

const Loading = () => (
  <div>Loading...</div>
)

const Pages:React.FC<PagesProps> = ({clickedBtnArrayPos}: PagesProps) => {
    return (
      <Suspense fallback={<Loading />}>
        { clickedBtnArrayPos == 0 && <TeoricQuestionaire/> }
        { clickedBtnArrayPos == 1 && <TeoricContent/> }
        { clickedBtnArrayPos == 2 && <CodingChallenges/> }
        { clickedBtnArrayPos == 3 && <RoadmapMission/> }
      </Suspense>
    );
}

export default Pages; 