import { useDispatch } from 'react-redux';
import { addPlayerSheet } from '../redux/yahtzeeSheetSlice'

export default function InitializePlayerButton() {

    const dispatch = useDispatch();

    const handleInitializePlayer = (() => {
        dispatch(addPlayerSheet({ playerName: 'Alice' }));
    }) 

    return (
        <button className="btn btn-secondary" onClick={handleInitializePlayer}>Initilize Sheet</button>
    ) 
}