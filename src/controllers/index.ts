import { CanvasService } from '../services';
import { Request, Response } from 'express';
import { pipe } from 'fp-ts/lib/function';
import { getFailuresReturn } from '../helpers/failures'
import * as E from 'fp-ts/lib/Either'

class CanvasController {
  async drawSquare(req: Request, res: Response): Promise<Response> {
    const { color } = req.params;
    const { height, width } = req.query as { height: string | undefined, width: string | undefined }
    const canvasDrawer = new CanvasService();

    const result = canvasDrawer.drawSquare({ color, height, width })

    return pipe(result,
      E.fold(
        (error) => res.status(getFailuresReturn(error).status).json(getFailuresReturn(error)),
        (canvas) => {
          res.setHeader('Content-Type', 'image/png');
          return canvas.createPNGStream().pipe(res)
        }
      )
    )
  }

  async drawCircle(req: Request, res: Response): Promise<Response> {
    const { color, radius } = req.params;
    const canvasDrawer = new CanvasService();

    const result = canvasDrawer.drawCircle({ color, radius })

    return pipe(result,
      E.fold(
        (error) => res.status(getFailuresReturn(error).status).json(getFailuresReturn(error)),
        (canvas) => {
          res.setHeader('Content-Type', 'image/png');
          return canvas.createPNGStream().pipe(res)
        }
      )
    )
  }
}

export { CanvasController }