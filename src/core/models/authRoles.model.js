import { Schema, model } from "mongoose";
import populate from 'mongoose-autopopulate';

const auth_role = new Schema(
  {
    title: {
      type: String,
    },
    users: {
      type: [Schema.Types.ObjectId],
      ref: "AuthUser",
      autopopulate: true,
    },
  },
  {
    timestamps: true,
  },
  {
    collection: "AuthRole",
  }
);

auth_role.plugin(populate);

const AuthRole = model("AuthRole", auth_role);

export default AuthRole;
