# Blockchain Voting System

This is a simple **Blockchain Voting System** built using **Solidity**, **Hardhat**, and **React**. The project is designed to allow users to vote for candidates on the blockchain, leveraging Ethereum's smart contract functionality for transparency and immutability.

### Project Overview

- **Frontend**: Built using **React** and **Vite** for a fast and responsive UI.
- **Backend**: A **Solidity** smart contract deployed using **Hardhat**, allowing users to vote for candidates.

**Note**: The Hardhat backend is still under development and is **not yet fully integrated** with the frontend. Therefore, the frontend won't fully interact with the smart contract just yet.

---

## Frontend Development

### Current Status
The frontend is built using React and Vite, and it provides a user interface for voting. However, the frontend is not yet fully integrated with the deployed smart contract, as the backend is still under development.

### Features
- Display a list of candidates
- Show the number of votes for each candidate
- Vote for a candidate (currently, the function is not connected to the blockchain

```

## Table of Contents

1. [Installation](#installation)
2. [Setup](#setup)
3. [Usage](#usage)
4. [Smart Contract Development](#smart-contract-development)
5. [Frontend Development](#frontend-development)
6. [Demo](#demo)

```

## Demo

Here are some screenshots of the project in its current state:

1. **Homepage View**  
   This is the landing page where users can see the list of candidates and their current vote counts.  
   ![Homepage View](https://github.com/its-maneeshk/.assets/blob/a2d5a670c2021b394f16b59895423fbc63719491/Voting_System_using_Blockchain_Demo_images/Voting%20System%20using%20Blockchain%20Home.png)

2. **Vote Button**  
   A close-up of the button that users will click to vote for a candidate.  
   ![Vote Button](https://github.com/its-maneeshk/.assets/blob/a2d5a670c2021b394f16b59895423fbc63719491/Voting_System_using_Blockchain_Demo_images/Voting%20System%20using%20Blockchain%20Vote.png)

3. **Candidate List**  
   Display of the candidates in the voting system.  
   ![Candidate List](https://github.com/its-maneeshk/.assets/blob/a2d5a670c2021b394f16b59895423fbc63719491/Voting_System_using_Blockchain_Demo_images/Voting%20System%20using%20Blockchain%20candidate.png)

4. **Vote Result**  
   The vote confirmation screen that appears after voting.  
   ![Vote Confirmation](https://github.com/its-maneeshk/.assets/blob/a2d5a670c2021b394f16b59895423fbc63719491/Voting_System_using_Blockchain_Demo_images/Voting%20System%20using%20Blockchain%20result.png)

5. **Footer**  
   Example of error handling when trying to vote for an already voted candidate.  
   ![Error Handling](https://github.com/its-maneeshk/.assets/blob/a2d5a670c2021b394f16b59895423fbc63719491/Voting_System_using_Blockchain_Demo_images/Voting%20System%20using%20Blockchain%20home%20footer.png)


---

## Installation

To get started, clone the repository and install the dependencies:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <relevent-dir>
2.  **Commands to install all the required dependencies**:
   ```bash
   cd client
   npm install
   npm run dev


