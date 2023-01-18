import * as yup from 'yup'
import { SchemaOf } from 'yup'
//*import dos interfaces
import { ISectorReq } from '../interfaces/sectors'

const sectorSerializer: SchemaOf<ISectorReq> = yup.object().shape({
    name: yup.string().max(50).required()    
})

export {sectorSerializer}


