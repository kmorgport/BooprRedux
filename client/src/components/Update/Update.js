import React, {useState, useEffect } from 'react';
import { Paper, CircularProgress, Grid, AppBar, TextField, Button, Typography, FormControl, InputLabel, Select, OutlinedInput, MenuItem, FormLabel, RadioGroup,FormControlLabel, Radio, } from '@material-ui/core';
import useStyles from './styles';
import { useParams, useNavigate } from 'react-router-dom';
import Filebase from 'react-file-base64'
import {useSelector, useDispatch } from 'react-redux'
import { fetchDog, updateDog,} from '../../actions/dogs'
import { fetchBreeds } from '../../actions/breeds';
import image from '../../img/Logo.png'

const Update = ()=>{
    const { breeds } = useSelector(state=> state.breeds)
    const { dog, isLoading } = useSelector((state)=> state.dogs);
    const [breedName, setBreedName ] = useState([]);
    const user = JSON.parse(localStorage.getItem('profile'));
    const owner = user.result._id || user.result.googleId
    const classes = useStyles();
    const navigate = useNavigate()
    const { id } = useParams();
    const dispatch = useDispatch();
    const [dogData, setDogData] = useState({
        name: "",
        bio: "",
        pictures: "",
        sex: "",
    })
    
    useEffect(()=>{
        dispatch(fetchBreeds());
        if(!dog){
            dispatch(fetchDog(id));
        }
        setDogData({
            name: dog?.name,
            bio: dog?.bio,
            pictures: dog?.pictures[0],
            sex: dog?.sex
        })
        setBreedName(dog?.breeds)
    }, [dog])

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(updateDog(dogData))
        navigate('/')
    }

    const handlePicUpdate =(e)=>{
        e.preventDefault()
    }

    const onChangeBreedsHandler = (e)=>{
        setBreedName(
            typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value,
        );
    }

    const onChangeNameHandler = (e)=>{
        setDogData({
            ...dogData,
            name: e.target.value
        })
    }

    const setBreedsHandler = ()=>{
        setDogData({
            ...dogData,
            breeds: [...breedName]
        })
    }

    const onChangeBioHandler = (e)=>{
        setDogData({
            ...dogData,
            bio: e.target.value
        })
    }

    const onChangeSexHandler = (e)=>{
        setDogData({
            ...dogData,
            sex: e.target.value
        })
    }

    if( !dog ) return null

    if(isLoading){
        return(
            <Paper elevation={6} className={classes.loadingPaper}>
                <CircularProgress size="7em"/>
            </Paper>
        )
    }

    return (
        <>
        <Grid container alignItems="center" direction="column" justifyContent='center'>
            <Typography variant="h4" margintTop="4">Dog Editor</Typography>
            <Grid container alignItems="center" direction="column" flexDirection="column" justifyContent='center' m="1" className={classes.borders}>
                <Grid xs={12}>
                    <Typography>Photo Edit</Typography>
                </Grid>
                <Grid xs={12}>
                <div className={classes.imageSection}>
                    <img className={classes.media} src={dogData.pictures}/>
                </div>
                </Grid>
                <Grid container alignItems="center" justifyContent='center'>
                        <Grid item>
                            <Filebase
                            type="file"
                            multiple={false}
                            />
                        </Grid>
                        <Grid item alignItems="stretch" display="flex">
                            <Button
                            className={classes.buttonSubmit}
                            variant="contained"
                            color="primary"
                            size="large"
                            type="submit"
                            fullWidth
                            onClick={handlePicUpdate}
                            >Upload Image
                        </Button>
                        </Grid>
                </Grid>
            </Grid>
            <Grid container justifyContent='center' m="1"className={classes.borders}>
                <Grid item alignItems="center">
                    <Typography>Edit Info</Typography>
                    <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                        
                        <TextField name="name" variant="outlined" label="Name" fullWidth value={dogData.name} onChange={onChangeNameHandler}/>
                        <FormControl fullWidth sx={{m:1, width: 300}}>
                        <InputLabel id="multiple-name-label">Breed</InputLabel>
                        <Select
                            labelId= "multiple-breed-label"
                            id="multiple-breeds"
                            multiple
                            value={breedName}
                            onChange={onChangeBreedsHandler}
                            onBlur={setBreedsHandler}
                            input={<OutlinedInput label="Breed"/>}
                        >
                            {breeds.map((breed)=>(
                                <MenuItem
                                    key={breed._id}
                                    value={breed.breed}
                                >
                                    {breed.breed}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField name="bio" variant="outlined" label="Bio" fullWidth value={dogData.bio} onChange={onChangeBioHandler}/>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Sex</FormLabel>
                        <RadioGroup row aria-label="sex" name="sex" value={dogData.sex} onChange={onChangeSexHandler}>
                            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                        </RadioGroup>
                    </FormControl>
                    <Button 
                        className={classes.buttonSubmit}
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                        fullWidth
                    >Submit
                    </Button>
                    </form>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default Update