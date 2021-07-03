var fs = require('fs');
const util = require('util');

// Must sync up with 02_getOSJSONs.js
const BATCHSIZE = 50;
const TOTALSUPPLY = 11305;


const OSINPUTDATADIR = "osraw/";
let osrecords = {};
for (let i = 0; i < TOTALSUPPLY; i += 50) {
  var filename = OSINPUTDATADIR + i + ".json";
  // console.log(filename);
  try {
    var data = JSON.parse(fs.readFileSync(filename, "utf8"));
    if (data.assets == null || data.assets.length == 0) {
      console.log("Assets missing for: " + i);
    }
    for (let j = 0; j < data.assets.length; j++) {
      const asset = data.assets[j];
      osrecords[asset.token_id] = asset;
    }
  } catch (e) {
    console.log("Error in file: " + filename);
  }
}
console.log(osrecords[666]);

const INPUTDATADIR = "raw/";
let records = [];
for (let i = 0; i < TOTALSUPPLY; i++) {
  var filename = INPUTDATADIR + i + ".json";
  try {
    var data = JSON.parse(fs.readFileSync(filename, "utf8"));
    if (data.description == null || data.description.length == 0) {
      console.log("Description missing for: " + i);
    }
    const osData = osrecords[data.tokenId];
    if (!osData) {
      console.log("Cannot find OS data for: " + data.tokenId);
    }
    records.push({
      tokenId: data.tokenId,
      name: data.name,
      image: data.image,
      osimage: osData == null ? null : osData.image_url,
      permalink: osData == null ? null : osData.permalink,
      description: data.description,
      attributes: data.attributes,
    });
  } catch (e) {
    console.log("Error in file: " + filename);
  }
}
console.log(JSON.stringify(records[666], null, 2))
const OUTPUTMINREPORT = "bastardData.min.js";
(async () => {
  await fs.writeFile(OUTPUTMINREPORT, "const BASTARDDATA=" + JSON.stringify(records) + ";", (err) => {
      if (err) throw err;
      console.log('Data written to file: ' + OUTPUTMINREPORT);
  });
})();

const OUTPUTREPORT = "bastardData.js";
(async () => {
  await fs.writeFile(OUTPUTREPORT, "const BASTARDDATA=" + JSON.stringify(records, null, 2) + ";", (err) => {
      if (err) throw err;
      console.log('Data written to file: ' + OUTPUTREPORT);
  });
})();

console.log(process.cwd());
