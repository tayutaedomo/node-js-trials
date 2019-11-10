
const dict_path = require('./index');

const data = {
  a: 'a',
  b: {
    ba: 'ba',
    bb: 'bb'
  }
};

const list = dict_path.dict_to_list(data);
console.log(list);
console.log(dict_path.list_to_dict(list));

