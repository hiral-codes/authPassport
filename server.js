import express from "express";
import mongoose from "mongoose";
import expressSession from "express-session"
import passport from "passport";
import bodyParser from "body-parser";


// Requiring Models
import userModel from './users.js';
// Creating an Express app
const app = express();

// Setting Up Port
const port = 1608;



// Setting Up Static Files and view engine
app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static('public'))
app.set('views', './views')
app.set('view engine', 'ejs');

// Routes

// Home Page
app.get('/registration', (req, res) => {
    res.render("registration")
});

// Registration
app.post('/createuser', async (req, res) => {
    try {
      // Check if email and password are present in the request body
      if (!req.body.email || !req.body.password) {
        return res.status(400).json({ error: 'Email and password are required.' });
      }
  
      // Create a new user using the userModel
      let userData = await userModel.create({
        email: req.body.email,
        password: req.body.password
      });
  
      res.status(201).redirect('/login');
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// Login
app.get('/login', (req, res) => {
    res.render("login")
});

// Profile
app.get('/profile', (req, res) => {
    res.render("profile")
})


// Listening to a port
app.listen(port, () => {
    console.log(`Server Started: http://localhost:${port}`);
})