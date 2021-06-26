
import {Request, Response} from 'express'
import { ListUserReceiveComplementsService } from '../services/ListUserReceiveComplimentsService';



class ListUserReceiverComplementsController{
    async handle(request:Request , response:Response){
            const {user_id} =  request;
            
            const   listUserReceiveComplimentsService = 
                new ListUserReceiveComplementsService

            const compliments = await listUserReceiveComplimentsService.execute(user_id);
            
            return response.json(compliments);

    }
}
export {ListUserReceiverComplementsController}
