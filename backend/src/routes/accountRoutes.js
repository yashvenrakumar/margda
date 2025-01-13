const express = require('express');
const router = express.Router();
const { createAccount, getAccounts } = require('../controllers/accountController');
const validateAccount = require('../middleware/validateAccount');

router.post('/', validateAccount, createAccount);
router.get('/', getAccounts);

module.exports = router;
