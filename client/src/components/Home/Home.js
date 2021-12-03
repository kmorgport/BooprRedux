import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid} from '@material-ui/core';
import useStyles from './styles';
import { fetchDogs } from '../../actions/dogs'
import { useDispatch } from 'react-redux';
import Dogs from '../Dogs/Dogs';
import Form from '../Form/Form';


const Home = () =>{
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(()=>{
        dispatch(fetchDogs());
    },[currentId])
    
    return(
        <Grow in>
            <Container maxWidth="xl">
                <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Dogs setCurrentId={setCurrentId}/>
                    </Grid>
                    <Form/>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home 