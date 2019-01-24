# 解析k-v文本转换成object


## 使用

```bash
$ npm i text-to-object -S
```

```js
const text2Object = require('text-to-object');
text2Object(str); // return object
```


## 示例

``` txt
adadadadadadad
# adm
aa=11
dd=c
```

=============>

```json
{ 
  adadadadadadad: '', 
  aa: '11', 
  dd: 'c' 
}
```



