
const express = require('express');
const router = express.Router();


//
router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));

module.exports = router;

/*
const express = require('express');
const session = require("express-session");
const passport = require('passport');
require('./auth');

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

const app = express();
app.use(session({ secret: "cats"}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] })
)

app.get('/google/callback',
   passport.authenticate('google', {
      successRedirect: '/protected',
      failureRedirect: '/auth/failure',
   })
);

app.get('/auth/failure', (req, res) => {
    res.send('something went wrong..')
});

app.get('/protected', isLoggedIn, (req, res) => {
    //res.send('Hello! ${req.user.displayfirstName}');
    res.send(`Hello ${req.user.displayfirstName}`);
});

app.get('/logout', (req, res) => {
    req.logout();
    res.send('GoodBye!');
})

app.listen(8085, () => console.log('listening on:  8085'));
*/