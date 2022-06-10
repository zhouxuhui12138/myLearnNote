const express = require("express")
const expressJoi = require("@escook/express-joi")
const { getUserInfoHandler, updateUserInfoHandler } = require("../router_handler/user_info")
const { update_userinfo_schema } = require("../schema/user")

const router = express.Router()

router.get("/userinfo", getUserInfoHandler)

router.post("/userinfo", expressJoi(update_userinfo_schema), updateUserInfoHandler)

module.exports = router
