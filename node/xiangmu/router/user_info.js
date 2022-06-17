const express = require("express")
const expressJoi = require("@escook/express-joi")
const userInfoHandler = require("../router_handler/user_info")
const { update_userinfo_schema, update_password_schema, update_avatar_schema } = require("../schema/user")

const router = express.Router()

// 获取信息
router.get("/userinfo", userInfoHandler.getUserInfoHandler)

// 更新信息
router.post("/userinfo", expressJoi(update_userinfo_schema), userInfoHandler.updateUserInfoHandler)

// 重置密码
router.post("/updatepwd", expressJoi(update_password_schema), userInfoHandler.updateUserPassword)

// 更换头像
router.post('/update/avatar', expressJoi(update_avatar_schema), userInfoHandler.updateAvatar)

module.exports = router
