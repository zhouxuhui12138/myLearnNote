const btns = document.querySelectorAll("button")

// for (var i = 0; i < btns.length; i++) {
//   ;(function (i) {
//     btns[i].addEventListener("click", () => {
//       console.log(`第${i + 1}个按钮被点击了`)
//     })
//   })(i)
// }

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    console.log(`第${i + 1}个按钮被点击了`)
  })
}
