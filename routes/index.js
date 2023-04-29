const express = require('express')
const router = express.Router()

//引入 home 模組程式碼
const home = require('./modules/home')
const todos = require('./modules/todos')
const users = require('./modules/users')
const auth = require('./modules/auth')   // 引用模組

const { authenticator } = require('../middleware/auth')  // 掛載 middleware

// 將網址結構符合 / 字串的request導向home模組
router.use('/todos', authenticator, todos) // 加入驗證程序
router.use('/users', users)
router.use('/auth', auth)  // 掛載模組
router.use('/', authenticator, home) // 加入驗證程序



module.exports = router