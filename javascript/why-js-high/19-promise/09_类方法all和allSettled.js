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

// // Promise.all 等待所有promise执行完毕后返回一个数组
// // 如果有任意一个promise状态为reject Promise.all则返回reject
// Promise.all([p1, p2, p3])
//   .then(result => {
//     console.log(result)
//   })
//   .catch(err => {
//     console.log(err)
//   })

// Promise.allSettled 等待所有promise执行完毕后返回一个数组
// 状态一定会resolve
Promise.allSettled([p1, p2, p3])
  .then(result => {
    console.log(result)
  })
  .catch(err => {
    console.log(err)
  })
