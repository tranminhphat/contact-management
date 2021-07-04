const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    firstName: {
      type: String,
      maxLength: 10,
      required: true,
    },
    middleName: {
      type: String,
      maxLength: 10,
    },
    lastName: {
      type: String,
      maxLength: 10,
      required: true,
    },
    directManagerId: {
      type: Schema.Types.ObjectId,
      ref: 'Contact',
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: Boolean,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
  },
  { timestamp: true }
);

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
