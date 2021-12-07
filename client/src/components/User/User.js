import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button} from '@material-ui/core';
import useStyles from './styles';
import ChipInput from 'material-ui-chip-input';
import { fetchDogsByOwner, getDogsBySearch } from '../../actions/dogs'
import { useDispatch } from 'react-redux';
import Dogs from '../Dogs/Dogs';
import Form from '../Form/Form';
import { useLocation } from 'react-router';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function useQuery(){
    return new URLSearchParams(useLocation().search)
}

const Home = () =>{
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();
    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get('page') || 1
    const searchQuery = query.get('searchQuery')
    const [ search, setSearch ] = useState('');
    const [breeds, setBreeds ] = useState([]);
    const { id } = useParams();

    useEffect(()=>{
        dispatch(fetchDogsByOwner(id));
    },[currentId])

    const handleKeyPress = (e)=>{
        if(e.keyCode === 13){
            searchPost();
        }
    }
    
    const handleAdd = ()=>{

    }

    const handleDelete = ()=>{

    }
    
    const searchPost = ()=>{
        if(search.trim()|| breeds){
            dispatch(getDogsBySearch({ search, breeds: breeds.join(',')}))
            navigate(`/dogs/search?searchQuery=${search|| 'none'}&breeds=${breeds.join(',')}`)
        }else{
            navigate('/')
        }
    }

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