import React from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Typography} from '@material-ui/core';
import useStyles from './styles';
import Filebase from 'react-file-base64'
import image from '../../img/Logo.png'

const Update = ()=>{
    const classes = useStyles();
    const handleSubmit = ()=>{

    }
    return (
        <>
        <Grid container alignItems="center" direction="column" justifyContent='center'>
            <Typography variant="h4" margintTop="4">Dog Editor</Typography>
            <Grid container flexDirection="column" justifyContent='center' m="1" className={classes.borders}>
                <Grid xs={12}>
                    <Typography>Photo Edit</Typography>
                </Grid>
                <Grid xs={12}>
                <div className={classes.imageSection}>
                    <img className={classes.media} src={image}/>
                </div>
                </Grid>
                <Grid  display="flex" justifyContent="between">
                        <Grid>
                            <Filebase
                            type="file"
                            multiple={false}
                            />
                            <Button
                            className={classes.buttonSubmit}
                            variant="contained"
                            color="primary"
                            size="large"
                            type="submit"
                            fullWidth
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
                    </form>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default Update