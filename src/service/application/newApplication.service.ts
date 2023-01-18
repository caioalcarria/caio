import { IProjectReq, IProjectRes } from "../../interfaces/projects";

import AppDataSource from "../../data-source";

import { Project } from "../../entities/project.entity";
import { User } from "../../entities/user.entity";


import { AppError } from "../../errors/AppError";
import { Application } from "../../entities/application.entity";


//*: Promise<IProjectRes>

const newApplicationService = async (userId:string, projectId:string) => {

    const projectRepository = AppDataSource.getRepository(Project)
    const userRepository = AppDataSource.getRepository(User)
    const applicationRepository = AppDataSource.getRepository(Application)




    const user = await userRepository.findOneBy({
        id:userId
    })

    if(user.type!="freelancer"){
        throw new AppError('you are in a client account, to make an application create a freelancer account', 401)
    }
   

    

    const checkIfValidUUID =(str) => {

        const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    
        return regexExp.test(str);
    }
    // Use the function
    const uuidStatus = checkIfValidUUID(projectId); 

    if(!uuidStatus){
        throw new AppError('invalide project uuid ', 404)
    }


    const project = await projectRepository.findOneBy({
        id: projectId
    })


    if(!project){
        
        throw new AppError('project not found', 404)
    }




    const newApplication = applicationRepository.create({
       user, 
       project
    })
    await applicationRepository.save(newApplication)
    
    
    
    
    
    //return createProject
    return newApplication
}

export default newApplicationService 