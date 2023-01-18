import * as express from 'express'

declare global {
    namespace Express {
        interface Request {
            user: {
                id: string,
                name: string,
                email:string,
                type: string,
                phone: string,
            }
        }
    }
}