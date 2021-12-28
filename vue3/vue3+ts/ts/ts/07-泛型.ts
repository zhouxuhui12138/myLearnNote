{
  function swap<T, U>(arr: [T, U]): [U, T] {
    return [arr[1], arr[0]]
  }

  const res = swap(['str', 123])
  console.log(res)

  let arr: Array<number> = [1, 2, 3]

}
