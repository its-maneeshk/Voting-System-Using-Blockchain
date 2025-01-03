import React, { useState } from "react";

import CPI from "../assets/parties-logo/CPI.png";
import INC from "../assets/parties-logo/INC.png";
import BJP from "../assets/parties-logo/BJP.png";
import AAP from "../assets/parties-logo/AAP.png";

const Vote = () => {
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [votes, setVotes] = useState([0, 0, 0, 0]); // Initialize vote count for each candidate

  const candidates = [
    {
      id: 1,
      name: "Prakash Karat (interim)",
      party: "Communist Party of India (Marxist)",
      logo: CPI,
    },
    {
      id: 2,
      name: "Mallikarjun Kharge",
      party: "Indian National Congress (INC)",
      logo: INC,
    },
    {
      id: 3,
      name: "J. P. Nadda",
      party: "Bharatiya Janata Party (BJP)",
      logo: BJP,
    },
    {
      id: 4,
      name: "Arvind Kejriwal",
      party: "Aam Aadmi Party (AAP)",
      logo: AAP,
    },
  ];

  const handleVote = () => {
    if (selectedCandidate) {
      const updatedVotes = [...votes];
      updatedVotes[selectedCandidate - 1] += 1; // Increment vote for the selected candidate
      setVotes(updatedVotes);
      setIsSubmitted(true);
    } else {
      alert("Please select a candidate to vote!");
    }
  };

  const totalVotes = votes.reduce((total, count) => total + count, 0);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto white-glassmorphism shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Cast Your Vote
        </h1>

        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Thank you for voting!
            </h2>
            <p className="text-lg text-white mb-6">
              You voted for:{" "}
              <span className="font-bold text-red-500">
                {candidates.find((c) => c.id === parseInt(selectedCandidate))
                  ?.name || "Unknown"}
              </span>
            </p>
            <h3 className="text-xl text-white mb-4">Voting Progress</h3>
            <div className="space-y-4">
              {candidates.map((candidate, index) => {
                const votePercentage = totalVotes
                  ? Math.round((votes[index] / totalVotes) * 100)
                  : 0;
                return (
                  <div key={candidate.id}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white">{candidate.name}</span>
                      <span className="text-white">{votePercentage}%</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded h-4">
                      <div
                        className="bg-blue-500 h-4 rounded"
                        style={{ width: `${votePercentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <>
            <p className="text-lg text-white mb-6">
              Select a candidate and cast your vote. Your vote matters!
            </p>
            <div className="space-y-4">
              {candidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className={`p-4 border rounded-lg flex justify-between items-center ${
                    selectedCandidate === candidate.id.toString()
                      ? "border-blue-500 bg-blue-700"
                      : "border-gray-300"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={candidate.logo}
                      alt={`${candidate.party} Logo`}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="text-xl text-white font-semibold">
                        {candidate.name}
                      </h3>
                      <p className="text-white">{candidate.party}</p>
                    </div>
                  </div>
                  <button
                    className={`px-4 py-2 rounded ${
                      selectedCandidate === candidate.id.toString()
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 hover:bg-blue-500 hover:text-white"
                    }`}
                    onClick={() => setSelectedCandidate(candidate.id.toString())}
                  >
                    {selectedCandidate === candidate.id.toString()
                      ? "Selected"
                      : "Select"}
                  </button>
                </div>
              ))}
            </div>
            <button
              className="mt-6 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
              onClick={handleVote}
            >
              Submit Vote
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Vote;
