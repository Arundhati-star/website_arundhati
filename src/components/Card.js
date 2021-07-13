import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    minWidth: 290,
    marginRight:15
  },
  media: {
      verticalAlign:'middle',
      borderStyle:'none',
    height: 58,
  },
});

function Car() {
     const classes = useStyles();
    return (
        <>
            <div style={{display:'flex',flexDirection:'column',paddingRight:'2vw',paddingLeft:'2vw',marginBottom:'3vh',marginTop:'-28vh'}}>
                <div style={{display:'flex',marginBottom:'5vh'}}>
                     <Card className={classes.root}>
      <CardActionArea>
         <img src="https://hicoder.in/assets/images/services/style9/1.png" style={{height:'10vh',marginLeft:'10vw',marginTop:'8vh', verticalAlign:'middle',
      borderStyle:'none',}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{marginLeft:'7vw',fontSize:'1.3rem',fontWeight:'bold'}}>
            Front End
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:'justify'}}>
       Students learn to design, develope the UI following UX with industry standards.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     <Card className={classes.root}>
      <CardActionArea>
            <img src="https://hicoder.in/assets/images/services/style9/2.png" style={{height:'10vh',marginLeft:'10vw',marginTop:'8vh', verticalAlign:'middle',
      borderStyle:'none',}}/>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{marginLeft:'7vw',fontSize:'1.3rem',fontWeight:'bold'}}>
            Back End
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Students learn CS Architecture, CRUD, API, Authentication, Authorization, DB and etc.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     <Card className={classes.root}>
      <CardActionArea>
          <img src="https://hicoder.in/assets/images/services/style9/3.png" style={{height:'10vh',marginLeft:'8vw',marginTop:'8vh', verticalAlign:'middle',
      borderStyle:'none',}}/>
        <CardContent>
           <Typography gutterBottom variant="h5" component="h2" style={{marginLeft:'4vw',fontSize:'1rem',fontWeight:'bold'}}>
            Project Management
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Students learn to plan, project, and execute development projects with client expectation. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     <Card className={classes.root}>
      <CardActionArea>
          <img src="https://hicoder.in/assets/images/services/style9/4.png" style={{height:'8vh',marginLeft:'10vw',marginTop:'8vh', verticalAlign:'middle',
      borderStyle:'none',}}/>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{marginLeft:'4vw',fontSize:'1rem',fontWeight:'bold'}}>
            Production Deployment
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Students learn to create a server, deploy an application following security guidelines.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                </div>
    <div style={{display:'flex'}}>
                     <Card className={classes.root}>
      <CardActionArea>
        <img src="https://hicoder.in/assets/images/services/style9/5.png" style={{height:'8vh',marginLeft:'10vw',marginTop:'8vh', verticalAlign:'middle',
      borderStyle:'none',}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{marginLeft:'5vw',fontSize:'1.3rem',fontWeight:'bold'}}>
            Basic Analytics
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Students learn about analytics, usability, and integration of analytics in their production application.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     <Card className={classes.root}>
      <CardActionArea>
            <img src="https://hicoder.in/assets/images/services/style9/6.png" style={{height:'8vh',marginLeft:'10vw',marginTop:'8vh', verticalAlign:'middle',
      borderStyle:'none',}}/>
        <CardContent>
           <Typography gutterBottom variant="h5" component="h2" style={{marginLeft:'7vw',fontSize:'1.3rem',fontWeight:'bold'}}>
            Soft Skills
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Soft skills encourages open communication &amp; enhances corporate skills having corporate attitude. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     <Card className={classes.root}>
      <CardActionArea>
            <img src="https://hicoder.in/assets/images/services/style9/7.png" style={{height:'8vh',marginLeft:'10vw',marginTop:'8vh', verticalAlign:'middle',
      borderStyle:'none',}}/>
        <CardContent>
             <Typography gutterBottom variant="h5" component="h2" style={{marginLeft:'4vw',fontSize:'1.3rem',fontWeight:'bold'}}>
            Industry Standards
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Industry Trending technology, tools, and process adaption help students adapt to corporate with almost no effort.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     <Card className={classes.root}>
      <CardActionArea>
          <img src="https://hicoder.in/assets/images/services/style9/8.png" style={{height:'8vh',marginLeft:'10vw',marginTop:'8vh', verticalAlign:'middle',
      borderStyle:'none',}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{marginLeft:'4vw',fontSize:'1.3rem',fontWeight:'bold'}}>
            Max Pro Resume
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Students get a unique HiCoder smart ID, Certificate, and an industry expert-guided self developed integrated resume.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                </div>
            </div>
        </>
    )
}

export default Car;
