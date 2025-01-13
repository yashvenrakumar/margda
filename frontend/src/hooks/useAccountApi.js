import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAccountApi = () => {
  const navigate = useNavigate();

  const [beneficiaryId, setBeneficiaryId] = useState(null);
  const [error, setError] = useState("");

  const createAccount = async (account_id, introducer_id) => {
    try {
      const response = await axios.post("http://localhost:5000/api/accounts", {
        account_id,
        introducer_id,
      });
      alert("Created successful");
      navigate("/table");
      const data = await response.json();
      if (response.ok) {
        setBeneficiaryId(data.beneficiary_id);
        setError("");
      } else {
        setError(data.error || "An error occurred");
      }
    } catch (err) {
      setError("Failed to submit");
    }
  };

  return { createAccount, beneficiaryId, error };
};

export default useAccountApi;
