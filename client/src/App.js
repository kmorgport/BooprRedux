import React , {useEffect} from 'react';
import { Container} from '@material-ui/core';
import Home from './components/Home/Home';
import { useDispatch } from 'react-redux';
import { fetchDogs } from './actions/dogs'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';



const App = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchDogs());
    },[dispatch])

    return (
        <BrowserRouter>
            <Container maxwidth="lg">
                <Navbar/>
                <Routes>
                    <Route path="/dogs" element={<Home/>}/>
                    <Route path="*" element={<Navigate to="/dogs"/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

// const App = ()=>{
//     return (
//         <div>Here</div>
//     )
// }

export default App;