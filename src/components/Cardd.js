import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FaClock } from 'react-icons/fa';
const useStyles = makeStyles({
  root: {
    minWidth: 200,
    marginRight:15
  },
  media: {
      verticalAlign:'middle',
      borderStyle:'none',
    height: 58,
  },
    button: {
  textDecoration:'none',color:'black',fontWeight:'bold',
  '&:hover': {
    color: 'lightgreen',
    textDecoration:'none'
  },
},
});


function Cardd() {
    const classes = useStyles();
    return (
        <>
            <div style={{display:'flex',marginTop:'-35vh',paddingLeft:'2vw',paddingRight:'2vw',marginBottom:'3vh'}}>
                <div style={{display:'flex'}}>
                    <Card className={classes.root}>
      <CardActionArea>
         <img src="https://hicoder.in/assets/images/blog/1.jpg" style={{height:'45vh',marginLeft:'0vw',marginTop:'0vh', verticalAlign:'middle',width:'31vw', verticalAlign:'middle',
      borderStyle:'none',}}/>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:'justify'}}>
        <a href="https://blog.hicoder.in/college-education-isnt-enough-to-be-relevant-for-the-tech-industry/" className={classes.button}>College education isn't enough to be relevant for the tech Industry.</a>
          </Typography>
        </CardContent>
         <CardActions>
      <div style={{display:'flex',justifyContent:'space-between'}}>
          <div style={{display:'flex'}}>
         <img src="https://hicoder.in/assets/images/blog/avatar/1.png" alt="" style={{height:'5vh'}}></img>
         <Typography>
             HiCoder
         </Typography>
        </div>
        <div style={{display:'flex',marginRight:'-30vw'}}>
            <FaClock style={{color:'#67c27c',marginTop:'0.8vh',marginRight:'1vw'}}/>
             06 Sep 2020
                                    
        </div>

      </div>
      </CardActions>
      </CardActionArea>
    </Card>
        <Card className={classes.root}>
      <CardActionArea>
         <img src="https://hicoder.in/assets/images/blog/2.jpg" style={{height:'45vh',marginLeft:'0vw',marginTop:'0vh', verticalAlign:'middle',width:'31vw',verticalAlign:'middle',
      borderStyle:'none',}}/>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:'justify'}}>
    <a href="https://blog.hicoder.in/it-project-demand-increases-by-127-as-offline-businesses-shut-down/" className={classes.button}>IT project demand increases by 127% as offline businesses shut down.</a>
          </Typography>
        </CardContent>
          <CardActions>
      <div style={{display:'flex',justifyContent:'space-between'}}>
          <div style={{display:'flex'}}>
         <img src="https://hicoder.in/assets/images/blog/avatar/1.png" alt="" style={{height:'5vh'}}></img>
         <Typography>
             HiCoder
         </Typography>
        </div>
        <div style={{display:'flex',marginRight:'-32vw'}}>
             <FaClock style={{color:'#67c27c',marginTop:'0.8vh',marginRight:'1vw'}}/>
              14 Oct 2020
                                    
                                    
        </div>

      </div>
      </CardActions>
      </CardActionArea>
    </Card>
        <Card className={classes.root}>
      <CardActionArea>
         <img src="https://hicoder.in/assets/images/blog/3.jpg" style={{height:'45vh',marginLeft:'0vw',marginTop:'0vh', verticalAlign:'middle',width:'31vw',
      borderStyle:'none',}}/>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:'justify'}}>
       <a href="https://blog.hicoder.in/why-businesses-hire-failed-entrepreneurs/" className={classes.button}>13 reasons why businesses love hiring failed entreprneurs.</a>
          </Typography>
        </CardContent>
   <CardActions>
      <div style={{display:'flex',justifyContent:'space-between'}}>
          <div style={{display:'flex'}}>
         <img src="https://hicoder.in/assets/images/blog/avatar/1.png" alt="" style={{height:'5vh'}}></img>
         <Typography>
             HiCoder
         </Typography>
        </div>
        <div style={{display:'flex',marginRight:'-27vw'}}>
             <FaClock style={{color:'#67c27c',marginTop:'0.8vh',marginRight:'1vw'}}/>
               17 Oct 2020
                                    
                                    
                                    
        </div>

      </div>
      </CardActions>
      </CardActionArea>
    </Card>
    </div>

            </div>
        </>
    )
}

export default Cardd;

