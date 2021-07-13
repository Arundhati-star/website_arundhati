// import React from 'react'
import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { Button } from './Button';
// import Man from '../assets/'
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    button: {
  fontSize:'12',
  marginLeft:'10vw',
  '&:hover': {
     backgroundColor: '#063970',
  },
  height:'10vh',
  width:'15vw',
  marginTop:'4vh',
  border:'2px solid #063970'
},
}))
function Des() {
      const classes = useStyles();
    const [button, setButton] = useState(true);
    return (
        <>
        <div style={{backgroundColor:'white',width:'100%',height:'78vh'}}>
              <img src=" https://i.kisscc0.com/20180814/auw/kisscc0-laptop-employment-job-cartoon-computer-man-sitting-with-laptop-5b734a33340e44.0437420215342822912132.png" alt="logo" style={{
                    position: "absolute",
                    marginLeft: "5vw",
                    height: "72vh",
                    paddingTop: "0vh",
                    marginTop: "2vh",
                    width: "94%",
                }} />
                <div style={{diplay:'flex',flexDirection:'column'}}>
                <Typography style={{color:'#063970',marginLeft:'10vw',marginTop:'10vh',fontWeight:'bold',fontSize: '0.7rem' }}>
                    YOUR TIME,OUR EFFORTS
                </Typography>
                <Typography style={{color:'black',marginLeft:'10vw',marginTop:'0.8vh',fontWeight:'bold',fontSize:'2.5rem'}}>
                    <h1>Pay After Job Full Stack </h1>
                </Typography>
                <Typography style={{color:'black',marginLeft:'10vw',marginTop:'0.8vh',fontWeight:'bold',fontSize:'2.5rem'}}>
                    <h1>  Development Course</h1>
                  
                </Typography>
    {/* {button && <Button buttonStyle='btn--outline'>Apply Now</Button>} */}
    <Button className={classes.button}variant="outlined" color="primary"><Typography style={{fontWeight:'bold',paddingRight:'2vw',paddingLeft:'2vw'}}><a href="#know-more" class="readon" style={{textDecoration:'none'}}>Know more</a></Typography></Button>
 
                </div>
        </div>
           {/* <div style={{backgroundColor:'#063970',width:'100vh'}}> */}
               <div style={{fontFamily:'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',fontSize:'1.4rem',backgroundColor:'#063970',display:'flex',height:'15vh'}}><Typography style={{marginLeft:'5vw',color:'white',fontWeight:'bold',marginTop:'5vh',justifyContent:'center',alignItems:'center',fontSize:'1.2rem'}}>NEXT BATCH: </Typography><span style={{justifyContent:'center',alignItems:'center',marginTop:'4.6vh',color:'white',fontSize:'1.2rem',marginLeft:'0.5vw',marginRight:'0.5vw'}}>27 July |</span>  <small style={{marginTop:'4.8vh',marginLeft:'0.1vw',justifyContent:'center',alignItems:'center'}}><a href="/apply" style={{color:'white'}}>Apply Now</a></small></div>

    {/* </div> */}
</>
    )
}

export default Des
