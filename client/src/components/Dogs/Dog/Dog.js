import React from 'react'
import { Card, CardContent, CardMedia, Typography} from '@material-ui/core'
import useStyles  from './styles';

const Dog = ({dog})=>{
    const classes = useStyles();
    
    return (
        <Card className={classes.card} raised elevation={6}>
            <CardMedia className={classes.cardAction} title={dog.name}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{dog.name}</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{dog.breeds.map((breed)=> `${breed} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{dog.message}</Typography>
            </CardContent>
        </Card>
    )
}

export default Dog;