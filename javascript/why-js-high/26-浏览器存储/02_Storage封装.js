class Cache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage
  }
  
  setItem(key, value) {
    if (!value) return
    this.storage.setItem(key, JSON.stringify(value))
  }

  getItem(key) {
    let value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  removeItem(key) {
    this.storage.removeItem(key)
  }
}

const localCache = new Cache()
const sessionCache = new Cache(false)

export {
  localCache,
  sessionCache
}