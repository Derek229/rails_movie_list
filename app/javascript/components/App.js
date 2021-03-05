import React,{useState}from 'react'
import Movies from './Movies'



const App =(props) => {
  const [movies, setMovies] = useState([])
  
  
  const getMovies = () => {
    console.log//(TODO make this work)
  }


  return(
    <div>
      <h1>Movies</h1>
      <button onClick={getMovies()}>Show movies</button>
      <Movies movies={movies} />
    </div>
  )
}


export default App;
