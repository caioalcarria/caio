import AppDataSource from "../../data-source";
import { Sector } from "../../entities/sector.entity";
import { AppError } from "../../errors/AppError";




const deleteSectorService = async (id:string) => {



    const sectorRepository = AppDataSource.getRepository(Sector)


    const sector = await sectorRepository.findOneBy({
        id: id
    })

    if(!sector){
        
        throw new AppError('this sector dont exists ', 409)
    }



    sectorRepository.delete({id:id})
    
    
    return {}
}

export default deleteSectorService 