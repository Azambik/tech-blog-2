//tells if someone is logged in or not and redirects logged out people to log in or sign up
const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {
    console.log("MAX AGE IS " + req.session.cookie.expires);
    next();
  }
};

module.exports = withAuth;
