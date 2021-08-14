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
// console.log(osrecords[0]);

const INPUTDATADIR = "raw/";
let records = [];

var filename = INPUTDATADIR + "all.json";
try {
  var data = JSON.parse(fs.readFileSync(filename, "utf8"));
  if (data.length != TOTALSUPPLY) {
    console.log("Error. Expecting data.length: " + data.length + " to be " + TOTALSUPPLY);
  }
  console.log(data.length);

  for (const record of data) {
    const osData = osrecords[record.tokenId];
    if (!osData) {
      console.log("Cannot find OS data for: " + data.tokenId);
    }
    record.imageMosaic = null;
    for (let k in record.attributes) {
      const attribute = record.attributes[k];
      if (attribute.trait_type == 'HYPE TYPE') {
        if (attribute.value == 'HYPED AF (ANIMATED)') {
          record.imageMosaic = record.tokenId + '.png';
          break;
        }
      }
    }
    record.permalink = osData.permalink;
    record.images = [osData.image_url, record.image, record.imageArweave, osData.image_preview_url, osData.image_thumbnail_url];
    delete record.image;
    delete record.imageArweave;

    if (record.tokenId == 0 || record.tokenId == 1) {
      console.log(record);
    }
    records.push(record);
  }
} catch (e) {
  console.log("Error in file: " + filename);
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
  await fs.writeFile(OUTPUTREPORT, "const BASTARDDATA=" + JSON.stringify(records, null, 2) + ";\n\nmodule.exports = {\n  BASTARDDATA\n}", (err) => {
      if (err) throw err;
      console.log('Data written to file: ' + OUTPUTREPORT);
  });
})();

console.log(process.cwd());
