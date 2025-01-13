import React, { useState } from 'react';
import useAccountApi from '../hooks/useAccountApi';

const AccountForm = () => {
  const [accountId, setAccountId] = useState('');
  const [introducerId, setIntroducerId] = useState('');
  const { createAccount, beneficiaryId, error } = useAccountApi(); // Destructure hook values

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAccount(accountId, introducerId); // Call the hook function
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Open New Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Account ID</label>
            <input
              type="number"
              value={accountId}
              onChange={(e) => setAccountId(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Introducer ID</label>
            <input
              type="number"
              value={introducerId}
              onChange={(e) => setIntroducerId(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md focus:outline-none hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        {beneficiaryId !== null && (
          <div className="mt-4 text-lg">
            <strong>Beneficiary ID: </strong> {beneficiaryId}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountForm;
