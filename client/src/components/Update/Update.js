import React from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Typography} from '@material-ui/core';
import useStyles from './styles';
import Filebase from 'react-file-base64'

const Update = ()=>{
    const classes = useStyles();
    return (
        <>
        <Grid container alignItems="center" row justifyContent='center'>
            <Typography variant="h4" margintTop="4">Dog Editor</Typography>
            <Grid container justifyContent='center' m="1" className={classes.borders}>
                <Grid item alignItems="center">
                    <Typography>Photo Edit</Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent='center' m="1"className={classes.borders}>
                <Grid item alignItems="center">
                    <Typography>Edit Info</Typography>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default Update