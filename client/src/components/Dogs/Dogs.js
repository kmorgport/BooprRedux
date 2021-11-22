import React from 'react';
import Dog from './Dog/Dog';
import useStyles from './styles';
import { useSelector } from 'react-redux';

const Dogs = ()=>{
    const dogs = useSelector((state)=> state.dogs);
    console.log(dogs);
    const classes = useStyles();
    return(
        <>
            <h1 className={classes.mainContainer}>Dogs</h1>
            <Dog></Dog>
        </>
    )
}

export default Dogs