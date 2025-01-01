import React, { useState } from "react";

const Vote = () => {
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const candidates = [
    { id: 1, name: "Alice Johnson", party: "Democratic Alliance" },
    { id: 2, name: "Bob Smith", party: "People's Choice Party" },
    { id: 3, name: "Clara Lee", party: "Freedom Front" },
  ];

  const handleVote = () => {
    if (selectedCandidate) {
      setIsSubmitted(true);
    } else {
      alert("Please select a candidate to vote!");
    }
  };

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
            <p className="text-lg text-white">
              You voted for:{" "}
              <span className="font-bold text-red-500">
                {candidates.find((c) => c.id === parseInt(selectedCandidate))
                  ?.name || "Unknown"}
              </span>
            </p>
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
                  <div>
                    <h3 className="text-xl text-white font-semibold">{candidate.name}</h3>
                    <p className="text-white">{candidate.party}</p>
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
