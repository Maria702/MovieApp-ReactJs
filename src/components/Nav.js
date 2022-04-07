import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

export const Nav = () => {
  return (
    <>


      <div className="topnav" id="myTopnav">
       < SearchBar />
        {/* <Link to='/About'>About</Link>
        <Link to='/News'>News</Link> */}
        <Link to='/'>Home</Link>




        <a href="javascript:void(0);" className="icon" onclick="myFunction()">
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </>
  )
}
