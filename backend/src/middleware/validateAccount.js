const Joi = require('joi');

const validateAccount = (req, res, next) => {
  const schema = Joi.object({
    account_id: Joi.number().required(),
    introducer_id: Joi.number().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  next();
};

module.exports = validateAccount;
