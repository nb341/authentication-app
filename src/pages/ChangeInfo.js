import {Grid, Box, Container, Divider, Paper, InputLabel, TextField, Button, Avatar} from '@material-ui/core';

export default function ChangeInfo(props){
    return (
        <Grid container xs={12}>
            <Paper>
                <div>
                    <h1>Change Info</h1>
                    <p>Changes will be reflected to every services</p>
                </div>
                <div>
                <Avatar>H</Avatar>
                <Button>Change Photo</Button>
                </div>
                <div>
                    <InputLabel htmlFor="" >Name</InputLabel>
                    <TextField id="outlined-basic" placeholder="Enter your name" variant="outlined" />
                </div>
                <div>
                    <InputLabel htmlFor="">Bio</InputLabel>
                    <TextField
                        id="standard-multiline-static"
                        multiline
                        rows={4}
                        placeholder="Enter your bio..."
                        variant="outlined"
                    />
                </div>
                <div>
                    <InputLabel htmlFor="" >Phone</InputLabel>
                    <TextField id="outlined-basic" placeholder="Enter your phone..." variant="outlined" />
                </div>
                <div>
                    <InputLabel htmlFor="" >Email</InputLabel>
                    <TextField id="outlined-basic" placeholder="Enter your email..." variant="outlined" />
                </div>
                <div>
                    <InputLabel htmlFor="" >Password</InputLabel>
                    <TextField id="outlined-basic" placeholder="Enter your password..." type="password" variant="outlined" />
                </div>
            </Paper>
        </Grid>
    )
}