import React from "react";

const About = () => {
    return (
        <div className="min-h-screen p-6">
            <div className="max-w-4xl mx-auto white-glassmorphism shadow-lg rounded-lg p-6">
                <h1 className="text-4xl font-bold text-white text-center mb-6">
                    About Our Voting Platform
                </h1>
                <p className="text-lg text-gray-300 mb-4">
                    Welcome to our decentralized voting platform, designed to make elections more secure, transparent, and efficient. Using blockchain technology, we aim to eliminate fraud, ensure transparency, and give everyone a fair chance to vote.
                </p>
                <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
                    Key Features:
                </h2>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                    <li>Decentralized and tamper-proof voting system.</li>
                    <li>Secure voter registration and identity verification.</li>
                    <li>Real-time vote counting and transparency.</li>
                    <li>User-friendly interface for seamless voting.</li>
                </ul>
                <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
                    Our Mission:
                </h2>
                <p className="text-lg text-gray-300 mb-4">
                    Our mission is to bring trust and efficiency to the voting process by leveraging blockchain technology. We believe in empowering communities with a system that guarantees integrity, accessibility, and security for all voters.
                </p>
                <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
                    Why Blockchain?
                </h2>
                <p className="text-lg text-gray-300 mb-4">
                    Blockchain technology ensures that every vote is recorded in a secure, immutable ledger. This eliminates the possibility of tampering, making the voting process more reliable and transparent.
                </p>
                <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
                    Get Involved:
                </h2>
                <p className="text-lg text-gray-300 mb-4">
                    Whether you're a voter, a candidate, or a developer, you can contribute to improving the voting process. Contact us to learn more or get started.
                </p>
            </div>
        </div>
    );
};

export default About;
