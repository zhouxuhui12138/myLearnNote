const obj = { name: "xz" }

// 把obj转成promise并且resolve
const promise1 = Promise.resolve(obj)
promise1.then(res => {
  console.log(res)
})

const message = "error"
// 把message转成promise并且reject
const promise2 = Promise.reject(message)
promise2.catch(err => {
  console.log(err)
})
