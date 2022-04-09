
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieCards from './MovieCards'
import { Link } from 'react-router-dom'
import { Nav } from './Nav'
import Pager from './Pager/Pager'
import { Footer } from './Footer/Footer'


const MoiveApi = () => {
  const [moviesData, setMovies] = useState();
  let [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=d8bd0a42d4e57cf523726280b85f85cf&language=en-US&page=${page}`)
      .then(({ data }) => {
        console.log("data", data.results)
        setMovies(data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [page])
  console.log("moviesData", moviesData)

  return (
    <>
      <Nav />
      <br />
      <Pager page={page} setPage={setPage} />
      <br />
      <div className="container">
        <div className="row">
          {
            moviesData && moviesData.map((movie, index) => {
              return (
                <>
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
                              state={{ movie }}>View</Link>
                            {/* </button> */}
                          </div>
                          <small className="text-muted">Release Date : {movie.release_date}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
      <br />
      <Footer />
    </>
  )
}

export default MoiveApi