
const fs = require('fs');
const { promisify } = require('util');

const webdriver = require('selenium-webdriver');
const { By, until } = webdriver;

const helper = require('./helper');


const main = async () => {
  const driver = await helper.create_driver();

  await driver.get('https://www.amazon.co.jp/s?k=mask');

  await driver.wait(until.elementLocated(By.css('.s-result-item')));

  const link_text = 'Youmay マスク 使い捨てマスク 不織布 男女兼用 ホワイト 50枚入';
  const link_text_elem = await driver.findElement(By.linkText(link_text))
  console.log('By.linkText', link_text, link_text_elem);
  if (link_text_elem) console.log('By.linkText', await link_text_elem.getText());
  console.log('');

  // Cannot use ?
  // const css_last_elem = await driver.findElement(By.css('div.s-result-item:last-child'));
  // console.log('By.css, last-child', css_last_elem);

  const css_elem_list = await driver.findElement(By.css('div.s-result-item a.a-link-normal img'));
  console.log('By.css, Chain', css_elem_list);
  if (css_elem_list) console.log('By.css, Chain', await css_elem_list.getAttribute('src'));


  let base64 = await driver.takeScreenshot();
  let buffer = Buffer.from(base64, 'base64');

  await promisify(fs.writeFile)('tmp/capture.jpg', buffer);

  await driver.quit();
};



if (require.main === module) {
  main().then(() => {
    console.log('\nDone\n');
  }).catch(result => {
    console.error(result);
  });
}

