import AppDataSource from "../../data-source";
import { Project } from "../../entities/project.entity";
import { Sector } from "../../entities/sector.entity";
import { AppError } from "../../errors/AppError";

const projectBySectionService = async (sectorId:string) => {
    const sectorRepository = AppDataSource.getRepository(Sector)


    const sector = await sectorRepository.findOneBy({
        id: sectorId
    })

    if(!sector){
        
        throw new AppError('this sector dont exists ', 409)
    }


    const project= await AppDataSource.createQueryBuilder().
    select('project').
    from(Project, 'project').
    where('project.sector = :sectorId', { sectorId: sectorId }).
    getMany()
    return project

}

export default projectBySectionService 