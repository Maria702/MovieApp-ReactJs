import React from 'react'

const MovieCards = ({moviesData}) => {
  
  return (
    <>
    
    <center>
    <img className="img-fluid rounded-start" src={`https://image.tmdb.org/t/p/w200/${ moviesData && moviesData.poster_path}`} alt={`${moviesData && moviesData.title} title`} />
    </center>
   
    
    </>
  )
}

export default MovieCards