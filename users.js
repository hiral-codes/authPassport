// ES6 syntax
import mongoose from "mongoose";

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/testmongodb");

// Creating user schema
const userSchema = mongoose.Schema({
    // User Details Schema
    email: String,
    password: String
});

// Exporting Model
const UserRegModel = mongoose.model("userReg", userSchema);
export default UserRegModel;
