import constantCase from "../src/core/constant-case";

test("returns a string in PascalCase", () => {
  const inputs = [
    "lower case",
    "Title Case",
    "dot.case",
    "snake_case",
    "kebab-case",
    "camelCase",
    "PascalCase",
  ];
  const outputs = [
    "LOWER_CASE",
    "TITLE_CASE",
    "DOT_CASE",
    "SNAKE_CASE",
    "KEBAB_CASE",
    "CAMEL_CASE",
    "PASCAL_CASE",
  ];

  inputs.forEach((input, current) => {
    expect(constantCase(input)).toBe(outputs[current]);
  });
});

test("trim leading and trailing whitespaces", () => {
  const str = " Constant Case ";
  const input = constantCase(str);
  const output = "CONSTANT_CASE";

  expect(input).toBe(output);
});

test("returns the argument if it's not a string", () => {
  const inputs = [{}, ["an", "array"], 2];
  const outputs = [{}, ["an", "array"], 2];

  inputs.forEach((input, current) => {
    expect(constantCase(input)).toEqual(outputs[current]);
  });
});
