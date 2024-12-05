import './Points.scss'; 

interface PointsProps {
    totalPoints: number;
    usedPoints: number;
}

function Points({ totalPoints, usedPoints }: PointsProps) {
    return (
        <div className='points-box'>
            <div>{usedPoints}/{totalPoints}</div>
            <div className="points-title">Points Spent</div>
        </div>
    );
}

export default Points;