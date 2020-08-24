import { camelCase } from "../src/core/camel-case";

test("returns a string in camelCase", () => {
  const inputs = [
    "lower case",
    "Title Case",
    "dot.case",
    "snake_case",
    "kebab-case",
    "PascalCase",
  ];
  const outputs = [
    "lowerCase",
    "titleCase",
    "dotCase",
    "snakeCase",
    "kebabCase",
    "pascalCase",
  ];

  inputs.forEach((input, current) => {
    expect(camelCase(input)).toBe(outputs[current]);
  });
});

test("trim leading and trailing whitespaces", () => {
  const str = " camel Case ";
  const input = camelCase(str);
  const output = "camelCase";

  expect(input).toBe(output);
});

test("returns the argument if it's not a string", () => {
  const inputs = [{}, ["an", "array"], 2];
  const outputs = [{}, ["an", "array"], 2];

  inputs.forEach((input, current) => {
    expect(camelCase(input)).toEqual(outputs[current]);
  });
});
