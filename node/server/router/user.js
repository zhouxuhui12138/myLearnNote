const express = require('express')
const userHandler = require('../router_handler/user')
const router = express.Router()

// 注册
router.post('/register', userHandler.register)

// 登录
router.post('/login', userHandler.login)

module.exports = router