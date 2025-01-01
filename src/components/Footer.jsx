import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-white w-full h-0.5"></div>
      <footer className="gradient-bg-footer text-white py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="pl-10 flex flex-col items-center md:items-start">
            <img src={logo} alt="logo" className="w-32 mb-4" />
            <p className="text-center md:text-left text-gray-400">
              A secure, transparent, and decentralized blockchain-based voting platform designed for fair and trustworthy elections.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/vote" className="hover:text-gray-300">Vote</a></li>
              <li><a href="/candidates" className="hover:text-gray-300">Candidates</a></li>
              <li><a href="/about" className="hover:text-gray-300">About</a></li>
              <li><a href="/faq" className="hover:text-gray-300">FAQs</a></li>
              <li><a href="/privacy" className="hover:text-gray-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: support@votingplatform.com</p>
            <p className="text-gray-400">Phone: +1-234-567-890</p>
            <p className="text-gray-400">Address: 123 Blockchain Lane, Crypto City</p>
          </div>
        </div>

        {/* Newsletter and Acknowledgment */}
        <div className="container mx-auto px-4 mt-8 text-center">
          <h3 className="text-lg font-bold text-white mb-4">Subscribe to Updates</h3>
          <div className="flex justify-center items-center space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 text-center rounded-md text-gray-700 focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 mt-4">
            Built with ❤️ for Hackathons. Powered by Blockchain Technology.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-500">
          © {new Date().getFullYear()} - Blockchain Voting Platform. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
