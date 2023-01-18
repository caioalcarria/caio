import { Entity, CreateDateColumn, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'

//*import das entities de relacionamento
import { User } from './user.entity'
import { Project } from './project.entity'

@Entity('application')
class Application {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => User, user => user.application)
    user: User

    @ManyToOne(() => Project, project => project.application)
    project: Project
   
}

export {Application}