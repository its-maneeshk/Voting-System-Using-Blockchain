import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar, Welcome, Footer, About, Vote, Result } from "./components";
import Candidate from "./components/Candidates";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Footer />
      </div>
    ),
  },
  
  {
    path: "/vote",
    element: (
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar/>
          <Vote/>
        </div>
        <Footer/>
      </div>
    ),
  },

  {
    path:"/candidates",
    element: (
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar/>
          <Candidate/>
        </div>
        <Footer/>
      </div>
    ),
  },

  {
    path:"/result",
    element: (
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar/>
          <Result/>
        </div>
        <Footer/>
      </div>
    ),
  },

  {
    path: "/about",
    element: (
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <About />
        </div>
        <Footer />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
