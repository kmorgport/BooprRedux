import React from 'react';
import { AppBar, Typography, Toolbar} from '@material-ui/core'
import useStyles from './styles';
import {Link} from 'react-router-dom';

const Navbar = ()=>{
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                {/* <img height="45px"/>
                <img height="40px"/> */}
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Boopr</Typography>
                <img className={classes.image} alt="icon" height="60"/>
            </div>
            <Toolbar className={classes.toolbar}></Toolbar>

        </AppBar>
    )
}
export default Navbar