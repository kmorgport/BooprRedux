import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Grid, Container, TextField } from '@material-ui/core';
import useStyles from './styles';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { signUp, signIn } from '../../actions/auth'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Auth = ()=>{
    const history = useHistory();
    const dispatch = useDispatch()
    const classes = useStyles();
    const [ isSignUp, setIsSignUp] = useState(false);
    const [ formData, setFormData ] = useState(initialState);
    const [ showPassword, setShowPassword] = useState(false);


    const handleChange = (e)=>{
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleShowPassword = ()=>{
        setShowPassword((prevShowPassword)=> !prevShowPassword)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(isSignUp){
            dispatch(signUp(formData, history))
        }else{
            dispatch(signIn(formData, history))
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">Sign Up</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" :  "password"} handleShowPassword={handleShowPassword}/>
                        {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{isSignUp ? 'Sign Up' : 'Sign In'}</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
