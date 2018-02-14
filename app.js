var fs = require('fs');

// fs.readFile("challenge1/info.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
//
// fs.readFile("challenge2/info.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     if (!data.includes("Michael")) {
//       data += " - Michael";
//       fs.writeFileSync("challenge2/info.txt", data)
//       console.log(data);
//     }
//   }
// });
//
// fs.rename("challenge3/binfo.txt", "challenge3/info.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

fs.mkdir("challenge4/copyfolder", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("challenge4/copyfolder created")
  }
});
