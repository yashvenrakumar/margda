const Account = require('../models/Account');

const createAccount = async (req, res) => {
  try {
    const { account_id, introducer_id } = req.body;

    // Find the introducer
    const introducer = await Account.findOne({ account_id: introducer_id });

    let beneficiary_id = introducer_id; // Default beneficiary is introducer

    // If an introducer exists, calculate the beneficiary logic
    if (introducer) {
      const introducerBeneficiary = introducer.beneficiary_id;
      const accountCount = await Account.countDocuments({ introducer_id });

      // Check if the current account is odd or even
      if (accountCount % 2 === 0) {
        // Even: Beneficiary is the introducer's introducer
        const introducerOfIntroducer = await Account.findOne({ account_id: introducer.beneficiary_id });
        beneficiary_id = introducerOfIntroducer ? introducerOfIntroducer.beneficiary_id : introducer_id;
      } else {
        // Odd: Beneficiary is the introducer
        beneficiary_id = introducer_id;
      }
    }

    // Create and save new account
    const newAccount = new Account({ account_id, introducer_id, beneficiary_id });
    await newAccount.save();

    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createAccount, getAccounts };
