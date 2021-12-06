import React, {useEffect} from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import { useParams, Link } from 'react-router-dom';

import { fetchDog } from '../../actions/dogs'

import useStyles  from './styles';

const Dog = ()=>{
    const { dog, isLoading } = useSelector((state)=> state.dogs);
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const classes = useStyles();
    const { id } = useParams();

    useEffect(()=>{
        dispatch(fetchDog(id));
    }, [id])

    if( !dog ) return null



// const openPost = (_id) => navigate(`/dogs/${_id}`);

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
                        {`${dog.owner}`}
                    </Link>
                </Typography>
                <Typography variant="body1">{moment(dog.createdAt).fromNow()}</Typography>
                <Divider style={{ margin: '20px 0'}} />
                <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
                <Divider style={{ margin: '20px 0'}}/>
                <Typography>Map Goes Here?</Typography>
                <Divider/>
            </div>
            <div className={classes.imageSection}>
                <Typography>Images go here</Typography>
            </div>
        </div>
    </Paper>
)

}

export default Dog