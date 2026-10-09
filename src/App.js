import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Navigation/Header';
import HomePage from './pages/HomePage';
import DissolutionPage from './pages/DissolutionPage';
import CarrHausnerPage from './pages/CarrHausnerPage';
import PercentagePage from './pages/PercentagePage';
import ComingSoonPage from './pages/ComingSoonPage';
import ContributorsPage from './pages/ContributorsPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL || '/'}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dissolution" element={<DissolutionPage />} />
          <Route path="/carr-hausner" element={<CarrHausnerPage />} />
          <Route path="/percentage" element={<PercentagePage />} />
          <Route path="/contributors" element={<ContributorsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/module/:moduleId" element={<ComingSoonPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
