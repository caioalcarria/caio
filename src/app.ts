import "reflect-metadata"
import express from "express"
import "express-async-errors"
import handleError from "./errors/handleError"
import loginRoutes from "./routes/login.routes"
import userRoutes from "./routes/users.routes"
import projectsRoutes from "./routes/project.routes"
import sectorRoutes from "./routes/sector.routes"
import applicationRoutes from "./routes/application.routes"





const app = express()
app.use(express.json())

app.use('/users', userRoutes)
app.use('/login', loginRoutes)
app.use('/projects', projectsRoutes)
app.use('/sectors', sectorRoutes)
app.use('/applications', applicationRoutes)
app.use(handleError)

export default app