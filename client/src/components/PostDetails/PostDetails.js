import React, {useEffect} from 'react';
import { Paper, Typography, CircularProgress, Divider, Button } from '@material-ui/core/';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import { useParams, Link} from 'react-router-dom';

import { fetchDog } from '../../actions/dogs'

import useStyles  from './styles';

const Dog = ()=>{
    const user = JSON.parse(localStorage.getItem('profile'));
    const userId = user?.result.googleId || user?.result?._id;
    const { dog, isLoading } = useSelector((state)=> state.dogs);
    const dispatch = useDispatch();
    const classes = useStyles();
    const { id } = useParams();

    useEffect(()=>{
        dispatch(fetchDog(id));
    }, [id])

    if( !dog ) return null



if(isLoading){
    return(
        <Paper elevation={6} className={classes.loadingPaper}>
            <CircularProgress size="7em"/>
        </Paper>
    )
}

return (
    <Paper style={{padding: '20px', borderRadius:'15px'}} elevation={6}>
        <div className={classes.card}>
            <div className={classes.section}>
                <Typography variant="h3" component="h2">{dog.name}</Typography>
                <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{dog.breeds.map(breed => (
                    <Link to={`/breeds/${breed}`} style={{ textDecoration: 'none', color: '#3f51b5 '}}>
                        {` #${breed}`}
                    </Link>
                ))}
                </Typography>
                <Typography gutterBottom variant="h1" component="p">{dog.bio}</Typography>
                <Typography variant="h6">
                    Pup Pal of:
                    <Link to={`/owners/${dog.owner}`} style={{ textDecoration: 'none', color: '#3f51b5'}}>
                        {` ${dog.ownerUserName}`}
                    </Link>
                </Typography>
                <Typography variant="body1">{moment(dog.createdAt).fromNow()}</Typography>
                <Divider style={{ margin: '20px 0'}} />
                <Typography variant="body1"><strong>{dog.sex}</strong></Typography>
                <Divider style={{ margin: '20px 0'}}/>
                <Typography>Map Goes Here?</Typography>
                {dog.owner === userId && (
                    <>
                    <Divider style={{ margin: '20px 0'}}/>
                    <Button component={Link} to={`/update/${dog._id}`}>Update Dog</Button>
                    </>
                )}
                <Divider/>
            </div>
            <div className={classes.imageSection}>
                <img className={classes.media} src={dog.pictures[0] || ""}/>
            </div>
        </div>
    </Paper>
)

}

export default Dog