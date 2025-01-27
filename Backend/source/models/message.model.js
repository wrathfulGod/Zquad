import mongoose from "mongoose";
import User from "./user.model.js";

const messageSchema = mongoose.Schema({
    senderId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true,
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true,
    },
    text: {
        type: String,
    },
    image: {
        type: String,
    }
},
    { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;