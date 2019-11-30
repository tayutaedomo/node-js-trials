
const path = require('path');
const fs = require('fs');
const JSZip = require('jszip');


fs.readFile(path.join(__dirname, 'archives', 'file.zip'), (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  JSZip.loadAsync(data).then(function (zip) {
    console.log(zip);

  }).catch(err => {
    console.error(err);
  });
});

