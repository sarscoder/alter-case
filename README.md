# Alter Case

A utility for transforming string cases in javascript.

## Why

JavaScript built-in methods for transforming string cases are limited to `.toLowerCase()` and `.toUpperCase()`.

## Installation

Install via a package manager `npm` or `yarn`

```sh
npm i alter-case
```

## Usage

`alter-case` come bundled with these functions:

- [`camelCase`](#camalCase)
- [`capitalCase`](#capitalCase)
- [`constantCase`](#constantCase)
- [`kebabCase`](#kebabCase)
- [`lowerCase`](#lowerCase)
- [`pascalCase`](#pascalCase)
- [`snakeCase`](#snakeCase)
- [`upperCase`](#upperCase)

### camelCase

```js
import { camelCase } from "alter-case";

camelCase("sample_text"); // sampleText
```

### capitalCase

```js
import { capitalCase } from "alter-case";

capitalCase("sample_text"); // Sample Text
```

### constantCase

```js
import { constantCase } from "alter-case";

constantCase("sample text"); // SAMPLE_TEXT
```

### kebabCase

```js
import { kebabCase } from "alter-case";

kebabCase("sample text"); // sample-text
```

### pascalCase

```js
import { pascalCase } from "alter-case";

pascalCase("sample text"); // SampleText
```

### snakeCase

```js
import { snakeCase } from "alter-case";

snakeCase("sample text"); // sample_text
```

### lowerCase

```js
import { lowerCase } from "alter-case";

// similar to javascript .toLowerCase()
lowerCase("Sample Text"); // sample text
```

### upperCase

```js
import { upperCase } from "alter-case";

// similar to javascript .toUpperCase()
upperCase("sample text"); // SAMPLE TEXT
```

# License

MIT
