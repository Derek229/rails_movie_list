import React from 'react' 

const Movies = (props) => {

  const {movies}= props
  return(
    <div>
      <h1>{movies.length} movies</h1>
    </div>
  )
}

export default Movies