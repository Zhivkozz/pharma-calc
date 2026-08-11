import { useParams, Link } from 'react-router-dom';
import { getModule } from '../data/modules';

export default function ComingSoonPage() {
  const { moduleId } = useParams();
  const module = getModule(moduleId) || {};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">{module.icon} {module.name}</h1>
          <p className="text-blue-100">{module.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <div className="text-8xl mb-4">🔨</div>
          <h2 className="text-4xl font-bold mb-4">Coming Soon</h2>
          <p className="text-xl text-gray-600 mb-6">
            {module.name} is currently in development
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-8 text-left">
            <p className="font-semibold text-blue-900 mb-4">📅 Phase {module.phase} Release</p>
            <div>
              <p className="text-sm text-gray-700 mb-4">This module will include:</p>
              <ul className="space-y-2">
                {module.features && module.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-500 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Phase Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded">
              <div className="text-2xl font-bold text-blue-600 mb-1">Phase {module.phase}</div>
              <div className="text-sm text-gray-600">Release Phase</div>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <div className="text-2xl font-bold text-green-600 mb-1">{module.category}</div>
              <div className="text-sm text-gray-600">Module Category</div>
            </div>
            <div className="bg-purple-50 p-4 rounded">
              <div className="text-2xl font-bold text-purple-600 mb-1">{module.features?.length || 0}+</div>
              <div className="text-sm text-gray-600">Features Planned</div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <p className="text-gray-700 text-sm">
              Want to help shape this tool? Submit feature requests or contribute on GitHub!
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition"
              >
                ← Back to Home
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded font-semibold transition"
              >
                GitHub →
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Timeline Section */}
      <section className="bg-blue-50 py-12 mt-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Development Roadmap</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-32 pt-1">
                <div className="font-bold text-green-600">✓ Phase 1</div>
                <div className="text-xs text-gray-600">Now</div>
              </div>
              <div className="flex-1 bg-white p-4 rounded border-l-4 border-green-500">
                <p className="font-semibold">Dissolution Analysis (LIVE)</p>
                <p className="text-sm text-gray-600">f1/f2, kinetics modeling, bootstrap analysis</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-32 pt-1">
                <div className="font-bold text-blue-600">Phase 3</div>
                <div className="text-xs text-gray-600">2-3 weeks</div>
              </div>
              <div className="flex-1 bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="font-semibold">Daily Utility Calculators</p>
                <p className="text-sm text-gray-600">Unit converter, dilution, molarity, pH buffer tools</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-32 pt-1">
                <div className="font-bold text-purple-600">Phase 4</div>
                <div className="text-xs text-gray-600">4-6 weeks</div>
              </div>
              <div className="flex-1 bg-white p-4 rounded border-l-4 border-purple-500">
                <p className="font-semibold">Professional QC Modules</p>
                <p className="text-sm text-gray-600">Assay, ICH Q2 validation, statistics suite</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-32 pt-1">
                <div className="font-bold text-orange-600">Phase 5</div>
                <div className="text-xs text-gray-600">User-driven</div>
              </div>
              <div className="flex-1 bg-white p-4 rounded border-l-4 border-orange-500">
                <p className="font-semibold">Specialized Tools</p>
                <p className="text-sm text-gray-600">PK, stability, formulation, HPLC, dosing tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
