import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "email already exists"],
    required: [true, "email is required"],
  },
  userName: {
    type: String,
  },
  image: {
    type: String,
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Prompt",
    },
  ],
});

const User = models.User || model("User", userSchema);
export default User;
