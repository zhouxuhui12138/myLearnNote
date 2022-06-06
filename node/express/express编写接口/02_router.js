const express = require('express')

const router = express.Router()

router.post('/login', (req, res) => {
  const body = req.body
  
  res.send({
    status: 200,
    msg: 'ok',
    data: body
  })
})

module.exports = router