import {kebabCase} from "../src/core/kebab-case";

test("returns a string in kebab_case", () => {
  const inputs = [
    "lower case",
    "Title Case",
    "dot.case",
    "snake_case",
    "camelCase",
    "v204",
    "PascalCase",
  ];
  const outputs = [
    "lower-case",
    "title-case",
    "dot-case",
    "snake-case",
    "camel-case",
    "v-204",
    "pascal-case",
  ];

  inputs.forEach((input, current) => {
    expect(kebabCase(input)).toBe(outputs[current]);
  });
});

test("trim leading and trailing whitespaces", () => {
  const str = " Some text ";
  const input = kebabCase(str);
  const output = "some-text";

  expect(input).toBe(output);
});

test("returns the argument if it's not a string", () => {
  const inputs = [{}, ["an", "array"], 2];
  const outputs = [{}, ["an", "array"], 2];

  inputs.forEach((input, current) => {
    expect(kebabCase(input)).toEqual(outputs[current]);
  });
});
