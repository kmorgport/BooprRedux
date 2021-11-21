import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Dogs from './components/Dogs/Dogs';
import Form from './components/Form/Form'

const App = ()=>{
    return (
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Boopr</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing>
                        <Grid item xs={12} sm={7}>
                            <Dogs/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

// const App = ()=>{
//     return (
//         <div>Here</div>
//     )
// }

export default App;