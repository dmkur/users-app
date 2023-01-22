const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, trim: true, require: true },
  age: { type: Number, trim: true, default: 16 },
  email: { type: String, trim: true, require: true },
  password: { type: String, trim: true, require: true }
}, {
  timestamps: true, versionKey: false
});

module.exports = model('user', userSchema);
