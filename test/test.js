const fs = require('fs');
const path = require('path');
const text2Object = require('../');


const data = fs.readFileSync(path.resolve(__dirname, 'txt')).toString();
const data2 = fs.readFileSync(path.resolve(__dirname, 'txt2')).toString();

const obj = text2Object(data);
console.log(obj);

const obj2 = text2Object(data2);
console.log(obj2);



