import AppDataSource from "../../data-source";
import { Project } from "../../entities/project.entity";
import { Application } from "../../entities/application.entity";
import { AppError } from "../../errors/AppError";

const applicationByProjectService = async (projectId:string) => {
    const projectRepository = AppDataSource.getRepository(Project)


    const project = await projectRepository.findOneBy({
        id: projectId
    })

    if(!project){
        
        throw new AppError('project dont exists ', 404)
    }


    const application= await AppDataSource.createQueryBuilder().
    select('application').
    from(Application, 'application').
    where('application.project = :projectId', { projectId: projectId }).
    getMany()
    return application

}

export default applicationByProjectService 