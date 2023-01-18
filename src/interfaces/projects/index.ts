export interface  IProjectRes{
    id: string //*todo
    title: string
    deadline: Date
    concludedAt:Date
    status :string
    description :string
    sectorId:string //*todo
    userId:string //*todo
    createdAt: Date //*todo
    updatedAt: Date //*todo
    
}
export interface  IProjectReq{
    title: string
    deadline: Date
    concludedAt:Date
    status :string
    description :string
    sector:string


}

export interface  IProjectUpdateReq{
    title?: string
    deadline?: Date
    concludedAt?:Date
    status ?:string
    description? :string
    sector?:string


}