import { useState } from 'react'
import { getWorkout } from '../utils/workoutLogic'

const WorkoutPage = ({ user, setPage }) => {
    const [day, setDay] = useState(1)
    const workout = getWorkout(day, user.maxes)

    console.log(user)

    return (
        <div>
            <button onClick={() => setPage('maxes')}>
                Update Maxes
            </button>
            <button onClick={() => setPage('graph')}>
                View Progress
            </button>
            <br></br>
            <button onClick={() => setDay(1)}>Day 1</button>
            <button onClick={() => setDay(2)}>Day 2</button>
            <button onClick={() => setDay(3)}>Day 3</button>
            <button onClick={() => setDay(4)}>Day 4</button>
            <button onClick={() => setDay(5)}>Day 5</button>

            <ul>
                {workout.map((set, index) => (
                    <li key={index}>
                        {set.lift} - {set.reps} reps @ {Math.round(set.weight)} kg
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WorkoutPage