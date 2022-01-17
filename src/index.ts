import express from 'express';
import { routes } from './routes';
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from '../swagger.json'
import cors from 'cors'
const app = express();



app.use(routes)
app.use(express.json())
app.use(cors())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  explorer: true
}))


export { app }