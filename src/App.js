import { useSelector } from 'react-redux';

import DieFace from './components/DieFace';
import RollButton from './components/RollButton';
import InitializePlayerButton from './components/InitializePlayerButton';
import { UnselectedSection, SelectedSection } from './components/SectionButtons';

export default function App() {

  const currentDieRoll = useSelector((state) => state.dice);
  const currentYahtzeeSheets = useSelector((state) => state.yahtzeeSheets);

  // Based on the keys and data in the initialDieRollSetup we will build the DieFace components
  const dieFaces = Object.keys(currentDieRoll).map((dieID) => {
    return <DieFace key={dieID} dieID={dieID} num={currentDieRoll[dieID].num} currentDieRoll={currentDieRoll} />
  })

  const upperData = [{id: "ones", text: "Ones"}, {id: "twos", text: "Twos"}, {id: "threes", text: "Threes"}, {id: "fours", text: "Fours"}, {id: "fives", text: "Fives"}, {id: "sixes", text: "Sixes"}]
  const upperSheet = upperData.map((section) => {
    if (currentYahtzeeSheets["playerSheets"]["Alice"][section.id] !== "empty") {     // if already chosen
      return <SelectedSection currentYahtzeeSheets={currentYahtzeeSheets} section={section} playerName={"Alice"} />
    }
    return <UnselectedSection currentDieRoll={currentDieRoll} section={section}/>     // if not already chosen
  })

  const lowerData = [{id: "threeOfAKind", text: "Three of a Kind"}, {id: "fourOfAKind", text: "Four of a Kind"}, {id: "fullHouse", text: "FullHouse"}, {id: "smallStraight", text: "Small Straight"}, {id: "largeStraight", text: "Large Straight"}, {id: "yahtzee", text: "Yahtzee"}, {id: "chance", text: "Chance"}]
  const lowerSheet = lowerData.map((section) => {
    if (currentYahtzeeSheets["playerSheets"]["Alice"][section.id] !== "empty") {     // if already chosen
      return <SelectedSection currentYahtzeeSheets={currentYahtzeeSheets} section={section} playerName={"Alice"} />
    }
    return <UnselectedSection currentDieRoll={currentDieRoll} section={section}/>     // if not already chosen
  })

  return (
    <div className="App container">
      <div className='d-flex flex-row m-5'>
        {dieFaces}
      </div>
      <div className='d-flex flex-row'>
        <RollButton />
        <InitializePlayerButton />
      </div>
      <div className='d-flex flex-row'>
        <div className='d-flex flex-column'>
          {upperSheet}
        </div>
        <div className='d-flex flex-column'>
          {lowerSheet}
        </div>
      </div>
    </div>
  );
}