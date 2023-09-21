export function validatePassword(value: string) {
  return value.length >= 8 && /\d/.test(value);
}
