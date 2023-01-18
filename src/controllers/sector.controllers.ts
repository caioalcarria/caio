import { Request,Response } from "express";

//*import das interfaces
import { ISectorReq } from "../interfaces/sectors";
//**impor dos services */
import createSectorService from "../service/sectors/createSector.service";
import listSectorService from "../service/sectors/listSector.service";
import deleteSectorService from "../service/sectors/deleteSector.service";


const createSectorControler= async (req: Request, res: Response) => {
    const sectorData: ISectorReq = req.body
    const createSector = await createSectorService(sectorData)
    return res.status(201).json(createSector)
}

const listSectorControler = async (req:Request, res:Response ) => {
    const sectorList = await listSectorService()
    return res.status(200).json(sectorList)
}


const deleteSectorControler= async (req: Request, res: Response) => {
    const deleteSector = await deleteSectorService(req.params.id)
    return res.status(204).json(deleteSector)
}


export {createSectorControler, listSectorControler, deleteSectorControler}