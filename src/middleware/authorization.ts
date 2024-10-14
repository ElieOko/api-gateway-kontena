import { verify } from "jsonwebtoken"
import { logger } from "../config/log/logger"
const getDurationInMilliseconds = (start:any) => {
    const NS_PER_SEC = 1e9
    const NS_TO_MS = 1e6
    const diff = process.hrtime(start)

    return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS
}
export function auth(req:any, res:any, next:any){
    const token = req.header("x-auth-token");
    logger.info(`Requête reçue : ${req.method} ${req.url}`);
    const tick = performance.now()
    console.log(`$logger{req.method} ${req.originalUrl} [STARTED]`)
    const start = process.hrtime()
    if(!token) {
        logger.error("Access denied. No token provided");
        return res.status(401).send({"message":"Access denied. No token provided"});
    }
    try {
        const decode = verify(token,"jwtPrivateKey");
        req.user = decode;
        // res.on('finish', () => {            
        //     const durationInMilliseconds = getDurationInMilliseconds (start)
        //     console.log(`${req.method} ${req.originalUrl} [FINISHED] ${durationInMilliseconds.toLocaleString()} ms`)
        // })
    
        // res.on('close', () => {
        //     const durationInMilliseconds = getDurationInMilliseconds (start)
        //     console.log(`${req.method} ${req.originalUrl} [CLOSED] ${durationInMilliseconds.toLocaleString()} ms`)
        // })
        
        const tock = performance.now()
        console.log(`Main ${tock - tick}ms`)
        next();
    } catch (error) {
        logger.error("Token invali ");
        res.status(404).send({"message":"Invalid token"});
        
    }
}