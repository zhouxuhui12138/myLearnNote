function request(keyword) {
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      resovle(keyword)
    }, 1000)
  })
}

// 回调地狱
// request('xz').then(res => {
//   request(res + 'aaa').then(res => {
//     request(res + 'bbb').then(res => {
//       console.log(res)
//     })
//   })
// })

// async await解决方案
async function getData() {
  const res1 = await request('xz')
  const res2 = await request(res1 + 'aaa')
  const res3 = await request(res2 + 'bbb')
  console.log(res3)
}

getData()