import {Request, Response, NextFunction, request} from 'express';
import { verify } from 'jsonwebtoken';


interface IPayload {
    sub:string;
}
export function ensureAuthenticated(
    resquest: Request,
    response: Response,
    next: NextFunction
){
    const authtoken = request.headers.authorization;

    if(!authtoken){
        return response.status(401).end();

    }

    const [, token] = authtoken.split(" ")
try{
    const {sub} = verify(token, "9930bc0f01eb16b95327a6540bb6dd6a") as IPayload;

    request.user_id = sub
    return next();
}catch(err){
    return response.status(401).end();
}

   
}