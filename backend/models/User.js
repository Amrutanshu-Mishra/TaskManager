const mongoose = require("mongoose");


//defining the user schema
const UserSchema = new mongoose.Schema(
     {
          name: { type: String, required: true },
          email: { type: String, required: true, unique: true },
          password: { type: String, required: true },
          profileImageURL: { type: String, default: null },
          role: { type: String, email: ["admin", "member"], default: "member" },//Role based access
     },
     {
          timestamps:true
     }
);

module.exports=mongoose.model("User",UserSchema);