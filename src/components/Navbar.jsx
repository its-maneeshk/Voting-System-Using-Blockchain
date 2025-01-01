import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import { ethers } from "ethers";
import { FaHome, FaVoteYea, FaUserFriends, FaChartBar, FaInfoCircle } from "react-icons/fa";
import { BsWallet } from "react-icons/bs";
import { VscDebugDisconnect } from "react-icons/vsc";


import logo from '../assets/logo.png';

const Navbar = () => {

    const [account, setAccount] = useState(null); // State to store the connected account

    // Function to handle account changes
    const handleAccountChange = (accounts) => {
        if (accounts.length > 0) {
            setAccount(accounts[0]);
        } else {
            setAccount(null); // No account connected
        }
    };

    // Listen for account changes (when the user switches wallets)
    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", handleAccountChange);

            // Cleanup the event listener on component unmount
            return () => {
                window.ethereum.removeListener("accountsChanged", handleAccountChange);
            };
        }
    }, []);

    // Handle wallet connection
    const handleConnectWallet = async () => {
        try {
            if (window.ethereum) {
                // Request account access
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                handleAccountChange(accounts);
            } else {
                alert("Please install MetaMask!");
            }
        } catch (error) {
            console.error("Error connecting wallet:", error);
        }
    };

    // Handle wallet disconnection
    const handleDisconnectWallet = () => {
        setAccount(null); // Clear the account state
    };


    return (
        <>
            <nav className="w-full flex justify-around items-center p-4 ">
                {/* Logo Section */}
                <div className="flex-initial justify-center items-center">
                    <img src={logo} alt="logo" className="w-10 cursor-pointer" />
                </div>

                {/* Navigation Links */}
                <ul className="text-white flex flex-row justify-center items-center space-x-8">
                    <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
                        <Link to="/" className={`flex gap-1 ${location.pathname === "/" ? "text-blue-400" : "hover:text-gray-400"}`}><FaHome size={20} />Home</Link>
                    </li>
                    <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
                        <Link to="/vote" className={`flex gap-1 ${location.pathname === "/vote" ? "text-blue-400" : "hover:text-gray-400"}`} >
                            <FaVoteYea size={20} />
                            Vote
                        </Link>
                    </li>
                    <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
                        <Link to="/candidates" className={`flex gap-1 ${location.pathname === "/candidates" ? "text-blue-400" : "hover:text-gray-400"}`} >
                        <FaUserFriends size={20} />
                        Candidates
                        </Link>
                    </li>
                    <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
                        <Link to="/result" className={`flex gap-1 ${location.pathname === "/result" ? "text-blue-400" : "hover:text-gray-400"}`}><FaChartBar size={20} />Result</Link>
                    </li>
                    <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
                        <Link to="/about" className={`flex gap-1 ${location.pathname === "/about" ? "text-blue-400" : "hover:text-gray-400"}`}><FaInfoCircle size={20} />About</Link>
                    </li>
                </ul>

                {/* Connect/Disconnect Wallet Button */}
                <div className="flex flex-row justify-center items-center">
                    {account ? (
                        <div className="bg-green-500 flex items-center text-white px-4 py-2 rounded-md">
                            Connected: {account.slice(0, 6)}...{account.slice(-7)}
                            <button
                                onClick={handleDisconnectWallet}
                                className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                            >
                                <VscDebugDisconnect size={20} />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={handleConnectWallet}
                            className="bg-blue-500 flex text-white px-5 py-3 rounded-md hover:bg-blue-600"
                        >
                            <BsWallet size={20} className="mr-2" />
                            Connect Wallet
                        </button>
                    )}
                </div>
            </nav>
            <div className="bg-white w-full h-0.5"></div>
        </>
    );
}

export default Navbar;