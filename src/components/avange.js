import { Form, Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'


const About = () => {

  const [searchData, setSearch] = useState()
  const OnSubmitHandle = (e) => {
    e.preventDefault()
    fetch(
      'https://api.themoviedb.org/3/search/movie?api_key=d8bd0a42d4e57cf523726280b85f85cf&query=avengers',
    )
      .then((response) => response.json())
      .then((data) => {

        setSearch(data.results)
      })



  }
  console.log("searchData", searchData)

  return (
    <>

      <div className="container">
        <br />
        <div className="row">
          <br />
          <h2> Search </h2>

          <Form onSubmit={OnSubmitHandle}>
            <Form.Group className="mb-3">

              <Form.Control type="text" placeholder="Enter ID" />



            </Form.Group>

            <Button variant="primary" type="submit">
              Search
            </Button>

          </Form>

        </div>
        <br />
        <br />
        <br />

      </div>

      {/* display Data */}

      <div className="container">
        <div className="row">
          {
            searchData && searchData.map((data, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <div className="card mb-4 box-shadow">
                    <img className="card-img-top" src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} alt={`${data.title} poster`} />
                    <div className="card-body">
                      <p className="card-text">{data.title}</p>


                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }

            )
          }

        </div>

      </div>

      {/* {searchData.name} */}



    </>
  )
}

export default About