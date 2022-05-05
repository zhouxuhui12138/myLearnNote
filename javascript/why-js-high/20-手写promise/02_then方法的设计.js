// Promise状态常量
const PROMISE_STATUS_PENDING = "pending"
const PROMISE_STATUS_FULFILLED = "fulfilled"
const PROMISE_STATUS_REJECTED = "rejected"

class XZPromise {
  constructor(executor) {
    this.state = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledFns = []
    this.onRejectedFns = []

    const resolve = value => {
      if (this.state === PROMISE_STATUS_PENDING) {
        this.state = PROMISE_STATUS_FULFILLED
        // 延迟调用函数
        queueMicrotask(() => {
          this.value = value
          this.onFulfilledFns.forEach(fn => {
            fn(this.value)
          })
        })
      }
    }

    const reject = reason => {
      if (this.state === PROMISE_STATUS_PENDING) {
        this.state = PROMISE_STATUS_REJECTED
        // 延迟调用函数
        queueMicrotask(() => {
          this.reason = reason
          this.onRejectedFns.forEach(fn => {
            fn(this.reason)
          })
        })
      }
    }

    executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    this.onFulfilledFns.push(onFulfilled)
    this.onRejectedFns.push(onRejected)
  }
}

const promise = new XZPromise((resolve, reject) => {
  resolve(111)
  // reject(222)
})

promise.then(
  res => {
    console.log(res)
  },
  err => {
    console.log(err)
  }
)
