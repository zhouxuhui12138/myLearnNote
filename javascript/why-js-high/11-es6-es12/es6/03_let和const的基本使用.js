// let const 本质和var没有区别 都是声明一个变量
// const声明的是一个常量 不能直接修改 但是可以通过引用修改内部的属性和方法

let bar = "bar"
bar = "barr"
console.log(bar)

const foo = "foo"
// foo = 'fooo' // error

const baz = {
  name: "xz",
}

// baz = {} // error
baz.name = "bazz" // true
