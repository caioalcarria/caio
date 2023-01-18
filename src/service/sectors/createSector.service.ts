import { ISectorReq, ISectorRes } from "../../interfaces/sectors";
import AppDataSource from "../../data-source";
import { Sector } from "../../entities/sector.entity";
import { AppError } from "../../errors/AppError";



const createSectorService = async (sectorData : ISectorReq): Promise<ISectorRes> => {



    const sectorRepository = AppDataSource.getRepository(Sector)

    const sector = await sectorRepository.findOneBy({
        name: sectorData.name
    })

    if(sector){
        
        throw new AppError('this sector already exists ', 409)
    }


 

   
    const createSector = sectorRepository.create(sectorData)
    await sectorRepository.save(createSector)

    
    
    
    return createSector
}

export default createSectorService 