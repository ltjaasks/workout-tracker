import { useState } from 'react'
import axios from 'axios'
import WorkoutPage from './WorkoutPage'
import MaxesPage from './MaxesPage'
import GraphPage from './GraphPage'


const App = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [page, setPage] = useState('workout')

  const handleEnter =() => {
    axios.get(`http://localhost:5000/api/users/${username}`)
      .then(response => {
        console.log(response.data)
        setUser(response.data)
      })
      .catch(error => {
        if (error.response.status === 404) {
          console.log('User not found')

          axios.post('http://localhost:5000/api/users', {username})
          .then(response => {
            setUser(response.data)
          })
        } else {
          console.error(error)
        }
      }
      )
  }

  if (!user) {
    return (
      <div>
        <h1>Workout tracker</h1>
        <p>Enter username</p>
        <input
          value = {username}
          onChange={(event) => 
            setUsername(event.target.value)
          }
        />
        <button onClick={handleEnter}>Enter</button>
      </div>
    )
  }

  if (page === 'workout') {
    return <WorkoutPage user={user} setPage={setPage}/>
  }

  if (page === 'maxes') {
    return <MaxesPage user={user} setUser={setUser} setPage={setPage} /> 
  }

  if (page === 'graph') {
    return <GraphPage user={user} setPage={setPage} />
  }
  
}


export default App