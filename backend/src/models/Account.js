const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  account_id: { type: Number, required: true, unique: true },
  introducer_id: { type: Number, required: true },
  beneficiary_id: { type: Number },
});

module.exports = mongoose.model('Account', AccountSchema);
