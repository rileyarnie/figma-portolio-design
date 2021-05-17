import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Works from "./pages/Works";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="grid grid-cols-1">
      <Navbar />
      <Home />
      <Blogs />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
