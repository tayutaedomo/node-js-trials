
const objectPath = require("object-path");


const dict_to_list = (src, dest, path_list) => {
  dest = dest || [];

  if (! src) return dest;

  Object.keys(src).forEach(key => {
    const new_path_list = path_list ? path_list.slice() : [];
    new_path_list.push(key);

    const value = src[key];

    if (is_dict(value)) {
      dict_to_list(value, dest, new_path_list);

    } else {
      //console.log(new_path_list, src, value);
      dest.push({
        path_list: new_path_list,
        path_str: new_path_list.join('.'),
        value: value
      });
    }
  });

  return dest;
};
exports.dict_to_list = dict_to_list;

// Refer: https://stackoverflow.com/questions/38304401/javascript-check-if-dictionary
function is_dict(v) {
  return typeof v==='object' && v!==null && !(v instanceof Array) && !(v instanceof Date);
}


const list_to_dict = (src, dest, path_list) => {
  dest = dest || {};

  if (! src) return dest;

  src.forEach(value => {
    objectPath.set(dest, value.path_str, value.value);
  });

  return dest;
};
exports.list_to_dict = list_to_dict;



if (require.main === module) {
  const data = {
    a: 1,
    b: [
      1,
      2
    ],
    c: {
      ca: 10,
      cb: 20
    }
  };

  const list = dict_to_list(data);
  console.log(list);

  const dict = list_to_dict(list);
  console.log(dict);
}

