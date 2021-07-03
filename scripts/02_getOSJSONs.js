var fs = require('fs');
const util = require('util');
const fetch = require('node-fetch');

const BATCHSIZE = 50;
const TOTALSUPPLY = 11305;

const downloadFile = (async (url, path) => {
  const res = await fetch(url);
  const fileStream = fs.createWriteStream(path);
  await new Promise((resolve, reject) => {
    res.body.pipe(fileStream);
    res.body.on("error", reject);
    fileStream.on("finish", resolve);
  });
});

async function doit() {
  for (let i = 0; i < TOTALSUPPLY; i += BATCHSIZE) {
    let filename = "osraw/" + i + ".json";
    let url = "https://api.opensea.io/api/v1/assets?asset_contract_address=0x31385d3520bCED94f77AaE104b406994D8F2168C\&order_direction=desc\&limit=50\&offset=0";
    for (let j = i; j < i + BATCHSIZE && j < TOTALSUPPLY; j++) {
      url = url + "&token_ids=" + j;
    }
    console.log("Downloading " + i + " with batch size " + BATCHSIZE);
    await downloadFile(url, filename);
  }
}

doit();

console.log(process.cwd());
