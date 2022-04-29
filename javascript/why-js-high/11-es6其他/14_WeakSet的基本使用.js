// weakSet只能存放对象类型
// weakSet和Set最大的区别是 weakSet是弱引用 Set是强引用

let obj = { name: 'xz' }

const set = new Set()
set.add(obj)

const weakSet = new WeakSet()
weakSet.add(obj)

obj = null // 此时weakSet里面的obj会被销毁 set的则还存在
