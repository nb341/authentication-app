import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as Logo } from '../assets/devchallenges.svg';
const useStyles = makeStyles({
    root: {
        maxWidth : "473.83px",
        maxHeight: "634.3px",
        borderSize: "1px",
        borderRadius: "24px",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: 'translate(-50%, -50%)'
    },
    contentMargin: {
       margin: "3rem 3.625rem"
    },
    text1: {
        fontFamily: ['Noto Sans', 'sans-serif'],
        fontWeight: 600,
        fontSize: "18px",
        margin: '2.125rem 0 0.825rem'
    },
    text2: {
      fontFamily: ['Noto Sans', 'sans-serif'],
      fontSize: '0.825rem'
    },
    textFields: {
      width: '100%'
    },
    button: {
      fontFamily: ['Noto Sans', 'sans-serif'],
      width: '100%',
      background: '#2F80ED',
      borderRadius: '8px',
      color: '#fff',
      textTransform: 'none'
    },
  });
  
  export default function SignUp() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
          <CardContent className={classes.contentMargin}>
              <Logo className="logo" />
            <Typography className={classes.text1} gutterBottom variant="h5" component="p">
            Join thousands of learners from around the world 
            </Typography>
            <Typography color="textSecondary" className={classes.text2} variant="body2" component="p">
            Master web development by making real-life projects. There are multiple paths for you to choose
            </Typography>
            <TextField
              id="outlined-secondary"
              label="Email"
              variant="outlined"
              color="secondary"
              className={classes.textFields}
          />
          <TextField
              id="outlined-secondary"
              label="Password"
              variant="outlined"
              color="secondary"
              className={classes.textFields}
          />
          <Button className={classes.button}>Start coding now</Button>
          <Typography className={classes.text2} style={{textAlign: 'center', color: '#828282', fontSize: '0.825rem'}} variant="body2" component="p">
            or continue with these social profile
          </Typography>
          </CardContent>
      </Card>
    );
  }