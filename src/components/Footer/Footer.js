import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FaceBookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../Footer/Footer.css'


export const Footer = () => {
  const tick = (
    <>
      {new Date().toLocaleTimeString()}
    </>
  )
  let boxStyle = {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bolder",
    fontSize: "20px",
  }
  let gridStyle = {
    marginLeft: '20px',
    marginRight: '20px',
    color: 'white',
  }
  let iconStyle = {
    color: 'white',

  }
  return (
    <>
      <div>
        <Box style={boxStyle} sx={{ flexGrow: 1 }}>
          <Grid style={gridStyle} container>
            <Grid item xs={12} sm={4}>
              <p className='para'>  Upcoming Movies</p>
              <p className='para'> History </p>
            </Grid>
            <Grid item xs={12} sm={4}>
              <p className='para'>Services </p>
              <p className='para'>Our Mission </p>
            </Grid>
            <Grid item xs={12} sm={4}>
              <p className='para'>Privacy Policy  </p>
              <div style={iconStyle}>
                < FaceBookIcon />
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