import React, {useEffect} from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { fetchDog } from '../../actions/dogs'

import useStyles  from './styles';

const Dog = ()=>{
    const { dog, dogs, isLoading } = useSelector((state)=> state.dogs);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const { id } = useParams();

    useEffect(()=>{
        dispatch(fetchDog(id));
    }, [id])
}

export default Dog