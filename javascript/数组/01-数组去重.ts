const arr: number[] = [1, 2, 2, 3, 1, 1, 1]
const strArr: string[] = ["a", "a", "b", "b", "b", "c", "e"]

const unique = (arr: any[]): any[] => {
  const newArr: any = []

  arr.forEach(item => {
    if (newArr.includes(item)) {
      return item
    } else {
      newArr.push(item)
    }
  })

  return newArr
}

console.log(unique(arr))
console.log(unique(strArr))
