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
  const nodes = await mecab.parse(
    "きゃりーぱみゅぱみゅがGINZA SIXでインスタ映えするライブを行う"
  );
  console.log(nodes);
}

main().catch(console.error);
```
