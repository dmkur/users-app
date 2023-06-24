const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, trim: true },
    age: { type: Number, trim: true, default: 16 },
    email: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true },
    cars: {
      type: [Schema.Types.ObjectId],
      ref: "car",
      select: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("user", userSchema);
