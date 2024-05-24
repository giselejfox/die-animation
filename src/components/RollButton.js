import { useDispatch } from 'react-redux';
import { rollDice } from '../redux/dieSlice';

export default function RoleButton() {
    const dispatch = useDispatch();
    const handleRollButtonClick = (() => { dispatch(rollDice()) }) 

    return (
        <button className="btn btn-primary" onClick={handleRollButtonClick}>Roll</button>
    ) 
}