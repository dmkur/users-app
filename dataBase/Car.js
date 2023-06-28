const { Schema, model } = require('mongoose');

const carSchema = new Schema(
  {
    model: { type: String, trim: true, required: true },
    year: { type: Number, trim: true, required: true },
    price: { type: Number, trim: true, required: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('car', carSchema);
