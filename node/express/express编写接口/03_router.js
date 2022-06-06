const express = require('express')

const router = express.Router()

router.get('/user', (req, res) => {
  const query = req.query

  res.send({
    status: 200,
    msg: 'ok',
    data: query
  })
})

router.post('/login', (req, res) => {
  const body = req.body
  
  res.send({
    status: 200,
    msg: 'ok',
    data: body
  })
})

module.exports = router