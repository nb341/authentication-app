import React from 'react';
import {Table, Box, Container} from '@material-ui/core';
export default function PersonalInfo(){
    return( 
     <Container>
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <h1>Personal Info</h1>
        <p>Basic info, like your name and photo</p>
        <Table>

        </Table>
    </Box>
    </Container>   
    )
}