import React, { useState } from 'react'

const SearchBar = () => {
    const[title, setTitle] = useState()
    const [data, setData] = useState([]);

    const changeHandler = (e) => {
        setTitle(e.target.value)
      }

    const submitHandler =(e)=>{
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=d8bd0a42d4e57cf523726280b85f85cf&query=${title}`)
        .then((response) => response.json())
        .then((data)=>{
            console.log(data)
            setData(data.results)
        })
    }
  return (
    <>
     <form onSubmit={submitHandler}>
          <input type="text" name="search" placeholder="Search.." value={title} onChange={changeHandler}/>
        </form>

    </>
  )
}

export default SearchBar