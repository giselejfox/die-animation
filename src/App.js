import { useDispatch, useSelector } from 'react-redux';

import DieFace from './components/DieFace';
import RollButton from './components/RollButton';

import { toggleHold } from './redux/dieSlice';

export default function App() {

  const dispatch = useDispatch();
  const currentDieRoll = useSelector((state) => state.dice);
  console.log(currentDieRoll)

  const handleToggleDieHold = (dieID) => {
    dispatch(toggleHold({ dieID }));
  }

  // Based on the keys and data in the initialDieRollSetup we will build the DieFace components
  const dieFaces = Object.keys(currentDieRoll).map((dieID) => {
    // console.log("in the const dieFaces" +dieID)
    return <DieFace key={dieID} dieID={dieID} num={currentDieRoll[dieID].num} handleToggleDieHold={handleToggleDieHold} currentDieRoll={currentDieRoll} />
  })

  return (
    <div className="App container">
      <div className='d-flex flex-row m-5'>
        {dieFaces}
      </div>
      <RollButton />
    </div>
  );
}