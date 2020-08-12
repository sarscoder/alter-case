export function upperCase(str) {
  return typeof str !== "string" ? str : str.toUpperCase().trim();
}
