import React, { useEffect, useState } from 'react';
import { AppBar, Typography, Toolbar, Button, Avatar} from '@material-ui/core'
import useStyles from './styles';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import memoriesLogo from '../../img/Logo.png';

const Navbar = ()=>{
    const location = useLocation();
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(()=>{

        const token = user?.token;
        if(token){
            // logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])
    

    const logout = ()=>{
        dispatch({ type: "LOGOUT"});
        navigate('/')
        setUser(null);

    }

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
            <img className={classes.image} src={memoriesLogo} align="center" alt="icon" height="40px" />
                <img height="40"/>
                {/* <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Boopr</Typography> */}
                {/* <img className={classes.image} src={memories} alt="icon" height="60"/> */}
            </div>
            <Toolbar className={classes.toolbar}></Toolbar>
            {user && (
                <div classes={classes.profile}>
                    <Avatar component={Link} to={`/user/${user.result._id||user.result.googleId}`} className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
            )}
        </AppBar>
)
}
export default Navbar