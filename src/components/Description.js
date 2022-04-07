import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import MovieCards from './MovieCards'


const Description = ({movie}) => {
  
  let NewNav = {
    backgroundColor: '#000',
    color: '#fff',
    textDecoration: 'none',


  }
  let previous = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '30px',

  }


console.log("moviesData",movie)



  return (
    <>
      <div>
        <ul style={NewNav}>
          <li style={{ display: 'inline-block' }}>
            <Link style={previous} to='/'>
              &laquo;
            </Link>
          </li>
        </ul>

      </div>

      <div className="container">
        <div className="row">
         
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <MovieCards moviesData={movie} />
              <div className="card-body">
               
                </div>

              </div>
            </div>


        </div>

      </div>
    </>
  )
}

export default Description