import { getCustomRepository } from "typeorm";

import { compare } from "bcryptjs";

import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories";


interface IAuthenticateRequest {
    email:string,
    password:string
}


class AuthenticateUserService {
    async execute({email,password}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({email})
//verifica se o email existe
        if(!user) {
            throw new Error("Email/Password incorrect");
            
        }
    const passwordMatch =   await compare(password, user.password)

    if(!passwordMatch){
        throw new Error("Email/Password incorrect");
        
            }
            const token = sign({email:user.email}, 
                "9930bc0f01eb16b95327a6540bb6dd6a",
                {subject:user.id,expiresIn:"1d"})
    }
}
export {AuthenticateUserService}