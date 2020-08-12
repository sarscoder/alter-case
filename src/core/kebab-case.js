import { splitDelimiters } from "../utils";

export function kebabCase(str) {
  if (typeof str !== "string") return str;
  return splitDelimiters(str).join("-").toLowerCase();
}
