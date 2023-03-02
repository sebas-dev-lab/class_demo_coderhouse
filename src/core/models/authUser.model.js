import { Schema, model } from "mongoose";
import populate from "mongoose-autopopulate";
import bcrypt from "bcryptjs";

const auth_user = new Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    role_id: {
      type: Schema.Types.ObjectId,
      ref: "AuthRole",
    },
    tasks: {
      type: [Schema.Types.ObjectId],
      ref: "Task",
      autopopulate: true,
    },
  },
  {
    timestamps: true,
  },
  {
    collection: "AuthUser",
  }
);

auth_user.plugin(populate);

auth_user.methods.encrypt = async (pass) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(pass, salt);
};

auth_user.methods.validatePassword = async function (pass) {
  return bcrypt.compare(pass, this.password);
};

const AuthUser = model("AuthUser", auth_user);

export default AuthUser;
