import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // ✅ Rename userId to _id for compatibility with mongoose
    req.user = {
      _id: decoded.userId,
      role: decoded.role,
    };

    next();
  } catch (err) {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};
export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ success: false, message: "Admin access required" });
  }
  next();
};
