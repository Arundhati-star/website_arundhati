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
function Desd() {
      const classes = useStyles();
    return (
        <>
        <div style={{backgroundColor:'white',width:'100%',height:'78vh',marginTop:'12vh',display:'flex'}}>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'5vw',marginTop:'8vh'}}>
            <Typography style={{color:'black',fontWeight:'bold',font:'dark'}}>
                <h2>Why HiCoder?</h2>
            </Typography>
            <p>
                 <Typography style={{marginTop:'2vh',textAlign:'justify',width:'34vw'}}>
                             HiCoder enables students to think about real-world problems, design, and develop the right solution.<a href="/syllabus">know more</a>
                            </Typography>
                            
            </p>
            <div style={{display:'flex'}}>
                <img src="https://hicoder.in/assets/images/whychooseus/style4/icons/1.png" style={{height:'10vh'}}/>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <Typography>
                        <h4 class="title" style={{marginLeft:'2vw'}}>Personalized Training</h4>
                    </Typography>
                    <p>
                        <Typography style={{marginTop:'1.5vh',textAlign:'justify',width:'28vw',marginLeft:'2vw'}}>
                            We understand the weakness of students coming from poor educational backgrounds. HiCoder avails resources and extra after-class support to match the criteria and keep up with tech. 
                            </Typography>
                    </p>
                </div>
            </div>
            <div style={{display:'flex'}}>
                <img src="https://hicoder.in/assets/images/whychooseus/style4/icons/2.png" style={{height:'10vh'}}/>
                     <div style={{display:'flex',flexDirection:'column'}}>
                    <Typography>
                        <h4 class="title" style={{marginLeft:'2vw',fontFamily:"Roboto,sans-serif"}}>Production Projects</h4>
                    </Typography>
                    <p>
                        <Typography style={{marginTop:'1.5vh',textAlign:'justify',width:'28vw',marginLeft:'2vw'}}>
                            Every student ends up making around 3 projects that are wholesome, cloud-hosted and can be used for a commercial purpose.
                            </Typography>
                    </p>
                </div>
            </div>

            </div>
           <img src="https://hicoder.in/assets/images/whychooseus/style4/right-img.jpg" style={{ position: "absolute",
                    marginLeft: "45vw",
                    height: "69vh",
                    paddingTop: "0vh",
                    marginTop: "10vh",
                    width: "48%",}}/>
        </div>
            
        </>
    )
}

export default Desd
