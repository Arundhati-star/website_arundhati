import React from 'react'
import { Typography } from '@material-ui/core';
import { FaCheckCircle } from 'react-icons/fa';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    button: {
  fontSize:'12',
  marginLeft:'0.2vw',
   backgroundColor: 'blue',

  '&:hover': {
     backgroundColor: 'lightblue',
  },
  height:'35vh',
  width:'10vw',
  marginTop:'4vh',
//   border:'2px solid #063970'
},
}))
function Desb() {
      const classes = useStyles();
    return (
        <>
        <div style={{backgroundColor:'white',width:'100%',height:'78vh',marginTop:'12vh',display:'flex'}}>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'5vw',marginTop:'8vh'}}>
            <Typography style={{color:'black',fontWeight:'bold'}}>
                <h2>Trained on the most in-</h2>
            </Typography>
            <Typography style={{color:'black',fontWeight:'bold'}}>
                <h2>demand Technology Skills</h2>
            </Typography>
            <p>
                 <Typography style={{marginTop:'2vh',textAlign:'justify',width:'34vw'}}>
                               At the end of the course, every student becomes capable to develop their own create a web application, host on their own domain, enable advanced technologies and observe people's actions on their website and represent themselves as a HiCoder that matters. 
                            </Typography>
            </p>
            <ul style={{marginLeft:'-3vw',listStyleType:'none'}}>
                <li>
                    <div style={{display:'flex',marginRight:'2vw',marginTop:'2vh'}}>
                        <FaCheckCircle style={{marginRight:'1vw',color:'#0028ff'}}/>
                         <Typography style={{marginTop:'-0.8vh'}}>
                        End to End Project Analysis, Design &amp; Development
                    </Typography>
                    </div>
                   
                </li>
                <li>
                    <div style={{display:'flex',marginRight:'2vw',marginTop:'2vh'}}>
                        <FaCheckCircle style={{marginRight:'1vw',color:'blue'}}/>
                         <Typography style={{marginTop:'-0.8vh'}}>
                            Authentication, Geo Tracking, Payment Gateway 
                    </Typography>
                    </div>
                </li>
                <li>
                     <div style={{display:'flex',marginRight:'2vw',marginTop:'2vh'}}>
                        <FaCheckCircle style={{marginRight:'1vw',color:'blue'}}/>
                         <Typography style={{marginTop:'-0.8vh'}}>
                              Analytics, SEO, Data Representation, Industry Standards
                    </Typography>
                    </div>
                </li>
                <li>
                      <div style={{display:'flex',marginRight:'2vw',marginTop:'2vh'}}>
                        <FaCheckCircle style={{marginRight:'1vw',color:'blue'}}/>
                         <Typography style={{marginTop:'-0.8vh'}}>
                               Max Pro Resume, Soft Skills, Client Expectation Management
                    </Typography>
                    </div>
                 </li>

            </ul>
              <Button className={classes.button} color="primary"><Typography style={{fontWeight:'bold',paddingRight:'1vw',paddingLeft:'1vw',fontSize:'0.8rem'}}><a href="/apply" class="readon" style={{textDecoration:'none',color:'white'}}>APPLY NOW</a></Typography></Button>
            <Button></Button>
            </div>
           <img src="https://hicoder.in/assets/images/home/2.jpg" style={{ position: "absolute",
                    marginLeft: "45vw",
                    height: "48vh",
                    paddingTop: "0vh",
                    marginTop: "22vh",
                    width: "48%",}}/>
        </div>
            
        </>
    )
}

export default Desb
