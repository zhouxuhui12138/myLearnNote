const joi = require("joi")

// 用户名和密码的验证规则
const username = joi.string().alphanum().min(1).max(10).required()
const password = joi
  .string()
  .pattern(/^[\S]{6,12}$/)
  .required()

exports.reg_login_schema = {
  body: {
    username,
    password,
  },
}

exports.update_password_schema = {
  body: {
    newPwd: password,
    oldPwd: password
  }
}

// 用户信息的验证规则
const id = joi.number().integer().min(1).required()
const nickname = joi.string().min(1).max(12).required()
const email = joi.string().email().required()

exports.update_userinfo_schema = {
  body: {
    id,
    nickname,
    email
  }
}

// 用户头像的验证规则 dataUri表示base64格式
const avatar = joi.string().dataUri().required()
exports.update_avatar_schema = {
  body: {
    avatar
  }
}

