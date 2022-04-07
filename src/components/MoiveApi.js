
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieCards from './MovieCards'
import { Link } from 'react-router-dom'
import { Nav } from './Nav'
import { Footer } from './Footer'

const MoiveApi = () => {
  const [moviesData, setMovies] = useState()
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=d8bd0a42d4e57cf523726280b85f85cf&language=en-US&page=1`)
      .then(({ data }) => {
        console.log("data", data.results)
        setMovies(data.results)

      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  console.log("moviesData", moviesData)

  return (
    <>
      <Nav />
      <br />
      <div className="container">
        <div className="row">


          {
            moviesData && moviesData.map((movie, index) => {

              return (
                <div className="col-md-4" key={index}>
                  <div className="card mb-4 box-shadow">

                    <MovieCards key={index} moviesData={movie} />
                    <div className="card-body">
                      <p className="card-text">{movie.title}</p>
                      <p className="card-overview">Overview : {movie.overview}</p>


                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          {/* <button type="button" className="btn btn-sm btn-outline-secondary"> */}


                          <Link to='/Description'
                            moviesData={movie}>View</Link>



                          {/* </button> */}

                        </div>
                        <small className="text-muted">Release Date : {movie.release_date}</small>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })


          }

        </div>








      </div>


      {/* <div className='sub-head' >
        <br />
        <h2 className='Main-heading' >Movie App</h2> 
        {
          moviesData && moviesData.map((movie, index) => {
            return <>

            
              <div className="card mb-3" style={{
                maxWidth: "100px",
                maxWidth: ' 450px',
                display: 'inline-block',
                margin: '10px',
                border: '1px solid black',
                borderRadius: '0.5rem',
                boxShadow: '0px 0px 5px black',
                Opacity: '0.9'
              }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <MovieCards key={index} moviesData={movie} />

                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title" style={{


                      }}> {movie.title}</h5>
                      <p className="card-overview">Overview : {movie.overview}</p>
                      <p className="card-release">Release Date : {movie.release_date}</p>
                      <p className="card-popularity">Popularity : {movie.popularity} % </p>
                      <a href="#" className="card-link">Update more</a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
          )
        }
      </div> */}
      <Footer />
    </>
  )
}

export default MoiveApi