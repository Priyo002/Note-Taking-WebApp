import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        username:{
            type : String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        note:{
            
        }
    },
    {timestamps: true}
)

export const Note = mongoose.model("Note",noteSchema);