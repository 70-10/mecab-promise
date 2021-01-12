const mecab = require("./");

async function main() {
  const nodes = await mecab.parse(
    "きゃりーぱみゅぱみゅがGINZA SIXでインスタ映えするライブを行う"
  );
  console.log(nodes);
}

main().catch(console.error);
