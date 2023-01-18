import AppDataSource from "../../data-source";
import { Project } from "../../entities/project.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";



const deleteProjectService = async (id:string, idUser:string) => {


    const projectRepository = AppDataSource.getRepository(Project)
    const userRepository = AppDataSource.getRepository(User)
   


    const project = await projectRepository.findOneBy({
        id: id
    })

    if(!project){
        
        throw new AppError('project not found', 404)
    }
    const user = await userRepository.findOneBy({id:idUser})
    if(!user){
        throw new AppError('user not found ', 404)
    }


     const test = await AppDataSource.createQueryBuilder().
    select('project').
    from(Project, 'project').
    where('project.id = :idReqProject AND project.user = :idUser ', {  idReqProject: id, idUser:idUser }).
    getOne()
    


    if(!test){
        throw new AppError('dont have permision ', 401)
    }

    projectRepository.delete({id:id})
    
    
    
    return {}
}

export default deleteProjectService 