// es11之前
// 最大安全整数
const maxInt = Number.MAX_SAFE_INTEGER

// 超过这个数字有可能是不安全的
console.log(maxInt + 10 === maxInt + 100)


// es11新增大整数类型
const bigInt = 9007199254741000000n
console.log(bigInt)
console.log(bigInt + bigInt)