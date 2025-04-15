import jwt from "jsonwebtoken";

export const ensureAuthentication = (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res
      .status(403)
      .json({ message: "Unauthorized Access.", success: "false" });
  }

  try {
    const decoded = jwt.verify(auth, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({
      message: "Unauthorized Access.",
      success: false,
    });
  }
};
