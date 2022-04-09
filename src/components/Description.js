import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MovieCards from './MovieCards'


const Description = () => {
  const Location = useLocation();
  const { movie } = Location.state;

  let NewNav = {
    backgroundColor: '#000',
    color: '#fff',
    listStyleType: 'none',
    display: 'flex',
    fontWeight: 'bolder',
  }

  let Main = {
    display: 'inline',
    textAlign: 'left',
    color: '#000',
  }
  let previous = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bolder',
  }
  let Title = {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bolder',
    color: 'red',
    paddingLeft: '10px',
  }
  console.log("moviesData", movie)


  return (
    <>
      <div>
        <ul style={NewNav}>
          <li style={Main}>
            <Link style={previous} to='/'>
              &laquo;
            </Link>
          </li>
          <li style={Title}>
            <p>{movie.title}</p>
          </li>
        </ul>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <MovieCards moviesData={movie} />
              <div className="card-body">
                <div className="card-body">
                  <p className="Descrip-text">{movie.title}</p>
                  <p className='Descrip-overView'> <b><u>Overview</u></b> : {movie.overview}</p>
                  <p> <b><u>Popularity</u></b> : {movie.popularity} %</p>
                  <p> <b><u>Original Title </u></b> : {movie.original_title}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Release Date : {movie.release_date}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Description