import React, {useState} from 'react';
import Filebase from 'react-file-base64'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'
import { createDog } from '../../actions/dogs'

const Form = () => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('profile'));
    const owner = user.result._id || user.result.googleId
    const dispatch = useDispatch();
    const [dogData, setDogData] = useState({
        name: "",
        bio: "",
        breeds: "",
        picture: "",
        sex: "",
        owner: owner
    })
    
    const classes = useStyles();
    const handleSubmit = (e)=>{
        e.preventDefault();
        setDogData({
            ...dogData,
            owner:owner
        })
        dispatch(createDog(dogData))
        navigate('/')
    }

    const onChangeNameHandler = e =>{
        setDogData({
            ...dogData,
            name: e.target.value
        })
    }

    const onChangeBreedsHandler = (e)=>{
        setDogData({
            ...dogData,
            breeds: e.target.value
        })
    }

    const onChangeBioHandler = (e)=>{
        setDogData({
            ...dogData,
            bio: e.target.value
        })
    }

    const onChangeSexHandler = (e)=>{
        let sex;
        
        e.target.value.toLowerCase()==="m"? sex=true : sex=false;

        setDogData({
            ...dogData,
            sex
        })
    }


    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography variant="h6">a Pupper</Typography>
                <TextField name="name" variant="outlined" label="Name" fullWidth value={dogData.name} onChange={onChangeNameHandler}/>
                <TextField name="breeds" variant="outlined" label="Breeds" fullWidth value={dogData.breeds} onChange={onChangeBreedsHandler}/>
                <TextField name="bio" variant="outlined" label="Bio" fullWidth value={dogData.bio} onChange={onChangeBioHandler}/>
                <TextField name="sex" variant="outlined" label="Sex" fullWidth value={dogData.sex} onChange={onChangeSexHandler}/>
                <div className={classes.fileInput}>
                    <Filebase
                    type="file"
                    multiple={false}
                    onDone={(base64)=> setDogData({...dogData, picture:base64})}
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