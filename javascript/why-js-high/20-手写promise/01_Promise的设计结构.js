// Promise状态常量
const PROMISE_STATUS_PENDING = "pending"
const PROMISE_STATUS_FULFILLED = "fulfilled"
const PROMISE_STATUS_REJECTED = "rejected"

class XZPromise {
  constructor(executor) {
    this.state = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined

    const resolve = (value) => {
      if (this.state === PROMISE_STATUS_PENDING) {
        this.state = PROMISE_STATUS_FULFILLED
        this.value = value
        console.log("resovle")
      }
    }

    const reject = (reason) => {
      if (this.state === PROMISE_STATUS_PENDING) {
        this.state = PROMISE_STATUS_REJECTED
        this.reason = reason
        console.log("reject")
      }
    }

    executor(resolve, reject)
  }
}

const promise = new XZPromise((resolve, reject) => {
  reject()
})
