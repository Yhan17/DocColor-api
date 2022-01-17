import express from 'express';
import { routes } from './routes';
import cors from 'cors'
const app = express();



app.use(routes)
app.use(express.json())
app.use(cors())


export { app }