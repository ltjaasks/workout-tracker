import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

const GraphPage = ({ user, setPage }) => {
    const data = user.history.map(entry => ({
        ...entry,
        date: new Date(entry.date).toLocaleDateString()
    }))

    return (
        <div>
            <button onClick={() => setPage('workout')}>
                Back
            </button>

            <h2>Progress</h2>

            <LineChart
            width={700}
            height={400}
            data={data}
            >
                <CartesianGrid strokeDasharray='3 3' />

                <XAxis dataKey="date" />
                <YAxis />

                <Tooltip />
                <Legend />
                
                <Line type="monotone" dataKey="squat" stroke="#ff0000" />
                <Line type="monotone" dataKey="bench" stroke="#0000ff" />
                <Line type="monotone" dataKey="deadlift" stroke="#00aa00" />
                <Line type="monotone" dataKey="press" stroke="#ffaa00" />

            </LineChart>
        </div>
    )
}

export default GraphPage