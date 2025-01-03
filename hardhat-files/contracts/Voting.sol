// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        uint256 id;
        string name;
        string party;
        uint256 voteCount;
    }

    mapping(uint256 => Candidate) public candidates; // Mapping of candidate ID to Candidate struct
    mapping(address => bool) public hasVoted;        // Tracks whether an address has voted
    uint256 public candidatesCount;                 // Total number of candidates

    event Voted(address indexed voter, uint256 indexed candidateId);
    event CandidateAdded(uint256 indexed candidateId, string name, string party);

    constructor() {
        // Add static candidates (these match your frontend data)
        addCandidate("Prakash Karat (interim)", "Communist Party of India (Marxist)");
        addCandidate("Mallikarjun Kharge", "Indian National Congress (INC)");
        addCandidate("J. P. Nadda", "Bharatiya Janata Party (BJP)");
        addCandidate("Arvind Kejriwal", "Aam Aadmi Party (AAP)");
    }

    function addCandidate(string memory _name, string memory _party) public {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, _party, 0);
        emit CandidateAdded(candidatesCount, _name, _party);
    }

    function vote(uint256 _candidateId) public {
        require(!hasVoted[msg.sender], "You have already voted.");
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate ID.");

        // Record vote
        hasVoted[msg.sender] = true;
        candidates[_candidateId].voteCount++;

        emit Voted(msg.sender, _candidateId);
    }

    function getCandidate(uint256 _candidateId)
        public
        view
        returns (string memory, string memory, uint256)
    {
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate ID.");
        Candidate memory candidate = candidates[_candidateId];
        return (candidate.name, candidate.party, candidate.voteCount);
    }
}
