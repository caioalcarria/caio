import { Router } from 'express'

//*import dos middlewares
//*todo é cliente?
import ensureClientPermissionMiddleware from '../middlewares/ensureClientPermission.middleware'
//*todo validar token
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware'
//*todo validar request
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import { projectSerializer, projectUpdateSerializer } from '../serializers/project.serializers'
//*todo validar id enviado pelo parametro
import ensureIdValidMiddleware from '../middlewares/ensureIdValidMiddleware.middleware'
//* import dos controllers

import { createProjectControler, listProjectControler,editProjectControler,deleteProjectControler,projectByUserControler,projectBySectionControler } from '../controllers/project.controllers'


const projectsRoutes = Router()


projectsRoutes.post('', ensureAuthMiddleware, ensureClientPermissionMiddleware,ensureDataIsValidMiddleware(projectSerializer), createProjectControler)
projectsRoutes.get('', listProjectControler)
projectsRoutes.get('/user',  ensureAuthMiddleware,ensureClientPermissionMiddleware,  projectByUserControler)
projectsRoutes.get('/:id/sectors',  projectBySectionControler)//*id section
projectsRoutes.patch('/:id', ensureIdValidMiddleware, ensureAuthMiddleware, ensureClientPermissionMiddleware, ensureDataIsValidMiddleware(projectUpdateSerializer), editProjectControler  )//*id project
projectsRoutes.delete('/:id', ensureIdValidMiddleware, ensureAuthMiddleware, ensureClientPermissionMiddleware,  deleteProjectControler)//*id project

export default projectsRoutes 
