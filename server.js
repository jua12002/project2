
const express = require('express');

//
const session = require('express-session');
require('./auth');

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}
//

const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const passport = require('passport');

const port = process.env.port || 8085;
const app = express();

//
app.use(session({secret: 'cats'}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile']})
);

app.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure',
  })
);

app.get('/auth/failure', (req, res) => {
  res.send('something went wrong..');
});

app.get('/protected', isLoggedIn, (req, res) => {
  //res.send('Hello!');
  res.send(`Hello ${req.user.displayName}`);
});

app.get(`logout`, (req, res) => {
  req.logout();
  res.send('Goodbye!');
}); 
//app.listen(8085, () => console.log('listening on: 8085'));
//

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on port ${port}`);
  }
});


//
/* OAuth
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const port = process.env.port || 8085;
const app = express();

//
const router = express.Router();
//

const session = require("express-session");
const passport = require('passport');
const mongoose = require('mongoose');


require('./auth');

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}


app.use(session({ secret: 'cats' }));
app.use(passport.initialize());
app.use(passport.session());

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
    next();
  })
  .use('/', require('./routes'));

  app.get('/auth/google',
  passport.authenticate('google', { scope:  ['email', 'profile'] })
  );

app.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: './protected',
    failureRedirect: '/auth/failure',
  })
);

app.get('/auth/failure', (req, res) => {
  res.send('Something went wrong..');
});
  
app.get('/protected', isLoggedIn, (req, res) => {
  res.send('Hello! ${req.user.displayfirstName}');
});

app.get('/logout', (req, res) => {
  req.logOut();
  req.session.destroy();
  res.send('Goodbye!');
})

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on port ${port}`);
  }
});
*/