import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";

import { getRandomRotation } from '../helpers/getRandomNums';
import { useDispatch, useSelector } from 'react-redux';
import { rollDice } from '../redux/dieSlice';

export default function RoleButton() {

    const { contextSafe } = useGSAP()
    const dispatch = useDispatch();
    const currentDieRoll = useSelector((state) => state);

    const handleRollButtonClick = contextSafe(() => {
        dispatch(rollDice());
        console.log(currentDieRoll)
        Object.keys(currentDieRoll).forEach((dieID) => {
          if (!currentDieRoll[dieID].hold) {
            gsap.to(`#${dieID}`, { rotation: getRandomRotation(), duration: 1 });
          }
        });
    }) 

    return (
        <button className="btn btn-primary" onClick={handleRollButtonClick}>Roll</button>
    ) 
}