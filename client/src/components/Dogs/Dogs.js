import React from 'react';
import Dog from './Dog/Dog';
import useStyles from './styles';

const Dogs = ()=>{
    const classes = useStyles();
    return(
        <>
            <h1 className={classes.mainContainer}>Dogs</h1>
            <Dog></Dog>
        </>
    )
}

export default Dogs