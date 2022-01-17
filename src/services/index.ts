import { Failures } from "../helpers/failures";
import { Canvas, createCanvas } from "canvas";
import { Either, left, right } from "fp-ts/lib/Either";
import { isValidHex, isNumber } from '../helpers/utils'

interface ISquareParams {
  color: string,
  height: string | undefined,
  width: string | undefined,
}

interface ICircleParams {
  color: string,
  radius: string
}

class CanvasService {
  drawSquare({ color, height = '200', width = '200' }: ISquareParams): Either<Failures, Canvas> {
    try {
      const hexColor = `#${color}`
      if (!isNumber(height) || !isNumber(width)) {
        return left<Failures, Canvas>(Failures.UnknownDimension);
      }

      const canvasHeight = height ? +height : 200
      const canvasWidth = width ? +width : 200

      if (canvasHeight > 5000 || canvasWidth > 5000) {
        return left<Failures, Canvas>(Failures.SquareOversize);
      }

      if (!isValidHex(hexColor)) {
        return left<Failures, Canvas>(Failures.UnknownColor);
      }

      const canvas = createCanvas(canvasWidth, canvasHeight)
      const context = canvas.getContext('2d')
      context.fillStyle = hexColor
      context.fillRect(0, 0, canvasWidth, canvasHeight)
      // TODO: Implements Square Text
      // context.font = '30px Impact';
      // context.fillStyle = 'white'
      // context.rotate(0.1);
      // context.fillText('TEXTO!', 50, 100);

      return right<Failures, Canvas>(canvas);
    } catch (_) {
      return left(Failures.Undefined)
    }
  }

  drawCircle({ color, radius = '200' }: ICircleParams): Either<Failures, Canvas> {
    try {
      const hexColor = `#${color}`
      if (!isValidHex(hexColor)) {
        return left<Failures, Canvas>(Failures.UnknownColor);
      }
      if (!isNumber(radius)) {
        return left<Failures, Canvas>(Failures.UnknownDimension);
      }

      const circleRadius = +radius;

      if (circleRadius > 500) {
        return left<Failures, Canvas>(Failures.CircleOversize);
      }

      const canvasSize = circleRadius * 2
      const canvas = createCanvas(canvasSize, canvasSize)
      const ctx = canvas.getContext('2d');
      ctx.beginPath()
      ctx.arc(circleRadius, circleRadius, circleRadius, 0, 2 * Math.PI, false)
      ctx.fillStyle = hexColor
      ctx.fill()
      // TODO: Implements Circle Text
      // context.font = '30px Impact';
      // context.fillStyle = 'white'
      // context.rotate(0.1);
      // context.fillText('TEXTO!', 50, 100)
      return right<Failures, Canvas>(canvas);
    } catch (_) {
      return left(Failures.Undefined)
    }
  }
}

export { CanvasService }