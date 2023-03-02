import { Schema, model } from "mongoose";
import populate from 'mongoose-autopopulate';

const task = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    completed: {
      type: Boolean,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "AuthUser",
    },
  },
  {
    timestamps: true,
  },
  {
    collection: "Task",
  }
);

task.plugin(populate);

const Task = model("Task", task);

export default Task;
