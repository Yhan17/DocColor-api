export enum Failures {
  SquareOversize,
  CircleOversize,
  UnknownDimension,
  UnknownColor,
  Undefined
}

export const getFailuresReturn = (failure: Failures) => {
  switch (failure) {
    case Failures.SquareOversize:
      return {
        'status': 406,
        'message': "The informed size exceeds the square limit (5000px)"
      }
    case Failures.CircleOversize:
      return {
        'status': 406,
        'message': "The informed size exceeds the circle limit (500px)"
      }
    case Failures.UnknownDimension:
      return {
        'status': 406,
        'message': "The informed dimension maybe wrong"
      }
    case Failures.UnknownColor:
      return {
        'status': 406,
        'message': "Unknown Color"
      }
    case Failures.Undefined:
      return {
        'status': 500,
        'message': "Undefined"
      }
  }
}