import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";



const deleteUserService = async (id:string) => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({id:id})
    
    if(!user){
        throw new AppError('user not found ', 404)
    }
    if(user.isActive==false){
        throw new AppError('user is already inactive ', 400)
    }

    user.isActive = false

    await userRepository.save(user)

    return {}

}

export default deleteUserService 