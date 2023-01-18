import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany} from 'typeorm'

//*import das entities de relacionamento
import { Sector } from './sector.entity'
import { Application } from './application.entity'
import { User } from './user.entity'

@Entity('project')
class Project {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length: 50})
    title: string

    @Column()
    deadline: Date

    @Column()
    concludedAt: Date

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column({length: 10})
    status: string

    @Column({length: 500})
    description: string

    @ManyToOne(() => Sector, sector => sector.project)
    sector: Sector

    @ManyToOne(() => User, user => user.project)
    user: User

    @OneToMany(() => Application, application => application.project)
    application: Application[]

   
}

export {Project}