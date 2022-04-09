import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Account/Account.css'

const Account = () => {
  const SubmitHandler = (e) => {
    e.preventDefault()
  }
  const [email, setEmail] = useState();
  const ChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const [password, setPassword] = useState();
  const ChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const SubmitRegistration = () => {
    if (email == null) {
      alert('Enter Email')
    }
    if (password == null) {
      alert('Enter Password')
    }
    else {

      alert('Registration Successful')
    }
  }
  let NewNav = {
    backgroundColor: '#000',
    color: '#fff',
    listStyleType: 'none',
    display: 'flex',
    padding: '10px',
    fontWeight: 'bolder',
  }
  let previous = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bolder',
  }

  return (
    <>
      {/* nav */}
      <div className='bg'>
        <div >
          <ul style={NewNav}>
            <li >
              <Link style={previous} to='/'>
                &laquo;
              </Link>
            </li>
          </ul>
        </div>
        < br />

        <form className='container' onSubmit={SubmitHandler}>
          <div className="Mycontainer">
            <center> <h1>Sign Up</h1></center>
            <hr />
            <label htmlFor="email"><b>Email</b></label>
            <input onChange={ChangeEmail} type="text" placeholder="Enter Email" name="email" id="email" required />

            <label htmlFor="psw"><b>Password</b></label>
            <input onChange={ChangePassword} type="password" placeholder="Enter Password" name="psw" id="psw" required />

            <hr />

            <p>By creating an account you agree to our <a href="#">Terms &amp; Privacy</a>.</p>

            <button onClick={SubmitRegistration} type="submit" className="registerbtn">
              <Link to='/'>Register</Link>
            </button>
          </div>
          <br />
          <div className="container">
            <p>Already have an account? <a href="#">Log In</a>.</p>
          </div>
          <br />
        </form>
      </div>
    </>
  )
}

export default Account