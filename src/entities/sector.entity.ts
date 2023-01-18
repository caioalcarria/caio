import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'

//*import das entities de relacionamento

import { User } from './user.entity'
import { Project } from './project.entity'

@Entity('sector')
class Sector {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length: 50})
    name: string


    @OneToMany(() => Project, project => project.sector)
    project: Project[]

   
}

export {Sector}