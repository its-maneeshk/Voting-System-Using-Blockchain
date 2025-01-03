import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="text-white py-20 text-center my-5">
                <h1 className="text-4xl font-bold my-8">Welcome to Blockchain Voting Platform</h1>
                <p className="text-lg mb-6">
                    Secure, transparent, and tamper-proof voting for a trustworthy electoral process.
                </p>
                <button className="bg-white text-blue-500 px-6 py-3 font-bold rounded-md hover:bg-gray-200">
                    {/* Get Started */}
                    <Link to="/vote">Get Started</Link>
                </button>
            </section>

            {/* How It Works Section */}
            <section className="py-6 px-4 my-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-5 shadow-md rounded-lg text-center blue-glassmorphism text-gray-200">
                        <h3 className="text-xl font-bold mb-2">1. Register</h3>
                        <p>
                            Sign up using your unique ID and verify your identity to access the platform.
                        </p>
                    </div>
                    <div className="p-5 shadow-md rounded-lg text-center blue-glassmorphism text-gray-200">
                        <h3 className="text-xl font-bold mb-2">2. Cast Your Vote</h3>
                        <p>
                            Choose your preferred candidate securely and submit your vote with confidence.
                        </p>
                    </div>
                    <div className="p-5 shadow-md rounded-lg text-center blue-glassmorphism text-gray-200">
                        <h3 className="text-xl font-bold mb-2">3. Verify Results</h3>
                        <p>
                            Track and verify results in real-time with our transparent system.
                        </p>
                    </div>
                </div>
            </section>


            {/* Statistics Section */}
            <section className="py-16 px-4 bg-gray-200 text-center">
                <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-4xl font-bold text-blue-500">10,000+</h3>
                        <p>Registered Voters</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-blue-500">50+</h3>
                        <p>Successful Elections</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-blue-500">1M+</h3>
                        <p>Votes Cast</p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 text-center">
                <h2 className="text-3xl text-white font-bold mb-8">Why Choose Our Platform?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-4 blue-glassmorphism text-gray-300 shadow-md rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Secure & Decentralized</h3>
                        <p>
                            Blockchain technology ensures that all votes are recorded securely and cannot be tampered with.
                        </p>
                    </div>
                    <div className="p-4 blue-glassmorphism text-gray-300 shadow-md rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Transparent Process</h3>
                        <p>
                            Every vote is publicly verifiable, ensuring complete transparency in the voting process.
                        </p>
                    </div>
                    <div className="p-4 blue-glassmorphism text-gray-300 shadow-md rounded-lg">
                        <h3 className="text-xl font-bold mb-2">User-Friendly</h3>
                        <p>
                            Simple and intuitive interface for voters, making the process hassle-free.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Welcome;