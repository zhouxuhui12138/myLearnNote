const info = {
  name: "xz",
  age: 19,
  fridend: {
    name: "yezi",
    age: 20,
    address: {
      city: "南京",
    },
  },
}

function isObject(value) {
  const valueType = typeof value
  return (valueType !== null || valueType !== undefined) && (valueType === "object" || valueType === "function")
}

function deepCopy(obj) {
  if (!isObject(obj)) return obj

  const newObj = {}
  for (const key in obj) {
    newObj[key] = deepCopy(obj[key])
  }

  return newObj
}

const obj = deepCopy(info)
info.fridend.address.city = '广州'
console.log(obj)
