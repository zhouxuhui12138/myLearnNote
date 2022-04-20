// function sum(count) {
//   return function(num) {
//     return count + num
//   }
// }

// var res1 = sum(10)(20)
// var adder5 = sum(5)
// var res = adder5(10)
// console.log(res)
// console.log(res1)


// 打印日志案例
// function log(date, type, message) {
//   console.log(`[${date.getHours()}: ${date.getMinutes()}] [${type}][${message}]`)
// }

// log(new Date, 'Bug', '轮播图错误')
// log(new Date, 'Bug', '首页错误')
// log(new Date, 'Bug', '列表错误')

// 柯里化的优化
var log = date => type => message => {
  console.log(`[${date.getHours()}: ${date.getMinutes()}] [${type}] [${message}]`)
}

// 定制当前时间并且type是bug的函数
var nowTimeAndBug = log(new Date)('BUG')
nowTimeAndBug('首页错误')
nowTimeAndBug('轮播图错误')
nowTimeAndBug('列表错误')