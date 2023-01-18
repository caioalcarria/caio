import { Router } from 'express'

//*import dos middlewares
//*todo validar token
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware'
//*todo validar request
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import { sectorSerializer } from '../serializers/sector.serializers'

import ensureIdValidMiddleware from '../middlewares/ensureIdValidMiddleware.middleware'


//* import dos controllers
import { createSectorControler, deleteSectorControler, listSectorControler } from '../controllers/sector.controllers'


const sectorRoutes = Router()

sectorRoutes.post('',  ensureAuthMiddleware, ensureDataIsValidMiddleware(sectorSerializer), createSectorControler)
sectorRoutes.get('', ensureAuthMiddleware,listSectorControler )
sectorRoutes.delete('/:id', ensureIdValidMiddleware, ensureAuthMiddleware,deleteSectorControler ) 


export default sectorRoutes