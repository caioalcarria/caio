import * as yup from 'yup'
import { SchemaOf } from 'yup'
//*import dos interfaces
import { IApplicationReq } from '../interfaces/applications'


const applicationSerializer: SchemaOf<IApplicationReq> = yup.object().shape({
    project: yup.string().required()
})

export {applicationSerializer}



