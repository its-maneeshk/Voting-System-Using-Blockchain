import React, { useState, useEffect } from "react";
import { getContract, initWeb3 } from "../utils/eth"; // Import new utility functions

const Vote = () => {
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  const staticCandidates = [
    { id: 1, name: "Prakash Karat (interim)", party: "Communist Party of India (Marxist)" },
    { id: 2, name: "Mallikarjun Kharge", party: "Indian National Congress (INC)" },
    { id: 3, name: "J. P. Nadda", party: "Bharatiya Janata Party (BJP)" },
    { id: 4, name: "Arvind Kejriwal", party: "Aam Aadmi Party (AAP)" },
  ];

  // Fetch candidates from the smart contract
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        initWeb3(); // Initialize Web3 here
        const contract = getContract();
        if (!contract) return;  // If contract is null, MetaMask is not available

        // Fetch candidates count
        const count = await contract.methods.candidatesCount().call();
        const candidatesList = [];

        // Loop through each candidate and fetch details
        for (let i = 1; i <= count; i++) {
          const candidate = await contract.methods.candidates(i).call();
          candidatesList.push({ id: i, name: candidate.name, party: candidate.party });
        }

        setCandidates(candidatesList.length ? candidatesList : staticCandidates);
      } catch (error) {
        console.error("Error fetching candidates:", error);
        setCandidates(staticCandidates);
      } finally {
        setLoading(false);
      }
    };
    fetchCandidates();
  }, []);

  const handleVote = async () => {
    if (selectedCandidate) {
      try {
        const contract = getContract();
        if (!contract) return;  // If contract is null, MetaMask is not available

        const selectedCandidateId = parseInt(selectedCandidate);
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];  // Use the first account

        // Call the vote function on the contract
        await contract.methods.vote(selectedCandidateId).send({ from: account });
        setIsSubmitted(true);
      } catch (error) {
        console.error("Error casting vote:", error);
        alert("Failed to cast vote. Please try again.");
      }
    } else {
      alert("Please select a candidate to vote!");
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto white-glassmorphism shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Cast Your Vote</h1>

        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Thank you for voting!</h2>
            <p className="text-lg text-white">
              You voted for:{" "}
              <span className="font-bold text-red-500">
                {candidates.find((c) => c.id === parseInt(selectedCandidate))?.name || "Unknown"}
              </span>
            </p>
          </div>
        ) : (
          <>
            {loading ? (
              <p className="text-lg text-white mb-6">Loading candidates...</p>
            ) : (
              <>
                <p className="text-lg text-white mb-6">
                  Select a candidate and cast your vote. Your vote matters!
                </p>
                <div className="space-y-4">
                  {candidates.map((candidate) => (
                    <div
                      key={candidate.id}
                      className={`p-4 border rounded-lg flex justify-between items-center ${selectedCandidate === candidate.id.toString() ? "border-blue-500 bg-blue-700" : "border-gray-300"}`}
                    >
                      <div>
                        <h3 className="text-xl text-white font-semibold">{candidate.name}</h3>
                        <p className="text-white">{candidate.party}</p>
                      </div>
                      <button
                        className={`px-4 py-2 rounded ${selectedCandidate === candidate.id.toString() ? "bg-green-500 text-white" : "bg-gray-200 hover:bg-blue-500 hover:text-white"}`}
                        onClick={() => setSelectedCandidate(candidate.id.toString())}
                      >
                        {selectedCandidate === candidate.id.toString() ? "Selected" : "Select"}
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  className="mt-6 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                  onClick={handleVote}
                  disabled={!selectedCandidate}
                >
                  Submit Vote
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Vote;
