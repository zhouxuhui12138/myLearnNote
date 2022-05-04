const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(111)
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(222)
  }, 2000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(333)
  }, 3000)
})

// race方法 拿到最快的一个promise结果 不论是否成功
// Promise.race([p1, p2, p3])
//   .then(result => {
//     console.log("res:" + result)
//   })
//   .catch(err => {
//     console.log("err:" + err)
//   })

// Promise.any 和race类似 但是必会拿到一个成功的结果
// 如传入的promise都失败 则出发catch的回调
Promise.any([p1, p2, p3])
  .then(result => {
    console.log("res:" + result)
  })
  .catch(err => {
    console.log("err:" + err)
  })
