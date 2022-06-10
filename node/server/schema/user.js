const joi = require("joi")

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
