const jwt = require("jsonwebtoken");

module.exports.authMiddleware = (req, res, next) => {
  // Extract the token from the request headers
  const token = req.headers.authorization;

  // Check if token exists
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "No token provided" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Extract the admin id from the decoded token
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};
