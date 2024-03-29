import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/user.js'
import dogRoutes from './routes/dogs.js'
import breedRoutes from './routes/breeds.js'


const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/dogs', dogRoutes);
app.use('/user', userRoutes);
app.use('/breeds', breedRoutes)

const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.r7gfx.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true,  useUnifiedTopology: true })
    .then(()=> app.listen(PORT, ()=> console.log(`Server is running on Port: ${PORT}`)))
    .catch( error => console.log(error.message));