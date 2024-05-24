import { useDispatch } from 'react-redux';

import { getSectionScore } from "../helpers/getSectionScore"

import { updateSheet } from '../redux/yahtzeeSheetSlice'

export function SelectedSection({ currentYahtzeeSheets, section, playerName }) {
    return <button key={section.id} className='btn btn-warning m-2'>{section.text}: {currentYahtzeeSheets["playerSheets"][playerName][section.id]}</button>
}

export function UnselectedSection ({ currentDieRoll, section }) {

    const dispatch = useDispatch();

    const handleSetScore = ({ playerName, sectionID, score }) => {
        dispatch(updateSheet({ playerName, sectionID, score }))
    }

    const score = getSectionScore({ currentDieRoll, sectionID: section.id });

    return (
        <button 
            onClick={handleSetScore("Alice", section.id, score)} 
            key={section.id} 
            className='btn btn-outline-dark m-2'
        >
            {section.text}: {score}
        </button>
    )
}

