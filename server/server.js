import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/UserRoute.js';
import UserModel from './models/UserModel.js';
import allUsersRoutes from './routes/AllUsersRoute.js';
import { jwtStrategy } from './passport.js';
import passport from "passport";


dotenv.config();


const app = express();
// Use cors
app.use(cors());  

// urlparser is deprecated in express 4
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


//const db = env.mongoURI;
// connect to mongodb / .env file 
mongoose
  .connect(process.env.DB)
  .then(() => console.log('Connection to Mongo DB established'))
  .catch(err => console.log(err.message));

  
  const port = process.env.PORT || 5000;

app.get('/test', (req, res) => {
  res.send({ msg: 'Test route.' });
});


//using the routes for a specific api
app.use('/api/users', userRoutes);
app.use('/api/users', allUsersRoutes);

// passport middleware
passport.use('jwt', jwtStrategy);
app.use(passport.initialize());


app.listen(port, () => {
  console.log('Server is running on ' + port + 'port');
});