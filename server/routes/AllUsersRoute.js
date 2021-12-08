import express from 'express'
// import AllUsersModel from '../models/AllUsersModel.js';
import passport from 'passport';
import jwt from "jsonwebtoken";
import UserModel from '../models/UserModel.js';
import authenticate from '../middlewares/auth.js'

const router = express.Router();

/* get all users*/
router.get('/', 
    // authenticate,
    passport.authenticate("jwt", { session: false }),
  (req, res) => {
     UserModel.find()
       .then(files => {
         res.send(files)
       })
       .catch(err => console.log(err));
});


export default router