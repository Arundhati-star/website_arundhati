import React from 'react'
import Typography from '@material-ui/core/Typography';
import { FaQuoteLeft } from 'react-icons/fa';
import Avatar from '@material-ui/core/Avatar';

function Thought() {
    return (
        <>
           <div style={{display:'flex',flexDirection:'column',height:'138vh',backgroundColor:'lightcyan'}}>
                    <Typography style={{color:'#063970',marginLeft:'38vw',marginTop:'10vh'}}>
                        THOUGHTS ON HICODER SYLLABUS
                    </Typography>
                    <Typography style={{color:'black',marginLeft:'34vw',fontWeight:'bold',}}>
                        <h2>Reviews by Industry Experts</h2>
                    </Typography>
                        
            <div style={{width:'100%',height:'78vh',marginTop:'12vh',display:'flex',paddingLeft:'4.5vw',paddingRight:'-5vw'}}>
              <img src="https://hicoder.in/assets/images/home/1.jpg" alt="logo" style={{
                    position: "absolute",
                    marginLeft: "5vw",
                    height: "89vh",
                    paddingTop: "0vh",
                    marginTop: "2vh",
                    width: "42%",
                }} />
                <div style={{backgroundColor:'white',height:'89vh',width:'42%',display:'flex',flexDirection:'column',marginLeft:'46vw',marginTop:'2vh'}}>
                    <FaQuoteLeft size="40px"style={{marginLeft:'18vw',marginTop:'14vh',color:'lightcyan'}}/>
                    <p>
                        <Typography style={{textAlign:'justify',width:'32vw',marginLeft:'4vw',marginTop:'2vw',fontStyle:'italic',lineHeight:'1.9em',fontSize:'1.1rem'}}>
                            This is a great opportunity for students coming from tier 2  tier 3 engineering colleges. HiCoder's syllabus looks wholesome as student will have opportunity to do both frontend as well as backend. Happy to see that IT Industry will have a wave of qualilty engineers. 
                        </Typography>
                    </p>
                    <Avatar style={{marginLeft:'18vw',fontSize:'5vh'}}alt="Remy Sharp" src="https://hicoder.in/assets/images/testimonial/avatar/1.jpg"/>
                    <Typography style={{color:'black',marginLeft:'15vw',fontSize:'0.9rem',marginTop:'2vh',fontWeight:'bold'}}>Ashish Vishwakarma</Typography>
                    <Typography style={{color:'gray',marginLeft:'14vw',fontSize:'0.9rem',marginTop:'0.1vh'}}>Software Engineer,Bosch</Typography>
                     </div>
                </div>
                </div>
                    
        </>
    )
}

export default Thought
