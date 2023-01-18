import AppDataSource from "../../data-source";
import { Project } from "../../entities/project.entity";



const listProjectService = async ()=> {

    


    const projectRepository = AppDataSource.getRepository(Project)
    const projectList = projectRepository.find({
        relations: {
            user: true,
            sector:true
        }
    })



    
    return projectList
}

export default listProjectService 