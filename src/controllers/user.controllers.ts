import { Request,Response } from "express";


//*import das interfaces
import { IUserRequest,  IUserUpdate} from "../interfaces/users";


//**impor dos services */
import deleteUserService from "../service/users/deleteUser.service"
import uptadeUserService from "../service/users/uptadeUser.service"
import createUserService from "../service/users/createUser.service";







const createUserController = async (req: Request, res: Response) => {
    const userData: IUserRequest = req.body
    const createUser = await createUserService(userData)
    return res.status(201).json(createUser)
}


const deleteUserController = async (req: Request, res: Response) => {
    const deleteUser = await deleteUserService(req.user.id)
    return res.status(204).json(deleteUser)
}

const uptadeUserController = async (req: Request, res: Response) => { 
    const userUpdateData: IUserUpdate = req.body
    const idReqUser : string = req.user.id
    const updateUser = await uptadeUserService(userUpdateData, idReqUser) 
    return res.status(200).json(updateUser)
}


export {createUserController, deleteUserController, uptadeUserController}