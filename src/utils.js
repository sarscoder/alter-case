export function splitDelimiters(str) {
  const regex = /[A-Z][a-z]+|[0-9]+|[A-Z]|[a-z]+/g;
  return str.trim().match(regex);
}
