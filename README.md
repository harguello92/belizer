<p align="center">
  <img height="30" src="assets/images/github/logo.svg">
</p>

<p align="center"><strong>Belizer</strong> is a useful, simple and lightweight toolset to serialize and unserialize </br> created with <strong>Typescript</strong> to use in <strong>Javascript</strong> environments such as Node, browsers...</p>

<p align="center">
  <a href="">
    <img alt="min size" src="https://img.shields.io/bundlephobia/min/belizer?style=for-the-badge" />
  </a>

  <a href="">
    <img alt="downloads per year" src="https://img.shields.io/npm/dy/belizer?style=for-the-badge" />
  </a>

  <a href="">
    <img alt="version" src="https://img.shields.io/npm/v/belizer?style=for-the-badge" />
  </a>
</p>

<hr>
</br>

- [Installation](#installation)
- [Usage example](#usage-example)
- [Bundle size](#bundles-size)
- [Contributors](#contributors)

</br>

## Installation

For now the only way to install it is through npm

```bash
$ yarn add belizer
```

or

```bash
$ npm i belizer
```

</br>

## Usage example

Belizer toolset is exported in two Javascript versions `ES Modules (belizer.es.js)` and `Common JS (belizer.cjs.js)`</br>
Use the syntax that suits your version of javascript.

</br>

### ES Modules

```JS
import {Serialize} from "belizer"
```

### Common JS

```JS
const {Serialize} = require("belizer")
```

</br>

```JS
const serializeResult = Serialize({
  key1: "Test 1",
  key2: "Test 2",
  lastKey: "Last but not least key"
});

const unserializeResult = Unserialize('key1=Test%201&key2=Test%202&lastKey="Last%20but%20not%20least%20key');

console.log(serializeResult)
// key1=Test%201&key2=Test%202&lastKey="Last%20but%20not%20least%20key"

console.log(unserializeResult)
// {key1: "Test 1", key2: "Test 2", lastKey: "Last but not least key"}

```

</br>

> **NOTE TO CONTRIBUTORS**: Feel free to propose improvements or new features!
