import React, {useEffect, useState} from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Typography} from '@material-ui/core';
// import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { fetchDogsByOwner} from '../../actions/dogs'
import Dogs from '../Dogs/Dogs';
import { Link, useParams } from 'react-router-dom';

const BooprUser = ()=>{
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(()=>{
        dispatch(fetchDogsByOwner(id));
    },[currentId])

    return (
        <>
        <Grid container justify="space-between">
            <Typography variant="h2">My Dogs</Typography>
            <Button component={Link} to={'/'} color="warning" variant="contained">Add Dog</Button>
        </Grid>
        <Grid item>
             <Dogs setCurrentId={setCurrentId}/>
        </Grid>
        </>
    )
}

export default BooprUser