import React, { useState } from 'react';
import './TalentPath.scss'; 

interface TalentPathProps {
    path: number,
    usedPointsHandler: (type: boolean) => void;
    disableTalent: boolean
}

function TalentPath({ path, usedPointsHandler, disableTalent }: TalentPathProps) {
    const [iconStates, setIconStates] = useState([false, false, false, false]);

    const selectedTalentGradientStyle = 'repeating-linear-gradient(#6fa8e5, #2b3f53 50%)';
    const deselectedTalentGradientStyle = 'repeating-linear-gradient(#4d4d4d, #1b1c1d 50%)';

    // State of the talent if selected or deselected
    const selectTalentHandler = (index: number, selected: boolean) => {
        if (index === 0 || iconStates[index - 1] && !iconStates[index + 1]) {
            const updatedState = [...iconStates];
            if (updatedState[index] != selected) {
                updatedState[index] = selected;
                setIconStates(updatedState);
                usedPointsHandler(selected);
            }
        }
    }

    const position = path === 1 ? 50 : 50 + 200;
    return (
        <div className="talent-path">
            <div className='text-title'>Talent Path {path}</div>
            <div className="talents">
                {[...Array(4)].map((_, index) => (
                    <React.Fragment key={index}>
                        <div className="talent-icon-container" onClick={() => {
                            if (!disableTalent) selectTalentHandler(index, true)
                        }} onContextMenu={() => selectTalentHandler(index, false)} style={{ backgroundImage: iconStates[index] ? selectedTalentGradientStyle : deselectedTalentGradientStyle }}>
                            <div className='icon' style={{ backgroundPositionX: path === 1 ? -(index * 50) : -(200 + index * 50), backgroundPositionY: iconStates[index] ? 0 : 50, cursor: disableTalent && !iconStates[index] ? 'not-allowed' : 'pointer' }}></div>
                        </div>
                        {index !== 3 && <div className="separator" style={{ opacity: iconStates[index] ? 1 : 0.5 }}></div>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default TalentPath;