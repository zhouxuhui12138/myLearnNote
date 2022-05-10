queueMicrotask(() => {
  console.log("我在111之前")
})

function requestData() {
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      resovle(222)
    }, 0)
  })
}

async function foo() {
  console.log(000)
  await requestData()

  // 下面的代码会被当作await返回的promise的then来执行
  // 也就是说下面的代码会被加入微任务 等到主线程执行完毕才执行
  console.log(111)
  console.log(222)
  console.log(333)
}
foo()

console.log(444)
