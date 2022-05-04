new Promise((resolve, reject) => {
  // 待定状态
  resolve()
}).then(() => {
  // 成功状态
  console.log(123)
}).catch(() => {
  // 失败状态
})