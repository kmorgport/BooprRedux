import React, {useEffect} from 'react';
import { Container} from '@material-ui/core';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Auth from './components/Auth/Auth';




const App = ()=>{
    function RequireAuth({children, redirectTo}){
        let isAuthenticated = JSON.parse(localStorage.getItem('profile'));
        return isAuthenticated ? children : <Navigate to={redirectTo}/>;
    }

    function BlockAuth({children, redirectTo}){
        let isAuthenticated = JSON.parse(localStorage.getItem('profile'));
        return !isAuthenticated ? children : <Navigate to={redirectTo}/>;
    }



    return (
        <BrowserRouter>
            <Container maxwidth="lg">
                <Navbar/>
                <Routes>
                    <Route path="/dogs" element={
                        <RequireAuth redirectTo="/auth">
                            <Home/>
                        </RequireAuth>
                        // user ? <Home/> : <Navigate replace to="/auth"/>
                        }/>
                    {/* <Route path="/auth" element={!user ? <Auth/> : <Navigate replace to="/dogs"/>}/> */}
                    <Route path="/auth" element={
                        <BlockAuth redirectTo="/dogs">
                            <Auth/>
                        </BlockAuth>
                        // user ? <Home/> : <Navigate replace to="/auth"/>
                        }/>
                    {/* <Route path="/auth" exact element={<Auth/>}/> */}
                    <Route path="*" element={<Navigate replace to="/dogs"/>}/>
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