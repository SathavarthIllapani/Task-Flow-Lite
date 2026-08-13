export function validateTaskInput(text) {
  if (typeof text !== "string") return false;
  
  const trimmedText = text.trim();
  return trimmedText.length > 0 && trimmedText.length <= 100;
}