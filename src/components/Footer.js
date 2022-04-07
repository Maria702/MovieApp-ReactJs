import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FaceBookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import '../App.css'


export const Footer = () => {
  const tick = (
    <>
      {new Date().toLocaleTimeString()}
    </>
  )

  let boxStyle = {
    backgroundColor: "black",
    bottom: '0px',
  }
  let gridStyle = {
    marginLeft: '20px',
    marginRight: '20px',
    color: 'white',
  }
  let iconStyle = {
    color: 'white',

  }
  let myLink = {
   fontSize: '20px',
    color: 'white',
    textDecoration: 'none',
    float: 'right',
    display: 'flex',
    textAlign: 'center',
    padding: '14px 16px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
  }
  


  return (
    <>

      <div>
        <Box style={boxStyle} sx={{ flexGrow: 1 }}>

          <Grid style={gridStyle} container>
            <Grid item xs={12} sm={4}>
              <p>Upcoming Movies</p>
              <p>History</p>
            </Grid>
            <Grid item xs={12} sm={4}>
              <p>Services</p>
              <p>Our Mission</p>
             
            </Grid>
            <Grid item xs={12} sm={4}>
              <p>Privacy Policy</p>
              <div style={iconStyle}>
                <FaceBookIcon />
                <TwitterIcon />
                <LinkedInIcon />
                <InstagramIcon />
              </div>
              <div>
                {tick}

              </div>
            </Grid>

          </Grid>

          <p className='copy-right'>Copyright © 2022</p>
        </Box>
      </div>
    </>
  )
}