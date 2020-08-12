import { splitDelimiters } from "../utils";

export function pascalCase(str) {
  if (typeof str !== "string") return str;
  const matched = splitDelimiters(str).map((match) => {
    return `${match[0].toUpperCase()}${match.slice(1).toLowerCase()}`;
  });
  return matched.join("");
}
