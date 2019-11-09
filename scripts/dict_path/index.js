
const to_list = (src, dest, path_list) => {
  dest = dest || [];

  if (! src) return dest;

  Object.keys(src).forEach(key => {
    const new_path_list = path_list ? path_list.slice() : [];
    new_path_list.push(key);

    const value = src[key];

    if (is_dict(value)) {
      to_list(value, dest, new_path_list);

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
exports.to_list = to_list;

// Refer: https://stackoverflow.com/questions/38304401/javascript-check-if-dictionary
function is_dict(v) {
  return typeof v==='object' && v!==null && !(v instanceof Array) && !(v instanceof Date);
}


// TODO
const to_dict = (src, dest, path_list) => {
  dest = dest || {};

  if (! src) return dest;

  src.forEach(value => {
    console.log(value);
  });

  return dest;
};
exports.to_dict = to_dict;



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

  const list = to_list(data);
  console.log(list);

  const dict = to_dict(list);
  console.log(dict);
}

