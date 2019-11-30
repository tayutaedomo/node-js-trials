
const path = require('path');
const fs = require('fs');
const JSZip = require('jszip');


// fs.readFile(path.join(__dirname, 'archives', 'file.zip'), (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//
//   JSZip.loadAsync(data).then(function (zip) {
//     console.log(zip);
//
//   }).catch(err => {
//     console.error(err);
//   });
// });
/*
{ files:
   { 'a.txt':
      { name: 'a.txt',
        dir: false,
        date: 2019-11-30T18:09:36.000Z,
        comment: null,
        unixPermissions: 33188,
        dosPermissions: null,
        _data: [Object],
        _dataBinary: true,
        options: [Object] } },
  comment: null,
  root: '',
  clone: [Function] }
 */


fs.readFile(path.join(__dirname, 'archives', 'directory.zip'), (err, data) => {
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
/*
{ files:
   { 'directory/':
      { name: 'directory/',
        dir: true,
        date: 2019-11-30T18:23:50.000Z,
        comment: null,
        unixPermissions: 16877,
        dosPermissions: null,
        _data: [Promise],
        _dataBinary: true,
        options: [Object] },
     'directory/a.txt':
      { name: 'directory/a.txt',
        dir: false,
        date: 2019-11-30T18:09:36.000Z,
        comment: null,
        unixPermissions: 33188,
        dosPermissions: null,
        _data: [Object],
        _dataBinary: true,
        options: [Object] } },
  comment: null,
  root: '',
  clone: [Function] }
 */

