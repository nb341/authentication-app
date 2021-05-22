import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
        margin: 58
    },
    text: {
        font: "'Noto Sans', sans-serif"
    }
  });
  
  export default function SignUp() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
          <CardContent className={classes.contentMargin}>
              <Logo className="logo" />
            <Typography className={classes.text} gutterBottom variant="h6" component="p">
            Join thousands of learners from around the world 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Master web development by making real-life projects. There are multiple paths for you to choose
            </Typography>
          </CardContent>
      </Card>
    );
  }