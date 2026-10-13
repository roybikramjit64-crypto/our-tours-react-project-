import React, { useState, useEffect } from 'react'
import Loading from './Loading.jsx'
import Tours from './Tours.jsx'

const url = 'https://gist.githubusercontent.com/roybikramjit2026-max/bc8add6d6a068cb55cf60f89929f3906/raw/tours.json'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  function handleRemove(id) {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true)

    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch(error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>↺ refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} onRemove={handleRemove} />
    </main>
  )
}

export default App