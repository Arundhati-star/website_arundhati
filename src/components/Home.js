import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import PageNavBar from './PageNavBar';
import Des from './Des';
import Desv from './Desv';
import Desb from './Desb';
import Desd from './Desd';
import Dese from './Dese';
import Desef from './Desef';
import Car from './Card'
import Thought from './Thought';
import Partner from './Partner';
import News from './News';
import Cardd from './Cardd';
import Footer from './Footer'

// import { Link } from 'react-router';
import Divider from '@material-ui/core/Divider';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiPhoneCall, FiClock, FiTwitter } from "react-icons/fi";
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            backgroundColor: '#063970',
            paddingTop: '0vh',
            marginTop: '0vh',
            marginLeft: '0vw',
            marginRight: '0vw',
            // display: 'flex',
            // flexDirection: 'row',

        },
    },
}));
function Home() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <div style={{ display: 'flex', }}>
                    <Button href="mailto:admission@hicoder.in" color="primary" style={{
                        // marginLeft: '-50vw',
                        marginLeft: '5vw',
                        textTransform: 'lowercase',
                        color: 'white',
                        fontWeight: 'bold'
                    }}>
                        <FaEnvelope style={{ marginRight: '0.5vw' }} />admission@hicoder.in
                    </Button>
                    {/* <Divider></Divider> */}
                    <div style={{
                        borderLeft: '1.5px solid black',
                        height: '6vh',
                        position: 'absolute',
                        left: '30%',
                        marginLeft: '-10vw',
                        top: '0'
                    }}></div>
                    <div style={{ display: 'flex', marginTop: "0.5vh", marginLeft: '0.5vw' }}>
                        < FiPhoneCall style={{ marginTop: '1.3vh', marginRight: '0.5vw' }} />
                        <a href=" tel:+919206980980" style={{ color: 'white', textDecoration: 'none', marginTop: '0.9vh', fontSize: '0.9rem' }}>(+91) 9206 980 980</a>
                    </div>

                    {/* <Divider orientation="vertical" flexItem style={{ marginLeft: "1.5vw", marginRight: "1.5vw", height: '7vh', marginTop: "-8vh" }}></Divider> */}
                    <div style={{ display: 'flex', marginTop: "0.5vh", marginLeft: '35vw' }}>
                        {/* <div> */}
                        <FiClock style={{ marginTop: '1.3vh', marginRight: '0.5vw' }} />
                        <Typography style={{ color: 'white', marginTop: '0.6vh' }}>Mon - Fri: 10:00am - 06.00pm</Typography>
                        {/* </div> */}
                    </div>
                    <div style={{
                        borderLeft: '1.5px solid black',
                        height: '6vh',
                        position: 'absolute',
                        left: '97%',
                        marginLeft: '-10vw',
                        top: '0'
                    }}></div>
                    <div style={{ dispaly: 'flex', marginLeft: '0.8vw', marginTop: "0.5vh" }}>

                        <a href=" https://www.facebook.com/hicoderofficial" target="_blank" style={{ marginRight: '0.8vw' }}><FaFacebookF /></a>
                        <a href="https://www.instagram.com/hicoderofficial/" target="_blank" style={{ marginRight: '0.8vw' }}><FaInstagram /></a>
                        <a href="https://twitter.com/hicoderofficial" target="_blank" style={{ marginRight: '0.8vw' }}><FiTwitter /></a>
                        <a href="https://www.linkedin.com/company/69513594/" target="_blank"><FaLinkedinIn /></a>
                    </div>
                </div>
                {/* </div> */}
            </div>
            {/* </div> */}
            <PageNavBar />
            <Des/>
            <Desv/>
            <Desb/>
            <Desd/>
            <Dese/>
            <Desef/>
            <Car/>
            <Thought/>
            <Partner/>
            <News/>
            <Cardd/>
            <Footer/>
        </>
    );
}

export default Home;
