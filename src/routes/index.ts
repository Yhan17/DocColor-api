import { Router } from "express";
import { CanvasController } from "../controllers";
import { rateLimit } from 'express-rate-limit';

const canvasController = new CanvasController()
const routes = Router();

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // Limit each IP to 100 requests per `window` (here, per 1 hour)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: 'You have exceeded the 100 requests in 1 hr limit!',
})

routes.use(limiter)
routes.get('/api', (_, res) => {
  return res.json({
    'message': 'Server Running'
  })
})

routes.get('/api/:color/square', canvasController.drawSquare)

routes.get('/api/:color/circle/:radius', canvasController.drawCircle)


export { routes }