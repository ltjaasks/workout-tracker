import { useState } from 'react'
import axios from 'axios'

const MaxesPage = ({ user, setUser, setPage }) => {
    const [squat, setSquat] = useState(user.maxes.squat)
    const [bench, setBench] = useState(user.maxes.bench)
    const [deadlift, setDeadlift] = useState(user.maxes.deadlift)
    const [press, setPress] = useState(user.maxes.press)

    const handleUpdate = () => {
        axios.put(`http://localhost:5000/api/users/${user.username}/maxes`, {
            squat,
            bench,
            deadlift,
            press
        })
        .then(response => {
            setUser(response.data)
        })
    }

    return (
        <div>
            <button onClick={() => setPage('workout')}>Back</button>
            <h2>Update Max Weights</h2>

            <p>Squat</p>
            <input value={squat} onChange={e => setSquat(e.target.value)} />

            <p>Bench</p>
            <input value={bench} onChange={e => setBench(e.target.value)} />

            <p>Deadlift</p>
            <input value={deadlift} onChange={e => setDeadlift(e.target.value)} />

            <p>Overhead Press</p>
            <input value={press} onChange={e => setPress(e.target.value)} />
        
            <button onClick={handleUpdate}>Update</button>
        </div>
    )
}

export default MaxesPage