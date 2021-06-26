import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "../repositories/ComplimentsRepositories";



class ListUserSendComplimentsService {
    async execute(user_id:string){
        const complimentRepositories = getCustomRepository(ComplimentRepositories);

        const compliments = await complimentRepositories.find({
            where:{
                userReceiver:user_id
            }
        })

        return compliments
    }
}

export {ListUserSendComplimentsService}