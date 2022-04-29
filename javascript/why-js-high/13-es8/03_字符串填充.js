const msg = "hello world"

const newMsg = msg.padStart(16, '*').padEnd(21, '*')
console.log(newMsg)

// 案例
const cardNumber = '62178526000207033054'
const finalCardNumber = cardNumber.slice(-4).padStart(cardNumber.length, '*')
console.log(finalCardNumber)