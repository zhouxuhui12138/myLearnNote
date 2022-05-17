function debounce(fn, delay) {
  let timer = null

  function _debounce(...args) {
    timer && clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }

  return _debounce
}
