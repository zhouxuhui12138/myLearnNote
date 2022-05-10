function foo() {
  throw new Error("error")
}

try {
  foo()
} catch (error) {
  console.log(error.message)
} finally {
  console.log("无论出错 都会执行")
}

console.log("------")
