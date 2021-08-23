var fs = require('fs');
const util = require('util');
const fetch = require('node-fetch');

const BATCHSIZE = 50;
const TOTALSUPPLY = 11305;

const downloadFile = (async (url, path) => {
  const res = await fetch(url, { timeout: 10000 });
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
    while (!fs.existsSync(filename)) {
      let url = "https://api.opensea.io/api/v1/assets?asset_contract_address=0x31385d3520bCED94f77AaE104b406994D8F2168C\&order_direction=desc\&limit=50\&offset=0";
      for (let j = i; j < i + BATCHSIZE && j < TOTALSUPPLY; j++) {
        url = url + "&token_ids=" + j;
      }
      console.log("Downloading " + i + " with batch size " + BATCHSIZE);
      try {
        await downloadFile(url, filename);
      } catch (e) {
        console.error("Error downloading: " + filename);
      }
    }
  }
}

doit();

console.log(process.cwd());
