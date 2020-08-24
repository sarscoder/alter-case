import {upperCase} from "../src/core/upper-case";

test("returns a string in UPPERCASE", () => {
  const inputs = ["lowercase", "camelCase", "Title Case"];
  const outputs = ["LOWERCASE", "CAMELCASE", "TITLE CASE"];

  inputs.forEach((input, current) => {
    expect(upperCase(input)).toBe(outputs[current]);
  });
});

test("trim leading and trailing whitespaces", () => {
  const str = " Text ";
  const input = upperCase(str);
  const output = "TEXT";

  expect(input).toBe(output);
});

test("returns the argument if it's not a string", () => {
  const inputs = [{}, ["an", "array"], 2];
  const outputs = [{}, ["an", "array"], 2];

  inputs.forEach((input, current) => {
    expect(upperCase(input)).toEqual(outputs[current]);
  });
});
