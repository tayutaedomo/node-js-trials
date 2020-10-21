/*
 * Reference:
 *   - https://qiita.com/kiyodori/items/01d07d5c0659e539ecb9
 *   - https://chaika.hatenablog.com/entry/2018/12/16/083000
 */

// Default exports
import myFunc from './my_func';
myFunc();

import MyClass from './my_class';
let inst = new MyClass();

import { square, diag } from './lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
