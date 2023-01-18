import { Request, Response, NextFunction } from 'express'

const ensureIdValidMiddleware = async(req: Request, res: Response, next: NextFunction) => {
  

  
    const id = req.params.id


    const checkIfValidUUID =(str) => {

        const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    
        return regexExp.test(str);
    }


    
    // Use the function
    const uuidStatus = checkIfValidUUID(id); 

    if(!uuidStatus){
        return res.status(404).json({
            message: 'id not valid'
        })
    }

        return next()
   

}

export default ensureIdValidMiddleware