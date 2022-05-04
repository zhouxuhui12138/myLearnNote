// const newPromise = new Promise((resolve, reject) => {
//   resolve(123)
// })

// // 如果resolve传入的是一个promise 当前promise的状态会移交给新的promise
// new Promise((resolve, reject) => {
//   resolve(newPromise)
// }).then((res) => {
//   console.log('res:', res)
// })

// 传入一个对象 这个对象有then方法 会执行then方法 当前promise的状态会移交给then方法来处理
new Promise((resolve, reject) => {
  const obj = {
    then(resolve, reject) {
      resolve('哈哈')
    }
  }

  resolve(obj)
}).then((res) => {
  console.log('res:', res)
})