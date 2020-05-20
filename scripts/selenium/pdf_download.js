
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const helper = require('./helper');


const main = async () => {
  // Refer: https://stackoverflow.com/questions/43149534/selenium-webdriver-how-to-download-a-pdf-file-with-python
  const tmp_path = path.join(__dirname, '..', '..', 'tmp');
  const chrome_options = {
    prefs: {
      //'safebrowsing_for_trusted_sources_enabled': false,
      'download.default_directory': tmp_path, // Change default directory for downloads
      'download.prompt_for_download': false, // To auto download the file
      'download.directory_upgrade': true,
      'plugins.always_open_pdf_externally': true // It will not show PDF directly in chrome
    }
  };
  const driver = await helper.create_driver(chrome_options);

  await driver.get('https://doi4gaf5j9pnq.cloudfront.net/public/pdf/hello_world.pdf');

  let base64 = await driver.takeScreenshot();
  let buffer = Buffer.from(base64, 'base64');
  await promisify(fs.writeFile)('capture.jpg', buffer);

  await driver.quit();
};



if (require.main === module) {
  main().then(() => {
    console.log('Done');
  }).catch(result => {
    console.error(result);
  });
}

