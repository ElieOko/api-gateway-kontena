export function admin(req:any, res:any, next:any){
    if(!req.user.isAdmin) return res.status(401).send({"message":"Access denied"}); 
    next();
}