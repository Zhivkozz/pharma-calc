import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition">
            <span className="text-3xl">🧪</span>
            <div>
              <h1 className="text-2xl font-bold">Pharma Calculator</h1>
              <p className="text-blue-100 text-xs">Dissolution Analysis & Lab Tools</p>
            </div>
          </Link>
          <nav className="flex gap-6">
            <Link
              to="/"
              className="hover:text-blue-200 transition font-semibold text-sm"
            >
              Home
            </Link>
            <Link
              to="/dissolution"
              className="hover:text-blue-200 transition font-semibold text-sm"
            >
              f2 Dissolution
            </Link>
            <Link
              to="/carr-hausner"
              className="hover:text-blue-200 transition font-semibold text-sm"
            >
              Powder Flow
            </Link>
            <Link
              to="/contributors"
              className="hover:text-blue-200 transition font-semibold text-sm"
            >
              Contributors
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-200 transition font-semibold text-sm"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
