import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <Navbar />
        </header>
        <main className="content">
          <Routes>
            <Route path="/" element={<Container customClass="customHome"><Home /></Container>} />
            <Route path="/company" element={<Container customClass="customCompany"><Company /></Container>} />
            <Route path="/projects" element={<Container customClass="customProjects"><Projects /></Container>} />
            <Route path="/contact" element={<Container customClass="customContact"><Contact /></Container>} />
            <Route path="/newproject" element={<Container customClass="customNewProject"><NewProject /></Container>} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
