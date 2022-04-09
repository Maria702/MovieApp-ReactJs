import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './Search/SearchBar'

export const Nav = () => {
  return (
    <>
      <div className="topnav" id="myTopnav">
        < SearchBar />
        <Link to='/Account'>Account</Link>
        <Link to='/'>Home</Link>
      </div>
    </>
  )
}
