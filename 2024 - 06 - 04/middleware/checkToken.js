import User from "../models/User.js";
import jwt from "jsonwebtoken";

export async function checkToken(req, res, next) {
  const token = req.headers.authorization; // `Bearer ${token}`
  const tokenOnly = token.split(" ")[1];
  const { JWT_SECRET } = process.env;

  try {
    jwt.verify(tokenOnly, JWT_SECRET, async (err, payload)=> {
      if (err) {
        console.log(err);
        return res.status(403).json({message: "Forbidden access"})
      }
      const userDoc = await User.findById(payload.uid);
      req.user = userDoc; // add to request object property "user" and assign it to "userDoc"
      console.log(payload); // {uid: '665f56288b481a281870ba4e', exp: 1717529250, iat: 1717525650}
      next();
    });
  } catch {
    res.status(401).send({ error: "Invalid token" });
  }
}
