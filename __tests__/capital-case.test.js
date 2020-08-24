import {capitalCase} from "../src/core/capital-case";

test("returns a string in CapitalCase", () => {
  const inputs = [
    "lower case",
    "Title Case",
    "dot.case",
    "snake_case",
    "kebab-case",
    "PascalCase",
    "camelCase",
  ];
  const outputs = [
    "Lower Case",
    "Title Case",
    "Dot Case",
    "Snake Case",
    "Kebab Case",
    "Pascal Case",
    "Camel Case",
  ];

  inputs.forEach((input, current) => {
    expect(capitalCase(input)).toBe(outputs[current]);
  });
});

test("trim leading and trailing whitespaces", () => {
  const str = " Capital Case ";
  const input = capitalCase(str);
  const output = "Capital Case";

  expect(input).toBe(output);
});

test("returns the argument if it's not a string", () => {
  const inputs = [{}, ["an", "array"], 2];
  const outputs = [{}, ["an", "array"], 2];

  inputs.forEach((input, current) => {
    expect(capitalCase(input)).toEqual(outputs[current]);
  });
});
