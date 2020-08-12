import { splitDelimiters } from "../utils";

export function constantCase(str) {
  if (typeof str !== "string") return str;
  return splitDelimiters(str).join("_").toUpperCase();
}
