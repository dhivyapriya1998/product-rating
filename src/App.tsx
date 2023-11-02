import { useState } from 'react'
import './App.css'
import StarRating from './components/StarRating/StarRating';

function App() {
  const [limit, setLimit] = useState(5)
  const rating = 2;

  return (
    <>
      <StarRating limit={limit} rating={rating} />
    </>
  )
}

export default App
