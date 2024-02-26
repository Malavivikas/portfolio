import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, About, Projects, Contact } from "./pages";
const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route
            path="/portfolio/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
