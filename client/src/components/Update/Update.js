import React from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Typography} from '@material-ui/core';
import useStyles from './styles';
import Filebase from 'react-file-base64'
import image from '../../img/Logo.png'

const Update = ()=>{
    const classes = useStyles();
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
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default Update