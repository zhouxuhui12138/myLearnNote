function foo(type) {
  console.log('foo')

  if (type !== 0) {
    // 创建一个异常类 并且抛出一个异常对象
    // throw new Error('type必须为0')

    // Error的子类 类型错误
    if (typeof type !== 'number') {
      throw new TypeError('type必须为数字0')
    }
  }
}

foo(0)

// 抛出异常后 后续代码都不会执行
console.log('----后续代码----')