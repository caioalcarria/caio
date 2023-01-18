import AppDataSource from "../../data-source";
import { Project } from "../../entities/project.entity";


const projectByUserService = async (userId:string) => {

    const project= await AppDataSource.createQueryBuilder().
    select('project').
    from(Project, 'project').
    where('project.user = :userId', { userId: userId }).
    getMany()
    return project

}

export default projectByUserService 