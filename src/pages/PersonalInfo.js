import React, { useEffect } from 'react';
import {Grid, Box, Container, Divider, Paper, makeStyles} from '@material-ui/core';
import { CustomPlaceholder } from 'react-placeholder-image';
import { Link } from 'react-router-dom';


export default function PersonalInfo(props){
     

    const {imgUrl, name, bio, phone, email, password} = props;

    useEffect(()=>{
        document.title = "Personal Info";
    }, [])

    return( 
     <Container>
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <h1>Personal Info</h1>
        <p>Basic info, like your name and photo</p>
        <Paper>
            <Grid className="m" item xs={12} style={{display: 'flex'}}>
                <div className="test">
                    <p>Profile</p>
                    <p>Some info may be visible to other people</p>
                </div>
                <Link to='/edit-info'>Edit</Link>
            </Grid>
            <Divider/>
            <Grid item xs={12} style={{display: 'flex'}}>
                    <p>PHOTO</p>
                <img src={imgUrl} width={72} height={72} style={{borderRadius: '0.5rem'}}/>
            </Grid>
            <Divider/>
            <Grid item xs={12}>
                <p>NAME</p>
                <p>{name}</p>
            </Grid>
            <Divider/>
            <Grid item xs={12}>
                <p>BIO</p>
                <p>{bio}</p>
            </Grid>
            <Divider/>
            <Grid item xs={12}>
                <p>PHONE</p>
                <p>{phone}</p>
            </Grid>
            <Divider/>
            <Grid item xs={12}>
                <p>EMAIL</p>
                <p>{email}</p>
            </Grid>
            <Divider/>
            <Grid item xs={12}>
                <p>PASSWORD</p>
                <p>{password}</p>
            </Grid>
            <Divider/>
        </Paper>
    </Box>
    </Container>   
    )
}