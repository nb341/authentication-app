import { Box,
         Button,
         ClickAwayListener,
         Grow,
         Paper,
         Popper,
         MenuItem,
         MenuList,
         makeStyles,
         Divider
    } 
    from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React, { useState } from 'react';
import { CustomPlaceholder } from 'react-placeholder-image';
import {ReactComponent as Logo} from '../assets/devchallenges.svg'


const useStyles = makeStyles((theme) => ({
    root: {
        textTransform: 'none'
    },
  }));

const ProfileButton = () =>{
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button style={{textTransform: 'none', margin: 0, padding: 0}} onClick={(e)=> setOpen(!open) }>
                <CustomPlaceholder width={24} height={24} />
                <span style={{padding: "0 15px"}}>Xantel Neal</span>
                <ArrowDropDownIcon/>
            </Button>
          { open &&  <Paper elevation={3}>
                <Box display="flex" flexDirection="column" >
                <Button className={classes.root}>My Profile</Button>
                <Button className={classes.root}>Group Chat</Button>
                 <Divider/>
                <Button className={classes.root}>Logout</Button>
                </Box>
            </Paper>
        }
        </div>
    )
}


export default function Header(){
    return(
    <Box display="flex" justifyContent="space-between" style={{padding: 2}}>
        <Logo/>
        <ProfileButton/>
    </Box>
    )
}