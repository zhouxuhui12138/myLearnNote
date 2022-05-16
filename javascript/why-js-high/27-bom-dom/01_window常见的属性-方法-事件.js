// // 浏览器距离屏幕的间距
// console.log(window.screenLeft)
// console.log(window.screenTop)

// // 浏览器滚动事件和属性
// window.addEventListener('scroll', () => {
//   console.log(Math.floor(window.scrollY))
// })


// 方法
const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
  // scrollTo({ top: 0 })
  location.hash = 'aaa'
})

window.addEventListener('hashchange', () => {
  console.log(location.hash)
})
