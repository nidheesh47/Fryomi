// require("dotenv").config();
// const jwt = require("jsonwebtoken");
// function authenticateToken(req, res, next) {
//   console.log(req.cookies);
//   const { token } = req.cookies;
//   console.log(token, process.env.ACCESS_TOKEN_SECRET_KEY);
//   if (token == null) return res.sendStatus(401);
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     console.log(err);
//     next();
//   });
// }

// module.exports = authenticateToken;
