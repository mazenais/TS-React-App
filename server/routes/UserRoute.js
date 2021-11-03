import express from 'express'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from '../models/UserModel.js';
import passport from 'passport';
import authenticate from '../middlewares/auth.js';


const router = express.Router();


//register
router.post('/register', 
  (req, res) => {
      const reqemail = req.body.email;
      const reqpassword = req.body.password;
      const {name } = req.body;
      console.log(`req.body :>>`, req.body)

      UserModel.findOne({ email: reqemail }, (err, user) => {
          if (err) {
              res.send(err);
          }
          if (user) {
              res.send({ msg: "email already used" });
            } else {
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(reqpassword, salt, function (err, hash) {
                        if (err) {
                            res.send(err);
                        } else {
                            console.log('hash :>>', hash);
                            const newUser = new UserModel({ name, email: reqemail, password: hash});
                            newUser
                            .save()
                            .then((user) => {
                                res.send(user);
                            })
                            .catch((err) => {
                                res.send(err);
                            });

                        }
                    });
                });
            }
      });
});


 
//log in 
router.post("/login", (req, res) => {
       const reqemail = req.body.email;
       const reqpassword = req.body.password;

    UserModel.findOne({ email: reqemail }, (err, user) => {
        if (err) {
            res.send(err);
        }
        if (user) {
            console.log(user)
            //load hash from password DB
            bcrypt.compare(reqpassword, user.password, function(err, result) {
                if (result) {
                    // create JWT payload
                    const payload = {
                        id: user.id,
                        email: user.email
                        
                    };
                    // sign token
                    jwt.sign(
                        payload,
                        process.env.JWT_SECRET,
                        {
                            expiresIn: process.env.JWT_EXPIRES_IN,
                        },
                        (err, token) => {
                            console.log(token)
                           if (err) { res.send(err) }

                            res.status(200).json({
                                success: true,
                                token,
                                user
                            });
                        }
                    );
                }
                else {
                    res.status(403).send({ message: 'wrong password', success: false })
                }

            });
        }
        else {
            res.status(403).send({ message: "user doesn't exist", success: false })
        }

    });
});

//getting a specific item/ profile
router.get(
    'users/:id',
    authenticate,
    passport.authenticate('jwt', { session: false }),
     function (req, res) {
      UserModel.findById(req.params.id)
        .then(userFound => {
            if(!userFound) { return res.status(404).end(); }
            return res.status(200).json(userFound);
        })
        .catch(err => next(err));
  });

export default router