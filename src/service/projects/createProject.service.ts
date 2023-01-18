import { IProjectReq, IProjectRes } from "../../interfaces/projects";

import AppDataSource from "../../data-source";

import { Project } from "../../entities/project.entity";
import { User } from "../../entities/user.entity";


import { AppError } from "../../errors/AppError";
import { Sector } from "../../entities/sector.entity";

//*: Promise<IProjectRes>

const createProjectService = async (projectData : IProjectReq, userId:string) => {

    const projectRepository = AppDataSource.getRepository(Project)
    const userRepository = AppDataSource.getRepository(User)




    const user = await userRepository.findOneBy({
        id:userId
    })
    if(!user){
        throw new AppError('user dont exists ', 404)
    }

    let sectorId =projectData.sector
 
    const sectorRepository = AppDataSource.getRepository(Sector)

    

    const checkIfValidUUID =(str) => {

        const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    
        return regexExp.test(str);
    }


    
    // Use the function
    const uuidStatus = checkIfValidUUID(sectorId); 

    if(!uuidStatus){
        throw new AppError('invalide sector uuid ', 404)
    }



    const sector = await sectorRepository.findOneBy({
        id: sectorId
    })


    if(!sector){
        
        throw new AppError('this sector dont exists ', 409)
    }

    

 


    const createProject = projectRepository.create({
        ...projectData,
        user,
        sector
    })
    await projectRepository.save(createProject)
    
    
    
    
    
    //return createProject
    return createProject
}

export default createProjectService 