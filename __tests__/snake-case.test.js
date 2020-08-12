import snakeCase from "../src/core/snake-case";

test("returns a string in snake_case", () => {
  const inputs = [
    "lower case",
    "Title Case",
    "dot.case",
    "kebab-case",
    "camelCase",
    "v204",
    "PascalCase",
  ];
  const outputs = [
    "lower_case",
    "title_case",
    "dot_case",
    "kebab_case",
    "camel_case",
    "v_204",
    "pascal_case",
  ];

  inputs.forEach((input, current) => {
    expect(snakeCase(input)).toBe(outputs[current]);
  });
});

test("trim leading and trailing whitespaces", () => {
  const str = " Some text ";
  const input = snakeCase(str);
  const output = "some_text";

  expect(input).toBe(output);
});

test("returns the argument if it's not a string", () => {
  const inputs = [{}, ["an", "array"], 2];
  const outputs = [{}, ["an", "array"], 2];

  inputs.forEach((input, current) => {
    expect(snakeCase(input)).toEqual(outputs[current]);
  });
});
