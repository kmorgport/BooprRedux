import React from 'react';
import { Container} from '@material-ui/core';
import Home from './components/Home/Home';
import BooprUser from './components/User/BooprUser';
// import User from './components/User/User';
import Navbar from './components/Navbar/Navbar';
import PostDetails from './components/PostDetails/PostDetails.js'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Update from './components/Update/Update';




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
            <Navbar/>
            <Container maxwidth="lg">
                
                <Routes>
                    <Route path="/dogs" element={
                        <RequireAuth redirectTo="/auth">
                            <Home/>
                        </RequireAuth>
                        }/>
                    <Route path="/dogs/:id" element={
                        <RequireAuth redirectTo="/auth">
                            <PostDetails/>
                        </RequireAuth>
                        }/>
                        {/* <Route path="/dogs/:id/update" element={<Update/>}/>
                    </Route> */}
                    <Route path="/auth" element={
                        <BlockAuth redirectTo="/dogs">
                            <Auth/>
                        </BlockAuth>
                        }/>
                    <Route path="/user/:id" element={
                        <RequireAuth redirectTo="/auth">
                            <BooprUser/>
                        </RequireAuth>
                        }/>
                    <Route path="/update/:id" element={
                        <RequireAuth redirectTo="/auth">
                            <Update/>
                        </RequireAuth>
                        }/>
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