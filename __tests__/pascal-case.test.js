import pascalCase from "../src/core/pascal-case";

test("returns a string in PascalCase", () => {
  const inputs = [
    "lower case",
    "Title Case",
    "dot.case",
    "snake_case",
    "kebab-case",
    "camelCase",
  ];
  const outputs = [
    "LowerCase",
    "TitleCase",
    "DotCase",
    "SnakeCase",
    "KebabCase",
    "CamelCase",
  ];

  inputs.forEach((input, current) => {
    expect(pascalCase(input)).toBe(outputs[current]);
  });
});

test("trim leading and trailing whitespaces", () => {
  const str = " Pascal Case ";
  const input = pascalCase(str);
  const output = "PascalCase";

  expect(input).toBe(output);
});

test("returns the argument if it's not a string", () => {
  const inputs = [{}, ["an", "array"], 2];
  const outputs = [{}, ["an", "array"], 2];

  inputs.forEach((input, current) => {
    expect(pascalCase(input)).toEqual(outputs[current]);
  });
});
