import React from 'react'
import '../Search/Search.css'

const SearchBar = () => {
  const SubmitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <form onSubmit={SubmitHandler}>
        <input className='MySearchInput' type="text" name="search" placeholder="Search.." />
      </form>
    </>
  )
}

export default SearchBar