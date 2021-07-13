import React from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    button: {
  fontSize:'12',
  marginLeft:'0.1vw',
  backgroundColor: '#063970',
  '&:hover': {
     backgroundColor: '#063970',
  },
  height:'32vh',
  width:'15vw',
  marginTop:'4vh',
  border:'2px solid #063970'
},
}))
function Desv() {
    const classes = useStyles();
    return (
        <>
            <div style={{backgroundColor:'white',width:'100%',height:'78vh',marginTop:'12vh',display:'flex'}}>
              <img src="https://hicoder.in/assets/images/home/1.jpg" alt="logo" style={{
                    position: "absolute",
                    marginLeft: "5vw",
                    height: "89vh",
                    paddingTop: "0vh",
                    marginTop: "2vh",
                    width: "42%",
                }} />
                <div style={{display:'flex',flexDirection:'column',marginLeft:'53vw',marginTop:'12vh'}}>
                        <Typography style={{color:'black',fontWeight:'bold',marginBottom:'2vh'}}><h1>How Does HiCoder Help?</h1></Typography>
                        <p>
                              <Typography style={{color:'grey',fontWeight:'bold',textAlign:'justify',width:'34vw'}}>HiCoder resembeles software development and marketing altogether to develop applications that can be used by real user than keeping on Github.</Typography>
                           
                        </p>
            
                        <p>
                            <Typography style={{marginTop:'2vh',textAlign:'justify',width:'34vw'}}>
                               HiCoder understands the struggle, peer pressure an engineering student goes into throughout curriculum. We believe, Most engineering students who can be part of the core software industry end up having a tech support or customer care job just because college never taught trending technology, project Management or encouraged students to their own projects. 
                            </Typography>
                        </p>
                          <Button className={classes.button}color="primary"><Typography style={{fontWeight:'bold',paddingRight:'2vw',paddingLeft:'2vw'}}><a href="#know-more" class="readon" style={{textDecoration:'none'}}>Know more</a></Typography></Button>
                </div>
                </div>
        </>
    )
}

export default Desv
