const express=require("express")
const { register, Login, Logout } = require("../Controllers/UserController")
const { CreateMessage } = require("../Controllers/ConversationMessageController")


const router=express.Router()

  router.post("/register",register)
  router.post("/login",Login)
  router.post("/logout",Logout)


  router.post("/message",CreateMessage)





module.exports={router}