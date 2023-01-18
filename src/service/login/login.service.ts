import { IUserLogin } from "../../interfaces/users"
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import  jwt  from "jsonwebtoken";
import { compare } from 'bcryptjs'
import 'dotenv/config'




const loginService = async (loginData : IUserLogin): Promise<string> => {


    if (!loginData.email || !loginData.password) {
        throw new AppError('missing fields', 400)
    }

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        email: loginData.email
    })
    
    if(!user){
        throw new AppError('user or password invalid', 403)
    }


    if(user.isActive==false){
        throw new AppError('user or password invalid', 400)
    }

    const passwordMatch = await compare(loginData.password, user.password)


    if(!passwordMatch){
        throw new AppError('user or password invalid', 403)
    }
    const token = jwt.sign(
        {
            name: user.name,
            email: user.email,
            type: user.type,
            phone: user.phone

        },
        'SECRET_KEY',
        {
            subject: String(user.id), 
            expiresIn: '24h'
        }
    )
    const response : any = { token: token}

    return response
}

export default loginService 