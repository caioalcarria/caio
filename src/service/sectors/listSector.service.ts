import AppDataSource from "../../data-source";
import { Sector } from "../../entities/sector.entity";


const listSectorService = async () => {
    const sectorRepository = AppDataSource.getRepository(Sector)
    const sectorList = sectorRepository.find({})



    
    return sectorList
}

export default listSectorService 