import React from "react";
import "./Footer.css";
import Typography from '@material-ui/core/Typography';
import { BsEnvelope } from "react-icons/bs";
import { BsClock } from "react-icons/bs";

import { makeStyles } from '@material-ui/core/styles';
import { GrMapLocation } from "react-icons/gr";
import { GrFacebook} from "react-icons/gr";
import { GrInstagram} from "react-icons/gr";
import { FiPhoneCall} from "react-icons/fi";
import {FaTwitterSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {BiUpArrowCircle} from "react-icons/bi";
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    button: {
  fontSize:'12',
  marginLeft:'0.2vw',
   backgroundColor: '#063970',

  '&:hover': {
     backgroundColor: 'lightblue',
  },
  height:'10vh',
  width:'10vw',
  marginTop:'3vh',
//   border:'2px solid #063970'
},
a:{
     '&:hover': {
     color: '#063970',
     textDecoration:'none'
    
},
listStyle:'none',color:'black'
}}))
function Footer() {
    const classes = useStyles();
  return (
      <>
        <div style={{backgroundColor:'lightcyan',width:'100%',height:'78vh',marginTop:'5vh'}}>
              {/* <img src="https://www.bing.com/images/search?view=detailV2&ccid=IW1mtgQK&id=D450424474588FC2BBF62AAA48D3C959B5AC19B7&thid=OIP.IW1mtgQKdSaDk8cBAKOLQwHaE7&mediaurl=https%3a%2f%2fmedia.istockphoto.com%2fphotos%2fblurred-background-a-crowd-of-people-picture-id615720888%3fk%3d6%26m%3d615720888%26s%3d170667a%26w%3d0%26h%3d5qnAcjH_q48tQUmnEGTVFCB6Z-4MIPmFDctWSyJS8Eo%3d&exph=339&expw=509&q=crowd+background&simid=607993594856044943&FORM=IRPRST&ck=4E6FA824F343DAA1577F069DBA075A82&selectedIndex=88&ajaxhist=0&ajaxserp=0" alt="logo" style={{
                    position: "absolute",
                    marginLeft: "5vw",
                    height: "72vh",
                    paddingTop: "0vh",
                    marginTop: "2vh",
                    width: "94%",
                }} /> */}
                <div style={{display:'flex',}}>
                    <div style={{display:'flex',flexDirection:'column',marginLeft:'4vw'}}>
                    <a href="/"><img src="https://hicoder.in/assets/images/logo.png" alt="Footer Logo" style={{height:'8vh',marginTop:'5vh'}}/></a>
                    <p>
                        <Typography style={{color:'black',textAlign:'justify',width:'28vw',marginTop:'3vh'}}>
                            HiCoder enables students in being capable to
                            develop production grade application by availing full stack development, Soft skills,
                            Analytics and project management skills to get a core software job in the Industry. 
                        </Typography>
                    </p>
                       <Button className={classes.button} color="primary"><Typography style={{fontWeight:'bold',paddingRight:'1vw',paddingLeft:'1vw',fontSize:'0.8rem'}}><a href="/apply" class="readon" style={{textDecoration:'none',color:'white'}}>APPLY NOW</a></Typography></Button>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',marginLeft:'20vw'}}>
                   <Typography style={{color:'#063970',fontWeight:'bold',marginTop:'5vh'}}><h4>Info</h4></Typography>
                   <div style={{marginLeft:'-3vw',color:'black'}}>
                       <ul style={{listStyle:'none'}}>
                       <li>
                            <p style={{margin: '0',padding: '0'}}><a href="/" style={{color:'black'}}>Home</a></p>
                       </li>
                       <li>
                           <p style={{margin: '0',padding: '0'}}><a href="/about" style={{color:'black'}}>About</a></p>
                       </li>
                       <li>
                           <p style={{margin: '0',padding: '0'}}><a href="https://blog.hicoder.in" style={{color:'black'}}>Blog</a></p>
                       </li>
                       <li>
                           <p style={{margin: '0',padding: '0'}}><a href="/faq" style={{color:'black'}}>FAQ</a></p>
                       </li>
                       <li>
                          <p style={{margin: '0',padding: '0'}}><a href="/contact" style={{color:'black'}}>Contact</a></p>
                       </li>
                       </ul>
                   </div>
              

                   </div>
                    <div style={{display:'flex',flexDirection:'column',marginLeft:'6vw'}}>
                        <Typography style={{color:'#063970',fontWeight:'bold',marginTop:'5vh'}}><h4>Contact</h4></Typography>
                        <div style={{marginLeft:'-3vw',color:'black',marginTop:'2.5vh'}}>
                       <ul style={{listStyle:'none',marginTop:'-0.8vh'}}>
                       <li>
                           <div style={{display:'flex'}}>       
                            <GrMapLocation style={{marginRight:'1vw',color:'#063970'}}/>
                               <p>
                        <Typography style={{textAlign:'justify',width:'22vw',lineHeight:'1.9em',fontSize:'0.8rem',marginTop:'-1vh'}}>
                            264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana,
                                    India, PIN: 500033
                        </Typography>
                    </p>
                            </div>     
                       </li>
                       <li>
                                       <div style={{display:'flex'}}>       
                            <FiPhoneCall style={{marginRight:'1vw',color:'#063970'}}/>
                               <p>
                        <Typography style={{textAlign:'justify',width:'22vw',lineHeight:'1.9em',fontSize:'0.8rem',marginTop:'-1vh'}}>
                            <a href="tel:+919206980980"className={classes.a}>(+91) 9206 980 980</a>
                        </Typography>
                    </p>
                            </div> 
                       </li>
                       <li>
                           
                                       <div style={{display:'flex'}}>       
                            <BsEnvelope style={{marginRight:'1vw',color:'#063970'}}/>
                               <p>
                        <Typography style={{textAlign:'justify',width:'22vw',lineHeight:'1.9em',fontSize:'0.8rem',marginTop:'-1vh'}}>
                            <a href="mailto:admission@hicoder.in" className={classes.a}>admission@hicoder.in</a>
                        </Typography>
                    </p>
                            </div> 
                       </li>
                       <li>
                          <div style={{display:'flex'}}>       
                            <BsClock style={{marginRight:'1vw',color:'#063970'}}/>
                               <p>
                        <Typography style={{textAlign:'justify',width:'22vw',lineHeight:'1.9em',fontSize:'0.8rem',marginTop:'-1vh'}}>
                           <div style={{fontFamily:'roboto,sans serif'}}>
                                10:00AM - 06:00PM
                            </div>
                        </Typography>
                    </p>
                            </div> 
                       </li>
                       </ul>
                       </div>
                        </div>
                </div>
                <hr style={{width:'91vw',marginTop:'8vh',border:'2px solid cyan'}}/>
                <div style={{display:'flex',flexDirection:"column"}}>
                        <div>
                            <Typography style={{marginLeft:'5vw',fontSize:'1rem',fontFamily:'roboto,sans-serif'}}>
<p>© Copyright | 2020 HiCoder Pvt. Ltd. | All Rights Reserved.</p>
                            </Typography>
                        </div>
                        <div style={{display:'flex',marginTop:'-2vh'}}>
                            <Typography style={{marginLeft:'5vw',fontSize:'1rem',fontFamily:'roboto,sans-serif'}}>
                                <a href="/privacy-policy">Privacy Policy | </a>
                            </Typography>
                            <Typography style={{marginLeft:'-0.1vw',paddingRight:'1vw',paddingLeft:'1vw',fontSize:'1rem',fontFamily:'roboto,sans-serif'}}>
                                    <a href="/terms-of-service">Terms of Service </a>
                            </Typography>
                            <Typography>
                           | * Registration Charges Applied
                    
                            </Typography>
                        </div>
                        </div>
                        <div style={{display:'flex',marginLeft:"88vw",marginTop:'-8vh'}}>
                            <ul style={{listStyle:'none',display:'flex',marginLeft:'-8vw'}}>
                                <li>
                                    <a target="_blank" href="https://www.facebook.com/hicoderofficial"><GrFacebook style={{marginRight:'2vw',color:'#063970'}}/></a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.instagram.com/hicoderofficial/"><GrInstagram style={{marginRight:'2vw',color:'#063970'}}/></a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://twitter.com/hicoderofficial"><FaTwitterSquare style={{marginRight:'2vw',color:'#063970'}}/></a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.linkedin.com/company/69513594/"><FaLinkedin style={{marginRight:'2vw',color:'#063970'}}/></a>
                                </li>
                                 <li>
                                    <Link to="/"><BiUpArrowCircle style={{marginRight:'2vw',color:'#063970',marginLeft:'-1vw'}}/></Link>
                                </li>
                            </ul>
                            {/* <div style={{textAlign:'center',cursor:'pointer',position:'fixed',borderRadius:'50px 50px 4px 4px',display:'block',marginLeft:'89vw'}}>
                                <BiUpArrowCircle/>
                            </div> */}
                        </div>
                {/* </div> */}
                </div>
   </>
  );
}

export default Footer;