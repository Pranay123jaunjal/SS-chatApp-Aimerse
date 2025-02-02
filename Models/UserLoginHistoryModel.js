const mongoose=require("mongoose")
const crypto = require("crypto");

const UserLoginHistorySchema=new mongoose.Schema({
    
    token_user_login_history_schema:{
        type:String,
        default:null
    },
    token_user:{
        type:String,
        default:null
    },
    time_login:{
        type:Date,
        default:Date.now()
       
    },
    time_logout:{
        type:Date,
        default:null
    },
    status: {
        type: String,
        enum: ['active', 'offline'],
        default: "offline"
      }


},{timestamps:true})


UserLoginHistorySchema.pre("save", function (next) {
    if (!this.token_user_login_history_schema) {
      this.token_user_login_history_schema = crypto.randomBytes(6).toString("hex"); 
    }
    next();
  });

module.exports=mongoose.model("UserLoginHistory",UserLoginHistorySchema)