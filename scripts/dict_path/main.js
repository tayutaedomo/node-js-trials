
const dict_path = require('./index');

const data = {
  a: 'a',
  b: {
    ba: 'ba',
    bb: 'bb'
  }
};

const list = dict_path.to_list(data);
console.log(list);

