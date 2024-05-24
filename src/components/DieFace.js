import { useDispatch } from 'react-redux';
import { toggleHold } from '../redux/dieSlice';


export default function DieFace({dieID, num, currentDieRoll}) {

    const dispatch = useDispatch();
    const handleToggleDieHold = (dieID) => { dispatch(toggleHold({ dieID })) }

    const dieCircles = DieConfigs[num].map((circleCoordinates) => {
        return <DieCircle key={Math.random()} x={circleCoordinates.x} y={circleCoordinates.y} />
    })

    return (
        <svg onClick={() => handleToggleDieHold(dieID)} id={dieID} className="die-face mx-1" width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="90" height="90" rx="10" ry="10" fill={currentDieRoll[dieID].hold === false ? "white" : "grey"} stroke="black" strokeWidth="2"/>
            {dieCircles}
        </svg>
    )
}

function DieCircle({x, y}) {

    const xnum = x === "right" ? "75" : 
                 x === "middle" ? "50" :
                 x === "left" ? "25" : 0

    const ynum = y === "bottom" ? "75" : 
                 y === "middle" ? "50" :
                 y === "top" ? "25" : 0

    return <circle cx={xnum} cy={ynum} r="10" fill="black"/>
}

const DieConfigs = {
    1: [{x: "middle", y: "middle"}],
    2: [{x: "left", y: "top"}, {x: "right", y: "bottom"}],
    3: [{x: "left", y: "top"}, {x: "right", y: "bottom"}, {x: "middle", y: "middle"}],
    4: [{x: "left", y: "top"}, {x: "right", y: "bottom"}, {x: "left", y: "bottom"}, {x: "right", y: "top"}],
    5: [{x: "left", y: "top"}, {x: "right", y: "bottom"}, {x: "left", y: "bottom"}, {x: "right", y: "top"}, {x: "middle", y: "middle"}],
    6: [{x: "left", y: "top"}, {x: "left", y: "middle"}, {x: "left", y: "bottom"}, {x: "right", y: "top"}, {x: "right", y: "middle"}, {x: "right", y: "bottom"}]
}
  

