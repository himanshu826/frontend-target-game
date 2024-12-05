import React, { useState } from 'react';
import './Talents.scss';
import TalentPath from '../TalentPath';
import Points from '../Points';

function Talents() {
    const totalPoints = 6;
    const [usedPoints, setUsedPoints] = useState(0);
    const [disableTalent, setDisableTalent] = useState(false);

    const usePointsController = (flag: boolean) => {
        const counter = flag ? usedPoints + 1 : usedPoints - 1;
        if (counter === totalPoints) {
            setDisableTalent(true)
        } else {
            setDisableTalent(false)

        }
        setUsedPoints(counter);
    };

    return (
        <div className="box">
            <div className='talent-box'>
                <TalentPath path={1} usedPointsHandler={usePointsController} disableTalent={disableTalent} />
                <TalentPath path={2} usedPointsHandler={usePointsController} disableTalent={disableTalent} />
            </div>
            <div className='score-box'>
                <Points totalPoints={totalPoints} usedPoints={usedPoints} ></Points>
            </div>

        </div>
    );
}

export default Talents;