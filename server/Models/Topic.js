import mongoose from "mongoose"

const topicSchema = new mongoose.Schema()

export const Topic = mongoose.model("Topic", topicSchema);
export const Question = mongoose.model("Question", topicSchema);
