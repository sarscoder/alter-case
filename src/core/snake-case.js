import { splitDelimiters } from "../utils";

export function snakeCase(str) {
  if (typeof str !== "string") return str;
  return splitDelimiters(str).join("_").toLowerCase();
}
