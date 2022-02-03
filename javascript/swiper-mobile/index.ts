const container: HTMLElement = document.querySelector(".container")!
const swiper: HTMLElement = document.querySelector(".swiper")!
const rounds: HTMLElement = document.querySelector(".swiper-round")!
let index: number = 0

// 获取swiper container的宽度
const width: number = container.offsetWidth

// 自动播放
let timer: any
timer = setInterval(autoPlay, 2000)
function autoPlay() {
  index++
  const tranlateX: number = -(index * width)
  swiper.style.transition = "all .4s"
  swiper.style.transform = `translateX(${tranlateX}px)`
}

// 无缝滚动
swiper.addEventListener("transitionend", () => {
  if (index >= 4) {
    index = 0
    const tranlateX: number = -(index * width)
    swiper.style.transition = "none"
    swiper.style.transform = `translateX(${tranlateX}px)`
  } else if (index < 0) {
    index = 3
    const tranlateX: number = -(index * width)
    swiper.style.transition = "none"
    swiper.style.transform = `translateX(${tranlateX}px)`
  }
  // 小圆点跟随
  rounds.querySelector(".current")!.classList.remove("current")
  rounds.children[index]!.classList.add("current")
})

// 手指拖动轮播图
let startX: number = 0
let moveX: number = 0

swiper.addEventListener("touchstart", (e: TouchEvent) => {
  clearInterval(timer)
  startX = e.targetTouches[0].pageX
})

swiper.addEventListener("touchmove", (e: TouchEvent) => {
  moveX = e.targetTouches[0].pageX - startX
  const tranlateX: number = -(index * width) + moveX
  swiper.style.transition = "none"
  swiper.style.transform = `translateX(${tranlateX}px)`
})

swiper.addEventListener("touchend", (e: TouchEvent) => {
  // 滑动效果
  if (Math.abs(moveX) > 80) {
    if (moveX > 0) {
      index--
    } else {
      index++
    }

    const tranlateX: number = -(index * width)
    swiper.style.transition = "all .3s"
    swiper.style.transform = `translateX(${tranlateX}px)`
  } else {
    const tranlateX: number = -(index * width)
    swiper.style.transition = "all .2s"
    swiper.style.transform = `translateX(${tranlateX}px)`
  }
  timer = setInterval(autoPlay, 2000)
})


// backTop模块
const backTop: HTMLElement = document.querySelector('.backtop')!

window.addEventListener('scroll', () => {
  if (window.scrollY >= 400) {
    backTop.style.display = 'block'
  } else {
    backTop.style.display = 'none'
  }
})

backTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
