import { JWT_SECRET } from "../config/config.js";

export const authenticateToken = (req, res, next) => {


    const authHeader = req.header['authorization'];


    // "Bearer"

    const token = authHeader && authHeader.split(' ')[1];

    if(!token) return res.sendStatus(401); // Unauthorized

    jwt.verifu(token, JWT_SECRET, (err, user)=> {

        if(err) return res.sendStatus(403); // Forbidden
        req.user = user;

        // si la llave es correcta, hacemos next
        next();
    })



}