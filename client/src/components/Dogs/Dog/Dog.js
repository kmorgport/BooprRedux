import React from 'react'
import { Card, CardContent, CardMedia, Typography} from '@material-ui/core'
import useStyles  from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { boopDog, deleteDog } from '../../../actions/dogs';


const Dog = ({dog})=>{
    const user = JSON.parse(localStorage.getItem('profile'));
    const [boops, setBoops] = useState(dog?.boops);
    const dispatch = useDispatch();
    const navigate = useNavigate;
    const classes = useStyles();

    const userId = user?.result.googleId || user?.result?._id;

    const hasBoopedDog = dog.boops.find( boop => boop === userId);

    const handleBoop = async ()=>{
        dispatch(boopDog(dog._id));

        if(hasBoopedDog){
            setBoops(dog.boops.filter((id)=> id !== userId));
        }else{
            setBoops([...dog.boops, userId]);
        }
    }

    const Boops = () => {
        if (boops.length > 0) {
          return boops.find((boop) => boop === userId)
            ? (
              <><ThumbUpAltIcon fontSize="small" />&nbsp;{boops.length > 2 ? `You and ${boops.length - 1} others` : `${boops.length} like${boops.length > 1 ? 's' : ''}` }</>
            ) : (
              <><ThumbUpAltOutlined fontSize="small" />&nbsp;{boops.length} {boops.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
    
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
      };
    
    return (
        <Card className={classes.card} raised elevation={6}>
            <CardMedia className={classes.media} title={dog.name}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{dog.name}</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{dog.breeds.map((breed)=> `${breed} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{dog.bio}</Typography>
            </CardContent>
        </Card>
    )
}

export default Dog;