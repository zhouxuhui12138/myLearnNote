const arr = ['aaa', 'asd', 'dfsd', 'asdf', 'xz']

// es5
if (arr.indexOf('xz') !== -1) {
  console.log('包含xz')
}

// es6
if (arr.includes('aaa')) {
  console.log('包含aaa')
}