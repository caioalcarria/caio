import { Request,Response } from "express";

//*import das interfaces
import { IProjectReq, IProjectUpdateReq } from "../interfaces/projects";
//**impor dos services */
import createProjectService from "../service/projects/createProject.service";
import listProjectService from "../service/projects/listProject.service";
import editProjectService from "../service/projects/editProject.service";
import deleteProjectService from "../service/projects/deleteProject.service";
import projectBySectionService from "../service/projects/projectBySection.service";
import projectByUserService from "../service/projects/projectByUser.service";



const createProjectControler= async (req: Request, res: Response) => {
    const projectData: IProjectReq = req.body
    const createProject = await createProjectService(projectData, req.user.id)
    return res.status(201).json(createProject)
}

const listProjectControler = async (req:Request, res:Response ) => {
    const projectList = await listProjectService()
    return res.status(200).json(projectList)
}




const editProjectControler = async (req: Request, res: Response) => { 
    const projectUpdateData: IProjectUpdateReq = req.body
    const idReqProject : string = req.params.id
    const idUser : string = req.user.id
    const updateUser = await editProjectService(projectUpdateData, idReqProject, idUser) 
    return res.status(200).json(updateUser)
}




const deleteProjectControler= async (req: Request, res: Response) => {
    const idUser : string = req.user.id
    const deleteSector = await deleteProjectService(req.params.id, idUser)
    return res.status(204).json(deleteSector)
}


const projectByUserControler = async (req:Request, res:Response ) => {
    const idUser : string = req.user.id
    const projectList = await projectByUserService(idUser)
    return res.status(200).json(projectList)
}
const projectBySectionControler = async (req:Request, res:Response ) => {
    const sectorId : string = req.params.id
   const sectorList = await projectBySectionService(sectorId)
   return res.status(200).json(sectorList)
}



export{
    createProjectControler,
    listProjectControler,
    editProjectControler,
    deleteProjectControler,
    projectByUserControler,
    projectBySectionControler

}