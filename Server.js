const express=require("express")
const { Dbconnect } = require("./Config/Database.js")
const { router } = require("./Routes/route.js")

const app=express()
Dbconnect()
app.use(express.json())
const PORT=8000
app.use("/api/v1",router)
app.listen(PORT,()=>{
  console.log(`app is running on port ${PORT}`)
})

