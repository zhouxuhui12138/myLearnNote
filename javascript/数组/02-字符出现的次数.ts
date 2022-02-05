{
  const str = "aaaa"
  const arr = ["a", "c", "a", 'aaaa']
  const key = "a"

  const aaa = (value: string | any[], key: string): number => {
    let index = 0
    for (let i = 0; i < value.length; i++) {
      if (value[i] === key) {
        index++
      }
    }
    return index
  }

  console.log(aaa(str, key))
  console.log(aaa(arr, key))
}
