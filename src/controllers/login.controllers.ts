import { Request,Response } from "express";

import { IUserLogin } from "../interfaces/users";
import loginService from "../service/login/login.service";

const loginController = async (req: Request, res: Response) => {
    const loginData: IUserLogin = req.body
    const login = await loginService(loginData)
    return res.status(200).json(login)
}

export {loginController} 