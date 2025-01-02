import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

const Result = ({ contract }) => {
  const [results, setResults] = useState([]);
  const [winner, setWinner] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const totalCandidates = await contract.getTotalCandidates();
        const votes = [];

        for (let i = 0; i < totalCandidates; i++) {
          const candidate = await contract.candidates(i); // Assuming 'candidates' method
          const voteCount = await contract.getVotes(candidate.id); // Assuming 'getVotes' method

          const voteCountNumber = voteCount.toNumber(); // Convert BigNumber to number
          votes.push({
            id: candidate.id,
            name: candidate.name,
            votes: voteCountNumber,
          });
        }

        setResults(votes);

        // Determine the winner
        let maxVotes = 0;
        let winnerName = "";
        votes.forEach((vote) => {
          if (vote.votes > maxVotes) {
            maxVotes = vote.votes;
            winnerName = vote.name;
          }
        });
        setWinner(winnerName);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching results:", error);
        setLoading(false);
      }
    };

    fetchResults();
  }, [contract]);

  if (loading) {
    return <p className="text-center text-white">Loading results...</p>;
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto white-glassmorphism shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          Voting Results
        </h1>

        {/* Display Winner */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl text-green-500 font-bold">
            Winner: {winner || "No votes yet"}
          </h2>
        </div>

        {/* Candidate List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result) => (
            <div
              key={result.id}
              className="p-4 blue-glassmorphism border rounded-lg shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-white">{result.name}</h3>
              <p className="text-lg text-gray-300 mt-2">Votes: {result.votes}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
