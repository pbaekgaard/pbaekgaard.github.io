import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Placeholder from './Pages/Placeholder';
import Projects from './Pages/Projects'
function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <nav className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-gray-800">My Portfolio</Link>
          <ul className="flex">
            <li className="mr-6">
              <Link to="/page1" className="text-gray-600 hover:text-gray-800">Page 1</Link>
            </li>
            <li className="mr-6">
              <Link to="/page2" className="text-gray-600 hover:text-gray-800">Page 2</Link>
            </li>
            <li className="mr-6">
              <Link to="/projects" className="text-gray-600 hover:text-gray-800">Projects</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/page2' element={<Placeholder />} />
          <Route path="/page2" element={<Placeholder />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
