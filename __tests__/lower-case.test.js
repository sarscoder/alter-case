import lowerCase from "../src/core/lower-case";

test("returns a string in lowercase", () => {
  const inputs = ["UPPERCASE", "camelCase", "Title Case", "PascalCase"];
  const outputs = ["uppercase", "camelcase", "title case", "pascalcase"];

  inputs.forEach((input, current) => {
    expect(lowerCase(input)).toBe(outputs[current]);
  });
});

test("trim leading and trailing whitespaces", () => {
  const str = " Text ";
  const input = lowerCase(str);
  const output = "text";

  expect(input).toBe(output);
});

test("returns the argument if it's not a string", () => {
  const input = [{}, ["an", "array"], 2];
  const output = [{}, ["an", "array"], 2];

  input.forEach((inputValue, current) => {
    expect(lowerCase(inputValue)).toEqual(output[current]);
  });
});
