import mongoose,{ Schema } from "mongoose";


const topicSchema = new Schema(
    {
        title: String,
        description: String,
        author: String,
    },{
        role: {
            type: String,
            enum: ["admin", "user"],
            default: "user",
        },
    },{
        timestamps: true
    }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;

