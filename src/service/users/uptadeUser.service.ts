import { IUserUpdate } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializers";

const uptadeUserService = async ( userUpdateData: IUserUpdate, idReqUser:string) => {

   
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({id:idReqUser})
    if(!user){
        throw new AppError('user not found ', 404)
    }
    const dataKeys = Object.keys(userUpdateData);
    if (
        dataKeys.includes("type") ||
        dataKeys.includes("isActive") 
      ) {
        throw new AppError("Unauthorized update", 401);
      }


    const existsEmail = await userRepository.findOneBy({
        email: userUpdateData.email
    })

    if(existsEmail){
        throw new AppError('email already exists ', 400)
    }
    

    const updatedUser = userRepository.create({
        ...user,
        ...userUpdateData
    })
    await userRepository.save(updatedUser)

    const userWithoutPassword  = await userWithoutPasswordSerializer.validate(updatedUser, {
        stripUnknown: true
    })

    return userWithoutPassword
    
}

export default uptadeUserService 