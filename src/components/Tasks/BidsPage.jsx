import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BidsPage = () => {
  const [bids, setBids] = useState([]);
  const [bidCount, setBidCount] = useState(0);
  const [error, setError] = useState("");
  const { taskId } = useParams();

  useEffect(() => {
    const fetchBids = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `http://localhost:8800/api/bids/${taskId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setBids(response.data.bids);
        setBidCount(response.data.bidCount);
      } catch (err) {
        setError("Error fetching bids");
        console.error(err);
      }
    };

    fetchBids();
  }, [taskId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <p className="text-center text-gray-700 mb-6 text-3xl">
          Total Bids: <span className="font-semibold">{bidCount}</span>
        </p>

        {bids.length === 0 ? (
          <p className="text-center text-gray-500">
            No bids available for this task.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border border-gray-300 rounded-md">
              <thead className="bg-blue-100 text-blue-700">
                <tr>
                  <th className="px-6 py-3 border-b">Bidder Name</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {bids.map((bid) => (
                  <tr key={bid._id} className="hover:bg-blue-50 transition">
                    <td className="px-6 py-4 border-b">{bid.bidderName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default BidsPage;
