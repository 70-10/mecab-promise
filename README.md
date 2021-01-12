# mecab-promise

```terminal
npm install mecab-promise
```

## Required

- MeCab

## Example

```js
const mecab = require("mecab-promise");

async function main() {
  const nodes = await mecab.parse("すもももももももものうち");
  console.log(nodes);
}

main().catch(console.error);
```
