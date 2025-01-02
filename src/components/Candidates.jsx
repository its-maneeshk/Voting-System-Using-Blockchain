import React, { useState } from "react";

const candidates = [
  { id: 1, name: "Prakash Karat (interim)", party: "Communist Party of India (Marxist)", experience: "5 years", bio: "Advocating for education and healthcare reforms." },
  { id: 2, name: "Mallikarjun Kharge", party: "Indian National Congress (INC)", experience: "3 years", bio: "Focusing on infrastructure and economic development." },
  { id: 3, name: "J. P. Nadda", party: "Bharatiya Janata Party (BJP)", experience: "4 years", bio: "Committed to environmental sustainability and renewable energy." },
  { id: 4, name: "Arvind Kejriwal", party: "Aam Aadmi Party (AAP)", experience: "6 years", bio: "Championing social justice and equal rights." },
];

const Candidate = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredCandidates(
      candidates.filter((candidate) =>
        candidate.name.toLowerCase().includes(query)
      )
    );
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto white-glassmorphism shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Candidates
        </h1>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search candidates..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-2 border white-glassmorphism text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Candidate List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCandidates.map((candidate) => (
            <div
              key={candidate.id}
              className="p-4 blue-glassmorphism border rounded-lg shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-white">
                {candidate.name}
              </h3>
              <p className="text-sm text-white">{candidate.party}</p>
              <p className="text-sm text-white mt-2">
                Experience: {candidate.experience}
              </p>
              <p className="text-sm text-white mt-2">{candidate.bio}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                View Profile
              </button>
            </div>
          ))}
        </div>

        {/* No Results Found */}
        {filteredCandidates.length === 0 && (
          <p className="text-center text-white mt-6">
            No candidates found. Try a different search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Candidate;
