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
                    <Grid item xs={12} sm={6} md={3}>
                    <AppBar className={classes.appBarSearch} position="static" color="inherit">
                        <TextField
                            name="search"
                            variant="outlined"
                            label="Search Puppers"
                            onKeyPress={handleKeyPress}
                            fullWidth
                            value={search}
                            onChange={e=> setSearch(e.target.value)}/>
                        <ChipInput
                            style={{margin: '10px 0'}}
                            value={breeds}
                            onAdd= {handleAdd}
                            onDelete={handleDelete}
                            label="Search Breeds"
                            variant="outlined"
                        />
                        <Button onClick={searchPost} className={classes.searchButton} color="primary" variant="contained"/>
                    </AppBar>
                        <Form/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home 