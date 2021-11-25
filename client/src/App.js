import React from 'react';
import { Container} from '@material-ui/core';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Auth from './components/Auth/Auth';




const App = ()=>{

    const user = JSON.parse(localStorage.getItem('profile'));
    
    return (
        <BrowserRouter>
            <Container maxwidth="lg">
                <Navbar/>
                <Routes>
                    <Route path="/dogs" element={<Home/>}/>
                    <Route path="/auth" element={!user ? <Auth/> : <Navigate to="/dogs"/>}/>
                    {/* <Route path="/auth" exact element={<Auth/>}/> */}
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