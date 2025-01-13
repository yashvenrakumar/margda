// src/hooks/useBeneficiaries.js
import { useState, useEffect } from "react";
import axios from "axios";

const useBeneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBeneficiaries = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/accounts");
        setBeneficiaries(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchBeneficiaries();
  }, []);

  return { beneficiaries, loading, error };
};

export default useBeneficiaries;
