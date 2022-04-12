function createArr() {
  var arr = new Array(1020 * 1024).fill(1)

  return function() {
    console.log(arr.length)
  }
}

var arrFns = []

for (var i = 0; i < 200; i++) {
  arrFns.push(createArr())
}

// 此时arrFns这个变量不销毁 会占用内存400m左右的空间

// 释放内存
arrFns = null