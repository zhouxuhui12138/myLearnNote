window.addEventListener("load", () => {
  const swiperItems = document.querySelectorAll(".swiper-item")
  const classNames = []
  let timer = null

  const init = () => {
    collectClassNames()
    swiperMove()
  }

  function collectClassNames() {
    for (let i = 0; i < swiperItems.length; i++) {
      classNames.push(swiperItems[i].className)

      // 移入移出
      swiperItems[i].addEventListener("mouseover", () => {
        clearInterval(timer)
      })
      swiperItems[i].addEventListener("mouseout", () => {
        timer = setInterval(setClassName, 3000)
      })
    }
  }

  function setClassName() {
    // 把最后一项先删除然后再移到数组第一项
    classNames.unshift(classNames.pop())
    render()
  }

  function swiperMove() {
    timer = setInterval(setClassName, 3000)
  }

  function render() {
    for (let i = 0; i < swiperItems.length; i++) {
      swiperItems[i].className = classNames[i]
    }
  }

  init()
})
