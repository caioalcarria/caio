import { Request,Response } from "express";

//*import das interfaces

//**impor dos services */

import newApplicationService from "../service/application/newApplication.service";
import applicationByProjectService from "../service/login/applicationByProject.service";


const newApplicationController= async (req: Request, res: Response) => {
    const idUser: string = req.user.id
    const idProject: string = req.params.id
    const newApplication = await newApplicationService(idUser, idProject)
    return res.status(201).json(newApplication)
}

const applicationByProjectController = async (req:Request, res:Response ) => {
    const idProject: string = req.params.id
    const listApplicationByProject = await applicationByProjectService(idProject)
    return res.status(200).json(listApplicationByProject)
}


export {newApplicationController, applicationByProjectController  }