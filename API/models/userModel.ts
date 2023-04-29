import mongoose, {Schema} from "mongoose"

export const UserSchema = new Schema({
    username:{require:true, type:String},
    password:{require:true, type:String},
})

const UserModel = mongoose.model("users", UserSchema)

export default UserModel