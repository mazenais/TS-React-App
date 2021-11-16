import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/UserRoute.js';
import UserModel from './models/UserModel.js';
import allUsersRoutes from './routes/AllUsersRoute.js';
import { jwtStrategy } from './passport.js';
import passport from "passport";
import multer from "multer";
import imageRoutes from "./routes/ImageRoute.js";
import ImageModel from './models/ImageModel.js';


dotenv.config();


const app = express();
// Use cors
app.use(cors());  

// urlparser is deprecated in express 4
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


//using the routes for a specific api
app.use('/api/users', userRoutes);
app.use('/api/users', allUsersRoutes);
// app.use('/api/users/profile').post(protect, updateUserProfile)

app.get('/api/users/:id', function(req, res) {
  UserModel.findById(req.params.id)
    .then(userFound => {
      if(!userFound) { return res.status(404).end(); }
      return res.status(200).json(userFound);
    })
    .catch(err => next(err));
});

// app.use('/api/users', imageRoutes);
// Step 7 - the GET request handler that provides the HTML UI
// app.get('/', function (req, res) {
//   ImageModel.find({}, (err, items) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('AnError Has Occurred', err);
//     }
//     else {
//       res.render('imagesPage', { items: items });
//     }
//   });
// });

// Step 8 - the POST handler for processing the uploaded file
// app.post('/', upload.single('image'), (req, res, next) => {
  
//   var obj = {
//       name: req.body.name,
//       desc: req.body.desc,
//       img: {
//           data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//           contentType: 'image/png'
//       }
//   }
//   imgModel.create(obj, (err, item) => {
//       if (err) {
//           console.log(err);
//       }
//       else {
//           // item.save();
//           res.redirect('/');
//       }
//   });
// });


// passport middleware
passport.use('jwt', jwtStrategy);
app.use(passport.initialize());


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


app.listen(port, () => {
  console.log('Server is running on ' + port + 'port');
});