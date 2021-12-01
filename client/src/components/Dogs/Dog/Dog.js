import React from 'react'
import { Card, CardContent, CardMedia, Typography} from '@material-ui/core'
import useStyles  from './styles';
import { useDispatch } from 'react-redux';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useNavigate } from 'react-router-dom';
import { boopDog, deleteDog } from '../../../actions/dogs';


const Dog = ({dog, setCurrentId})=>{
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

    const openPost = ()=>{

    }
    
    return (
        <Card className={classes.card} raised elevation={6}>
            <ButtonBase
                component="span"
                name="test"
                className={classes.cardAction}
                onClick={openPost}
            >
                <CardMedia className={classes.media} image={dog.pictures[0] || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={dog.name}/>
                <div className={classes.overlay}>
                    <Typography variant="h6">{dog.name}</Typography>
                    <Typography variant="body2">{moment(dog.dateAdded).fromNow()}</Typography>
                </div>
                {(user?.result?.googleId === dog?.owner || user?.result?._id === dog?.owner)&&(
                    <div className={classes.overlay2} name="edit">
                        <Button
                        onClick={ e => {
                            e.stopPropagation();
                            setCurrentId(dog._id)
                        }}
                        style={{color: 'white'}}
                        size="small"
                        >
                            <MoreHorizIcon fontSize="default"/>
                        </Button>
                    </div>
                )}
                <div className={classes.details}>
                        <Typography variant="body2" color="testSecondary" component="h2">Placeholders for pup pack</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5" comment="h2">{dog.name}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{dog.bio.split(' ').splice(0,20).join(' ')}</Typography>
                </CardContent>
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={handleBoop}>
                    <Boops/>
                </Button>
                {(user?.result?.googleId === dog?.creator || user?.result?._id === dog?.creator)&&(
                    <Button size="small" color="secondary" onClick={()=> dispatch(deleteDog(dog._id))}>
                        <DeleteIcon fontSize="small"/>&nbsp; Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    )
}

export default Dog;