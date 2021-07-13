import React from 'react'
import { Typography } from '@material-ui/core';
function Desv() {
    return (
        <>
            <div style={{backgroundColor:'white',width:'100%',height:'78vh',marginTop:'12vh',display:'flex'}}>
              <img src="https://hicoder.in/assets/images/about/h8-left-img.jpg" alt="logo" style={{
                    position: "absolute",
                    marginLeft: "5vw",
                    height: "80vh",
                    paddingTop: "0vh",
                    marginTop: "2vh",
                    width: "42%",
                }} />
                <div style={{display:'flex',flexDirection:'column',marginLeft:'53vw',marginTop:'17vh'}}>
                        <Typography style={{color:'grey',fontWeight:'bold',marginBottom:'2vh'}}>HICODER</Typography>
                        <Typography style={{color:'black',fontWeight:'bold'}}><h1>We help students learn</h1></Typography>
                        <Typography style={{color:'#063970',fontWeight:'bold'}}><h1>Full Stack Development.</h1></Typography>
                        <p>
                            <Typography style={{marginTop:'2vh',textAlign:'justify',width:'34vw'}}>
                                HiCoder does everything that helps students become successful in the software industry. 
                                From product thinking to product designing, system designing, choosing the right frameworks,
                                 breaking projects in stages to building teams, and working collaboratively to making the 
                                 application comply with the latest Google SEO needs and knowledge about integrated analytics, 
                                 we do everything in between. 
                            </Typography>
                        </p>
                </div>
                </div>
        </>
    )
}

export default Desv
