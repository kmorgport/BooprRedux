import React from 'react';
import Dog from './Dog/Dog';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from "@material-ui/core"

const Dogs = ({ setCurrentId })=>{
    const {dogs, isLoading}= useSelector(state=> state.dogs);
    const classes = useStyles();
    if(!dogs.length && !isLoading) return "No Posts"
    return(
        isLoading ? <CircularProgress/> : (
        <Grid className={classes.container} container alignItems="stretch" spacing="3">
            {
                dogs.map((dog)=>(
                    <Grid key={dog._id} item xs={12} sm={6} lg={3}>
                        <Dog dog={dog} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
        </Grid>
        )
    )
}

export default Dogs