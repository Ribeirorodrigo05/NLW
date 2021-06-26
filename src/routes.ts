import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin  } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import  { CreateComplimentController} from './controllers/CreateComplimentController'
import { ListUserSendComplementsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiverComplementsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";






const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createcomplimentController = new CreateComplimentController();
const listUserSendComplimentController = new ListUserSendComplementsController();
const listUserReceiveComplimentController =  new ListUserReceiverComplementsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();


router.post("/users",createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login",authenticateUserController.handle);
router.post('/compliments',ensureAuthenticated, createcomplimentController.handle);

router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentController.handle)
router.get("/users/compliments/receive", ensureAuthenticated,listUserReceiveComplimentController.handle)
router.get("/tags", listTagsController.handle)
router.get("/users", ensureAuthenticated,listUsersController.handle)

export {router}