import { splitDelimiters } from "../utils";

export function camelCase(str) {
  if (typeof str !== "string") return str;
  const matched = splitDelimiters(str).map((match, index) => {
    return index === 0
      ? match.toLowerCase()
      : `${match[0].toUpperCase()}${match.slice(1).toLowerCase()}`;
  });
  return matched.join("");
}
