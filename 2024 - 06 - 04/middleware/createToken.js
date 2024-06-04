import jwt from "jsonwebtoken";

export function createToken(user) {
  const { JWT_SECRET } = process.env;

  const payload = {
    uid: user._id,
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // The expiration time is set to 1 hour from the current time. "expiresIn" claim can also be provided in the payload directly with "exp" 
  };
  // const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn: "1h"})
  const token = jwt.sign(payload, JWT_SECRET);

  return token;
}
