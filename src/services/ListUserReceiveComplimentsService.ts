import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "../repositories/ComplimentsRepositories";



class ListUserReceiveComplementsService {
    async execute(user_id:string){
        const complimentRepositories = getCustomRepository(ComplimentRepositories);

        const compliments = await complimentRepositories.find({
            where:{
                userReceiver:user_id
            },
            relations: [
                "userSender",
                "userReceiver",
                "tag"

            ]
        })

        return compliments
    }
}

export {ListUserReceiveComplementsService}