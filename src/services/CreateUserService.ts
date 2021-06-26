import { UsersRepositories } from "../repositories/UsersRepositories";
import {getCustomRepository} from 'typeorm';
import { hash } from 'bcryptjs'

interface IUserRequest {
    name:string;
    email:string;
    admin?:boolean;
    password:string;
}

class CreateUserService{
    async execute({name,email,admin = false, password}:IUserRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);

        if(!email){
            throw new Error("email incorrect");
            
        }

        const useralreadyExists = await usersRepositories.findOne({email})

        if(useralreadyExists){
            throw new Error("email Already exists");
            
        }

        const passwordHash = await hash(password, 8)
         
        const user = usersRepositories.create({
            name,
            email,
            admin,
            password:passwordHash
        })

        await usersRepositories.save(user);

        return user
    }
}

export {CreateUserService}