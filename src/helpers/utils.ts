export const isValidHex = (value: string) => {
  const hexValidation = /^#+([a-fA-F0-9]{8}|[a-fA-F0-9]{6}|[a-fA-F0-9]{4}|[a-fA-F0-9]{3})$/i
  return hexValidation.test(value)
}

export const isNumber = (value: string | number | undefined): boolean => (
  (value != null) &&
  (value != undefined) &&
  (value !== '') &&
  !isNaN(Number(value.toString()))
);

