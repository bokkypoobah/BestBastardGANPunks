var fs = require('fs');
const util = require('util');
const fetch = require('node-fetch');
const BASTARDDATA = require('./bastardData.js');
const CATEGORYDATA = require('../docs/categories.js');

console.log(CATEGORYDATA.CATEGORIES);
// const downloadFile = (async (url, path) => {
//   const res = await fetch(url, { timeout: 15000 });
//   const fileStream = fs.createWriteStream(path);
//   await new Promise((resolve, reject) => {
//     res.body.pipe(fileStream);
//     res.body.on("error", reject);
//     fileStream.on("finish", resolve);
//   });
// });
//
// // console.log(JSON.stringify(BASTARDDATA.BASTARDDATA["0"]));
//
// async function doit() {
//   for (const item of BASTARDDATA.BASTARDDATA) {
//     const tokenId = item.tokenId;
//     const arweaveUrl = item.images[2];
//     const filename = "./images/" + tokenId + "_" + arweaveUrl.replace("https://arweave.net/", "") + (item.imageMosaic == null ? ".png" : ".gif");
//     while (!fs.existsSync(filename)) {
//       console.log(filename + " downloading");
//       try {
//         await downloadFile(arweaveUrl, filename);
//       } catch (e) {
//         console.error("Error downloading: " + arweaveUrl);
//       }
//     // } else {
//     //   console.log(filename + " exists");
//     }
//   }
// }
// doit();

console.log(process.cwd());
