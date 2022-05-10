console.log("script start")

// setTimeout本身是一个同步函数 他里面的回调是异步函数
// 里面的回调会被加入到事件队列里面 等到定时器的时间到了 会被js的主线程执行
setTimeout(() => {
  console.log(111)
}, 2000)

console.log("script end")
