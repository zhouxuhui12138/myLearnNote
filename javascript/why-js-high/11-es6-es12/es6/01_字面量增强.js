const myname = 'xz'
const age = 19

const obj = {
  // 属性简写
  myname,
  age,

  // 方法简写
  foo() {},
  bar() {},

  // 计算属性名
  [myname + 123]: 'xixi'
}

console.log(obj)