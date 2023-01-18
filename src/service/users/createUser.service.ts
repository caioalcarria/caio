import { IUserRequest, IUserResponse } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializers";


const createUserService = async (userData : IUserRequest): Promise<IUserResponse> => {



    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        email: userData.email
    })

    if(user){
        if(user.isActive==false){
            const reactiveUser = userRepository.create({
                ...user,
                ...userData,
                isActive:true
            })
            await userRepository.save(reactiveUser)

            return reactiveUser
        }
        throw new AppError('email already exists ', 409)
    }

    if(userData.type!= "cliente" && userData.type!= "freelancer"){
        throw new AppError('this type is not valid ', 409)
    }

 

   
    const createUser = userRepository.create(userData)
    await userRepository.save(createUser)
    
    const userWithoutPassword  = await userWithoutPasswordSerializer.validate(createUser, {
        stripUnknown: true
    })
    
    
    
    return userWithoutPassword
}

export default createUserService 