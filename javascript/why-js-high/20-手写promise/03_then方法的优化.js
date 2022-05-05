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
        // 延迟调用函数
        queueMicrotask(() => {
          if (this.state !== PROMISE_STATUS_PENDING) return
          this.state = PROMISE_STATUS_FULFILLED
          this.value = value
          this.onFulfilledFns.forEach(fn => {
            fn(this.value)
          })
        })
      }
    }

    const reject = reason => {
      if (this.state === PROMISE_STATUS_PENDING) {
        // 延迟调用函数
        queueMicrotask(() => {
          if (this.state !== PROMISE_STATUS_PENDING) return
          this.state = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectedFns.forEach(fn => {
            fn(this.reason)
          })
        })
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    return new XZPromise((resolve, reject) => {
      if (this.state === PROMISE_STATUS_FULFILLED && onFulfilled) {
        try {
          const value = onFulfilled(this.value)
          resolve(value)
        } catch (error) {
          reject(err)
        }
      }

      if (this.state === PROMISE_STATUS_REJECTED && onRejected) {
        try {
          const reason = onRejected(this.reason)
          resolve(reason)
        } catch (error) {
          reject(error)
        }
      }

      if (this.state === PROMISE_STATUS_PENDING) {
        // 如果多次使用then方法 把传入的函数放入到一个数组中遍历调用
        this.onFulfilledFns.push(() => {
          try {
            const value = onFulfilled(this.value)
            resolve(value)
          } catch (error) {
            reject(error)
          }
        })

        this.onRejectedFns.push(() => {
          try {
            const reason = onRejected(this.reason)
            resolve(reason)
          } catch (error) {
            reject(error)
          }
        })
      }
    })
  }
}

const promise = new XZPromise((resolve, reject) => {
  resolve(111)
})

promise
  .then(
    res => {
      console.log("res1: " + res)
      return "222"
    },
    err => {
      console.log("err1: " + err)
    }
  )
  .then(
    res => {
      console.log("res2: " + res)
    },
    err => {
      console.log("err2: " + err)
    }
  )
