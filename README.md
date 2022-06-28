<p align="center">
  <img width="150" height="150" src="assets/images/github/logo.svg">
</p>

<p align="center"><strong>Belizer</strong> is a useful, simple and lightweight toolset to serialize and unserialize </br> created with <strong>Typescript</strong> to use in <strong>Javascript</strong> environments such as Node, browsers...</p>

<hr>
</br>

- [Installation](#installation)
- [Usage example](#usage-example)
- [Params](#params)
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

const unserializeResult = Unserialize('key1=Test%1&key2=Test%2&lastKey="Last%but%not%least%key');

console.log(serializeResult)
// key1=Test%1&key2=Test%2&lastKey="Last%but%not%least%key"

console.log(unserializeResult)
// {key1: "Test 1", key2: "Test 2", lastKey: "Last but not least key"}

```

</br>

## Bundle size

[Bundlephobia](https://bundlephobia.com/package/belizer@1.2.0)

<p >
  <img src="assets/images/github/bundlephobia.png">
</p>

</br>

## Contributors

If you want be a contributor.

```

```
