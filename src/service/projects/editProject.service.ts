import { IProjectUpdateReq } from "../../interfaces/projects";

import AppDataSource from "../../data-source";
import { Project } from "../../entities/project.entity";
import { Sector } from "../../entities/sector.entity";

import { AppError } from "../../errors/AppError";
import { User } from "../../entities/user.entity";



const editProjectService = async (projectUpdateData: IProjectUpdateReq, idReqProject:string, idUser:string) => {



    const projectRepository = AppDataSource.getRepository(Project)
    const sectorRepository = AppDataSource.getRepository(Sector)
    const userRepository = AppDataSource.getRepository(User)



    


    const project = await projectRepository.findOneBy({id:idReqProject})
    if(!project){
        throw new AppError('project not found ', 404)
    }




    
    const user = await userRepository.findOneBy({id:idUser})
    if(!user){
        throw new AppError('user not found ', 404)
    }

    //console.log(project.user)
    //console.log(user)

    const test = await AppDataSource.createQueryBuilder().
    select('project').
    from(Project, 'project').
    where('project.id = :idReqProject AND project.user = :idUser ', {  idReqProject: idReqProject, idUser:idUser }).
    getOne()
    


    if(!test){
        throw new AppError(' dont have permision ', 401)
    }




    const sector = await sectorRepository.findOneBy({id:projectUpdateData.sector})

    if(projectUpdateData.sector){
        
        if(!sector){
            throw new AppError('sector not found ', 404)
        }  
    }



    const updatedProject = projectRepository.create({
        ...project,
        ...projectUpdateData,
        sector:sector
    })
    await projectRepository.save(updatedProject)

    

    
    
    
    return updatedProject
}

export default editProjectService 