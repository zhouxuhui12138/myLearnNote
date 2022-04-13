// 在不使用箭头函数的情况下 定时器的this指向的是window
// setTimeout(function() {
//   console.log(this) // window
// }, 1000)


// 在监听原生dom发生的事件时 this指向为当前的dom
// var div = document.querySelector('div')
// div.onclick = function() {
//   console.log(this)
// }
// div.onmouseenter = function() {
//   console.log(this)
// }


// 一些数组里面的函数 一般情况下this是指向window的 但是可以通过特殊的方法来修改
// var num = [1, 3, 5]
// num.forEach(function(item) {
//   console.log(item, this)
// })
// num.map(function(item) {
//   console.log(item, this)
// }, 'aaa')


