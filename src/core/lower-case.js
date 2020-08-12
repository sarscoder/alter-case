export function lowerCase(str) {
  return typeof str !== "string" ? str : str.toLowerCase().trim();
}
