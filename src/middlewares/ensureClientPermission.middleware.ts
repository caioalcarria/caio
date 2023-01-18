import { Request, Response, NextFunction } from 'express'


const ensureClientPermissionMiddleware = async(req: Request, res: Response, next: NextFunction) => {

    
    let type = req.user.type


    if(!type){
        return res.status(403).json({
            message: 'create an client acount to do this'
        })
    }

        return next()
   

}

export default ensureClientPermissionMiddleware