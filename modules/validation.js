export function validateTaskInput(text) {
  return text.trim().length > 0 && text.length <= 100;
}
