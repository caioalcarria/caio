import * as yup from 'yup'
import { SchemaOf } from 'yup'
//*import dos interfaces
import { IProjectReq, IProjectUpdateReq } from '../interfaces/projects'


const projectSerializer: SchemaOf<IProjectReq> = yup.object().shape({
    sector: yup.string().required(),
    title: yup.string().max(500).required(),
    deadline: yup.date().required(),
    concludedAt: yup.date().notRequired(),
    status:yup.string().required(),
    description:yup.string().required()
})

const projectUpdateSerializer: SchemaOf<IProjectUpdateReq> = yup.object().shape({
    sector: yup.string().notRequired(),
    title: yup.string().max(500).notRequired(),
    deadline: yup.date().notRequired(),
    concludedAt: yup.date().notRequired(),
    status:yup.string().notRequired(),
    description:yup.string().notRequired()
})



export {projectSerializer, projectUpdateSerializer}


