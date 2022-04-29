const info = {
  name: 'xz',
  age: 19
}

const entries = Object.entries(info)
console.log(entries)

entries.forEach(item => {
  console.log(item[0], item[1])
})