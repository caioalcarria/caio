export interface IUserRequest {
    name: string
    email: string
    type: string
    phone: string
    password: string
}



export interface IUser {
    id: string
    name: string
    email: string
    type: string
    phone: string
    password: string
    createdAt: Date
    updatedAt: Date
    isActive:boolean

}


export interface IUserResponse {
    id: string
    name: string
    email: string
    type: string
    phone: string
    createdAt: Date
    updatedAt: Date
    isActive:boolean
}


export interface IUserLogin {
    email: string
    password: string
}

export interface IUserUpdate {
    name?: string
    email?: string
    password?: string 
    phone?: string
}

