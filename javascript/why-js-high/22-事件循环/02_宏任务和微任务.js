// 定时器 dom监听 ajax callback会被加入宏任务
// promise.then queueMicrotask会被加入微任务
// 执行宏任务之前要先保证微任务被清空

console.log("start")

queueMicrotask(() => {
  console.log("微任务1")
})

Promise.resolve().then(() => {
  console.log("微任务2")
})

setTimeout(() => {
  console.log('宏任务1')
}, 0)

console.log('end')