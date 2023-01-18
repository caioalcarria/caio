import { Router } from 'express'

//*import dos middlewares

//*todo yup verification
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import { userSerializer, userUpdateSerializer } from '../serializers/user.serializers'

//*todo token
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware'

//* import dos controllers
import { createUserController, deleteUserController, uptadeUserController } from '../controllers/user.controllers'



const userRoutes = Router()

userRoutes.post('', ensureDataIsValidMiddleware(userSerializer), createUserController )
userRoutes.patch('',ensureAuthMiddleware, ensureDataIsValidMiddleware(userUpdateSerializer), uptadeUserController)
userRoutes.delete('',ensureAuthMiddleware, deleteUserController )

export default userRoutes