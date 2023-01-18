import { Entity, BeforeUpdate, BeforeInsert,   PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne   } from 'typeorm'
import { boolean } from 'yup'
import { hashSync } from 'bcryptjs'

//*import das entities de relacionamento


import { Application } from './application.entity'
import { Project } from './project.entity'


@Entity('user')
class User {
    @PrimaryGeneratedColumn("uuid")
    id: string



    @Column({length: 50})
    name: string

    @Column({length: 50, unique:true})
    email: string

    @Column({length: 25})
    type: string

    @Column({length: 15})
    phone: string

    @Column({length: 120})
    password: string

    @Column({default:true})
    isActive: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => Application, application => application.user)
    application: Application[]

    @OneToMany(() => Project, project => project.user)
    project: Project[]

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10)
    }

    

   
}

export {User}