import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IUserRequest, IUserResponse, IUserUpdate } from '../interfaces/users/index'


const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().max(50).required(),
    email: yup.string().max(50).email().required(),
    password: yup.string().required(),
    type: yup.string().required(),
    phone:yup.string().required(),
    
})

const userUpdateSerializer: SchemaOf<IUserUpdate> = yup.object().shape({  
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    password: yup.string().notRequired(),
    phone: yup.string().notRequired()
})

const userWithoutPasswordSerializer: SchemaOf<IUserResponse> = yup.object().shape({
    id: yup.string().notRequired(),
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    type: yup.string().notRequired(),
    phone:yup.string().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
    isActive: yup.boolean().notRequired()
    
})

const listUsersWithoutPassword = yup.array(userWithoutPasswordSerializer)


export { userSerializer, userWithoutPasswordSerializer, listUsersWithoutPassword, userUpdateSerializer} 