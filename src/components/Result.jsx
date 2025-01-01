import React, { useState, useEffect } from 'react';
import { FaTrophy, FaChartBar, FaVoteYea } from 'react-icons/fa';

const Result = ({ contract }) => {
  const [candidates, setCandidates] = useState([]);
  const [winner, setWinner] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const candidateCount = await contract.candidateCount();
        const tempCandidates = [];

        // Fetch candidates and their vote counts
        for (let i = 1; i <= candidateCount; i++) {
          const candidate = await contract.candidates(i);
          tempCandidates.push({
            name: candidate.name,
            votes: candidate.voteCount.toString(),
          });
        }

        // Get the winner
        const winnerName = await contract.getWinner();
        setCandidates(tempCandidates);
        setWinner(winnerName);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };

    fetchResults();
  }, [contract]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <h2 className="text-2xl font-semibold text-blue-600">Loading Results...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto bg-white shadow-lg rounded-lg mt-10 p-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
          <FaTrophy className="inline mr-3" size={30} />
          Election Results
        </h1>

        {/* Voting Statistics Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            <FaChartBar className="inline mr-3" size={25} />
            Voting Statistics
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            {candidates.map((candidate, index) => (
              <li key={index} className="text-lg mb-2">
                <FaVoteYea className="inline mr-2" size={20} />
                {candidate.name}: {candidate.votes} votes
              </li>
            ))}
          </ul>
        </div>

        {/* Winner Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            <FaTrophy className="inline mr-3" size={25} />
            Winner:
          </h2>
          <div className="text-2xl font-bold text-green-600">
            {winner ? winner : "No winner yet"}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-10">
        <p>&copy; 2024 Voting Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Result;
