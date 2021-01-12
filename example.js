const mecab = require("./");

async function main() {
  const nodes = await mecab.parse("すもももももももものうち");
  console.log(nodes);
}

main().catch(console.error);
