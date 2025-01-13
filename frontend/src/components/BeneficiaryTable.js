// src/components/BeneficiaryTable.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import the `useNavigate` hook from react-router-dom
import useBeneficiaries from "../hooks/useBeneficiaries";

const BeneficiaryTable = () => {
  const { beneficiaries, loading, error } = useBeneficiaries();
  const navigate = useNavigate(); // Initialize the `useNavigate` hook for navigation

  const handleAddAccount = () => {
    navigate("/"); // Navigate to the home page ("/")
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Beneficiary List</h2>
          <button
            onClick={handleAddAccount} // Trigger the navigate function on button click
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-300"
          >
            Add Account
          </button>
        </div>
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Account ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Introducer ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Beneficiary ID</th>
            </tr>
          </thead>
          <tbody>
            {beneficiaries.map((beneficiary) => (
              <tr key={beneficiary._id} className="border-b">
                <td className="px-4 py-2 text-sm text-gray-900">{beneficiary.account_id}</td>
                <td className="px-4 py-2 text-sm text-gray-900">{beneficiary.introducer_id}</td>
                <td className="px-4 py-2 text-sm text-gray-900">{beneficiary.beneficiary_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BeneficiaryTable;
