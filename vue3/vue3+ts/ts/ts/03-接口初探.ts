// interface约束器
interface Person {
  readonly id: number // 只读
  name: string
  age?: number // 可选
}

let obj: Person = {
  id: 1,
  name: 'xz',
  age: 18
}
