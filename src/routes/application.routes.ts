import { Router } from 'express'

//*import dos middlewares
//*todo é cliente?
import ensureClientPermissionMiddleware from '../middlewares/ensureClientPermission.middleware'
//*todo validar token
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware'
//*todo validar request
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import { applicationSerializer } from '../serializers/application.serializers'
//* import dos controllers
import { newApplicationController, applicationByProjectController } from '../controllers/application.controllers'

const applicationRoutes = Router()

applicationRoutes.post('/:id',ensureAuthMiddleware , newApplicationController )
applicationRoutes.get('/:id', ensureAuthMiddleware, ensureClientPermissionMiddleware, applicationByProjectController ) //*application of poject

export default applicationRoutes