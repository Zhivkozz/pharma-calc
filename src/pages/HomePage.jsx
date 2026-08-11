import { Link } from 'react-router-dom';
import { getModulesByPhase } from '../data/modules';

export default function HomePage() {
  const phase1Modules = getModulesByPhase(1);
  const phase3Modules = getModulesByPhase(3);
  const phase4Modules = getModulesByPhase(4);
  const phase5Modules = getModulesByPhase(5); // eslint-disable-next-line no-unused-vars

  const ModuleCard = ({ module }) => (
    <div className={`p-4 rounded-lg border-l-4 transition hover:shadow-lg ${
      module.status === 'live'
        ? 'bg-green-50 border-green-500 hover:bg-green-100'
        : 'bg-gray-50 border-gray-300 hover:bg-gray-100 opacity-75'
    }`}>
      <div className="flex items-start gap-3">
        <span className="text-3xl">{module.icon}</span>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">{module.name}</h3>
            {module.status === 'live' ? (
              <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                LIVE
              </span>
            ) : (
              <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                Phase {module.phase}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 mt-1">{module.description}</p>
          <ul className="text-xs text-gray-700 mt-2 space-y-1">
            {module.features.map((feature, idx) => (
              <li key={idx}>• {feature}</li>
            ))}
          </ul>
        </div>
      </div>
      {module.status === 'live' && (
        <Link
          to={module.path}
          className="mt-3 inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold text-sm transition"
        >
          Open Calculator →
        </Link>
      )}
    </div>
  );

  const PhaseSection = ({ phase, title, modules: phaseModules }) => (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-6">
        {phase === 1 && '✓ Available now'}
        {phase === 3 && 'Fast utility calculators — launching next'}
        {phase === 4 && 'Professional-grade modules for QC & validation'}
        {phase === 5 && 'Specialized tools based on user demand'}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {phaseModules.map(module => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-3">Welcome to Pharma Calculator</h1>
          <p className="text-xl text-blue-100 mb-6">
            A unified platform for pharmaceutical calculations, dissolution analysis, and QC workflows
          </p>
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="bg-white bg-opacity-10 p-4 rounded">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-blue-100 text-sm">Calculation Tools</div>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded">
              <div className="text-3xl font-bold">FDA/EMA</div>
              <div className="text-blue-100 text-sm">Compliant Methods</div>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded">
              <div className="text-3xl font-bold">Free & Open</div>
              <div className="text-blue-100 text-sm">Modern Web Stack</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Phase 1 - Live */}
        <PhaseSection
          phase={1}
          title="🚀 Phase 1: Flagship Module (Live)"
          modules={phase1Modules}
        />

        <div className="my-8 border-t-2 border-gray-300"></div>

        {/* Phase 3 - Coming Soooon */}
        <PhaseSection
          phase={3}
          title="⚡ Phase 3: Daily Utility Calculators (Coming Soon)"
          modules={phase3Modules}
        />

        <div className="my-8 border-t-2 border-gray-300"></div>

        {/* Phase 4 - Professional */}
        <PhaseSection
          phase={4}
          title="📊 Phase 4: Professional-Grade Modules (Coming Soon)"
          modules={phase4Modules}
        />

        <div className="my-8 border-t-2 border-gray-300"></div>

        {/* Phase 5 - Demand-Driven */}
        <PhaseSection
          phase={5}
          title="🎯 Phase 5: Demand-Driven Tools (Coming Soon)"
          modules={phase5Modules}
        />
      </main>

      {/* Info Section */}
      <section className="bg-blue-50 border-t border-blue-200 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1</div>
              <h3 className="font-bold mb-2">Select a Tool</h3>
              <p className="text-gray-700 text-sm">
                Choose from dissolution analysis, lab utilities, or specialized calculators
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2</div>
              <h3 className="font-bold mb-2">Enter Your Data</h3>
              <p className="text-gray-700 text-sm">
                Input experimental values or load demo datasets for quick testing
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
              <h3 className="font-bold mb-2">Get Results</h3>
              <p className="text-gray-700 text-sm">
                View calculations, charts, and detailed interpretations instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm">
          <p>© 2026 Pharma Calculator | FDA/EMA Compliant Calculations | Free & Open Source</p>
        </div>
      </footer>
    </div>
  );
}
