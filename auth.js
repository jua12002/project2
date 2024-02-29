const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '731739764635-ob0gqfhkaulf37ehvftovud6kt08nj64.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';


passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8085/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    ///return done(err, user);
    ////return done(err, profile);
    //User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(null, profile);
    //});
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});