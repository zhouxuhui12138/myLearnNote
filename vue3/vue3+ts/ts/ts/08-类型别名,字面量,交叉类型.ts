{
  // 类型别名
  type StrOrNum = string | number
  const str: StrOrNum = 123
  const num: StrOrNum = '123'

  // 字面量
  type Is123 = '1' | '2' | '3'
  // 只能为'1' '2' '3'
  const res: Is123 = '1'

  // 交叉类型
  interface IName {
    id: number
    name?: string
  }

  type IPerson = IName & { age: number }

  const obj:IPerson = {
    id: 1,
    name: 'xz',
    age: 18
  }
 }
