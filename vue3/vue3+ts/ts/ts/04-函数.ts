const add = (x: number, y: number, z?: number): number => {
  if (z) {
    return x + y + z
  } else {
    return x + y
  }
}

console.log(add(1, 2, 3))

// 约束函数
interface Sum {
  (x: number, y: number, z?: number): number
}

const sum: Sum = add

console.log(sum(10, 20));

