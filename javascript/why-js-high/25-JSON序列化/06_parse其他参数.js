const info = {
  name: "xz",
  age: 18,
  friend: ["yezi"],
}

const JSONString = JSON.stringify(info)

// JSON.parse拦截操作
const obj = JSON.parse(JSONString, (key, value) => {
  if (key === 'age') {
    return value - 1
  }

  return value
})

console.log(obj)