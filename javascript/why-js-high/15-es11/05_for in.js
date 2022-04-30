const obj = {
  name: 'xz',
  age: 19
}

// for in可以遍历对象的key
for (const key in obj) {
  console.log(key, obj[key])
}