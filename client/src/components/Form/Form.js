import React, {useState, useEffect} from 'react';
import Filebase from 'react-file-base64'
import { TextField, Button, Typography, Paper, FormControl, Radio, RadioGroup, FormControlLabel, FormLabel, OutlinedInput, InputLabel,MenuItem, Select } from '@material-ui/core';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'
import { createDog, fetchDogs } from '../../actions/dogs'

const Form = () => {
    const [breedName, setBreedName] = useState([]);
    const navigate = useNavigate()
    const {breeds}= useSelector(state=> state.breeds);
    const user = JSON.parse(localStorage.getItem('profile'));
    const owner = user.result._id || user.result.googleId
    const dispatch = useDispatch();
    // const [pictures, setPictures ] = useState([])

    const [dogData, setDogData] = useState({
        name: "",
        bio: "",
        pictures: "",
        sex: "",
        owner: owner
    })

    
    const classes = useStyles();

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(createDog(dogData))
        navigate('/')
    }

    useEffect(()=>{
        dispatch(fetchDogs())
    },[navigate])

    const onChangeNameHandler = e =>{
        setDogData({
            ...dogData,
            name: e.target.value
        })
    }

    // const onChangeBreedsHandler = (e)=>{
    //     setDogData({
    //         ...dogData,
    //         breeds: e.target.value
    //     })
    // }

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

    const onChangeBreedsHandler = (e)=>{
        // const {
        //     target: {value},
        // } = e;
        // console.log(value)
        setBreedName(
            typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value,
        );

    };

    const setBreedsHandler = ()=>{
        setDogData({
            ...dogData,
            breeds: [...breedName]
        })
    }

    // const onDonePhotoHandler = (base64)=>{
    //     setPictures(oldArray => [...oldArray, base64])
    //     setDogData({
    //         ...dogData,
    //         pictures: pictures
    //     })
    // }


    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography variant="h6">a Pupper</Typography>
                <TextField name="name" variant="outlined" label="Name" fullWidth value={dogData.name} onChange={onChangeNameHandler}/>
                {/* <TextField name="breeds" variant="outlined" label="Breeds" fullWidth value={dogData.breeds} onChange={onChangeBreedsHandler}/> */}
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
                <div className={classes.fileInput}>
                    <Filebase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setDogData({ ...dogData, pictures: base64 })}
                    />
                </div>
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
        </Paper>
    )
}

export default Form