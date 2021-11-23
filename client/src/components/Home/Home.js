import React from 'react';
import { Container, Grow, Grid} from '@material-ui/core';
import useStyles from './styles';
import Dogs from '../Dogs/Dogs';


const Home = () =>{
    const classes = useStyles();
    
    return(
        <Grow in>
            <Container maxWidth="xl">
                <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Dogs/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home 