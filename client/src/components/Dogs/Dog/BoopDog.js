import React, {useState} from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase, CardActionArea} from '@material-ui/core'
import useStyles  from './styles';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { boopDog, deleteDog } from '../../../actions/dogs';

const BooprDog = ({ dog, setCurrentId }) =>{
    const user = JSON.parse(localStorage.getItem('profile'));
    console.log(user);
    const [boops, setBoops] = useState(dog?.boops);
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
        navigate(`/dogs/${dog._id}`)
    }

    return (
        <Card sx={{maxWidth: 345}}>
            <CardActionArea
            onClick={openPost}
            >
                <CardMedia
                    component="img"
                    height="140"
                    image={dog.pictures[0]}
                    alt={dog.breeds.join(", and")}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {dog.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {dog.bio}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary" disabled={!user?.result} onClick={handleBoop}>
                    <Boops/>
                </Button>
                {(user?.result?._id === dog?.creator)&&(
                    <Button size="small" color="secondary" onClick={()=> dispatch(deleteDog(dog._id))}>
                        <DeleteIcon fontSize="small"/>&nbsp; Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    )
}

export default BooprDog