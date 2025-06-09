import { User } from "@clerk/nextjs/dist/types/server";
import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";


const userSchema = new mongoose.Schema(
    {
    clerrkId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    profiPituture: {
        type: String,
        required: true,
    },
}, {
      timestamps: true, 

});
const user = mongoose.models.User || mongoose.model('User', userSchema);
export default User;