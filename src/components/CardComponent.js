import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Email from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ReactComponent as Logo } from '../assets/devchallenges.svg';
import { ReactComponent as Facebook } from '../assets/Facebook.svg';
import { ReactComponent as Github } from '../assets/Gihub.svg';
import { ReactComponent as Google } from '../assets/Google.svg';
import { ReactComponent as Twitter } from '../assets/Twitter.svg';
const useStyles = makeStyles({
    root: {
        maxWidth : "474px",
        maxHeight: "635px",
        borderSize: "1px",
        borderRadius: "24px",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: 'translate(-50%, -50%)'
    },
    contentMargin: {
       margin: "2.8rem 3.65rem"
    },
    text1: {
        fontFamily: ['Noto Sans', 'sans-serif'],
        fontWeight: 600,
        fontSize: "18px",
        margin: '2.125rem 0 0.875rem'
    },
    text2: {
      fontFamily: ['Noto Sans', 'sans-serif'],
      fontSize: '0.875rem'
    },
    textFields: {
      width: '100%',
      height: '3rem',
      borderRadius: '0.5rem'
    },
    button: {
      fontFamily: ['Noto Sans', 'sans-serif'],
      width: '100%',
      background: '#2F80ED',
      borderRadius: '8px',
      color: '#fff',
      textTransform: 'none',
      fontSize: '1rem',
      fontWeight: 600
    },
    icon: {
      color: "#828282"
    }
  });
  
  export default function CardTemplate(props) {
      const {header, pitch, buttonTxt, userExist} = props;
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
          <CardContent className={classes.contentMargin}>
              <Logo className="logo" style={{marginTop: '0'}}/>
            <Typography className={classes.text1} gutterBottom variant="h5" component="p">
            {header}
            </Typography>
            { pitch &&
           <Typography color="textSecondary" className={classes.text2} style={{color: '#333'}} variant="body2" component="p">
                {pitch}
            </Typography>
            }
            <TextField
              id="outlined-secondary"
              placeholder="Email"
              variant="outlined"
              color="secondary"
              className={classes.textFields}
              style = {{marginTop: '1.5rem', marginBottom: '0.25rem'}}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email className={classes.icon}/>
                  </InputAdornment>
                ),
              }}
          />
          <TextField
              id="outlined-secondary"
              placeholder="Password"
              variant="outlined"
              color="secondary"
              className={classes.textFields}
              style={{marginBottom: '1.875rem'}}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock className={classes.icon}/>
                  </InputAdornment>
                ),
              }}
          />
          <Button className={classes.button} style={{marginBottom: '2rem'}}>{buttonTxt}</Button>
          <Typography className={classes.text2} style={{textAlign: 'center', color: '#828282', fontSize: '0.65rem', marginBottom: '1.525rem'}} variant="body2" component="p">
            or continue with these social profile
          </Typography>
          <Box display="flex" justifyContent="center">
            <Button><Google/></Button>
            <Button><Facebook/></Button>
            <Button><Twitter/></Button>
            <Button><Github/></Button>
          </Box>
          <Typography className={classes.text2} style={{textAlign: 'center', color: '#828282', fontSize: '0.65rem', marginTop: '18px'}} variant="body2" component="p">
            {userExist.txt} <Link style={{color: "#2F80ED", textDecoration: 'none'}} to={`/${userExist.linkTxt.toLowerCase()}`}>{userExist.linkTxt}</Link>
          </Typography>

          </CardContent>
      </Card>
    );
  }