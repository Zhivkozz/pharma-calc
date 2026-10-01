import { Link } from 'react-router-dom';
import { getModulesByPhase } from '../data/modules';

export default function HomePage() {
  const phase1Modules = getModulesByPhase(1);
  const phase3Modules = getModulesByPhase(3);
  const phase4Modules = getModulesByPhase(4);
  const phase5Modules = getModulesByPhase(5); // eslint-disable-next-line no-unused-vars

  const ModuleCard = ({ module }) => (
    <div className={`p-5 rounded-xl border bg-white transition ${
      module.status === 'live'
        ? 'border-slate-200 hover:border-sky-300 hover:shadow-md'
        : 'border-slate-200 opacity-60'
    }`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl">{module.icon}</span>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-base text-slate-800">{module.name}</h3>
            {module.status === 'live' ? (
              <span className="bg-sky-100 text-sky-700 text-xs px-2.5 py-1 rounded-full font-medium">
                Live
              </span>
            ) : (
              <span className="bg-slate-100 text-slate-500 text-xs px-2.5 py-1 rounded-full font-medium">
                Phase {module.phase}
              </span>
            )}
          </div>
          <p className="text-sm text-slate-500 mt-1">{module.description}</p>
          <ul className="text-xs text-slate-500 mt-3 space-y-1">
            {module.features.map((feature, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-sky-400">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {module.status === 'live' && (
        <Link
          to={module.path}
          className="mt-4 inline-block bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition"
        >
          Open Calculator →
        </Link>
      )}
    </div>
  );

  const PhaseSection = ({ phase, title, modules: phaseModules }) => (
    <section className="mb-14">
      <h2 className="text-2xl font-semibold mb-1 text-slate-800">{title}</h2>
      <p className="text-slate-500 mb-6 text-sm">
        {phase === 1 && 'Available now'}
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
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-3 text-slate-800">Pharma Calculator</h1>
          <p className="text-lg text-slate-500 mb-8 max-w-2xl">
            A unified platform for pharmaceutical calculations, dissolution analysis, and QC workflows
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-sky-50 p-4 rounded-xl">
              <div className="text-2xl font-bold text-sky-600">15+</div>
              <div className="text-slate-500 text-sm">Calculation Tools</div>
            </div>
            <div className="bg-sky-50 p-4 rounded-xl">
              <div className="text-2xl font-bold text-sky-600">FDA/EMA</div>
              <div className="text-slate-500 text-sm">Compliant Methods</div>
            </div>
            <div className="bg-sky-50 p-4 rounded-xl">
              <div className="text-2xl font-bold text-sky-600">Free</div>
              <div className="text-slate-500 text-sm">Modern Web Stack</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-14">
        {/* Phase 1 - Live */}
        <PhaseSection
          phase={1}
          title="Phase 1: Flagship Module"
          modules={phase1Modules}
        />

        <div className="my-10 border-t border-slate-200"></div>

        {/* Phase 3 - Coming Soon */}
        <PhaseSection
          phase={3}
          title="Phase 3: Daily Utility Calculators"
          modules={phase3Modules}
        />

        <div className="my-10 border-t border-slate-200"></div>

        {/* Phase 4 - Professional */}
        <PhaseSection
          phase={4}
          title="Phase 4: Professional-Grade Modules"
          modules={phase4Modules}
        />

        <div className="my-10 border-t border-slate-200"></div>

        {/* Phase 5 - Demand-Driven */}
        <PhaseSection
          phase={5}
          title="Phase 5: Demand-Driven Tools"
          modules={phase5Modules}
        />
      </main>

      {/* Info Section */}
      <section className="bg-sky-50 border-t border-slate-200 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8 text-slate-800">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-sky-500 text-white font-semibold mb-3">1</div>
              <h3 className="font-semibold mb-1 text-slate-800">Select a Tool</h3>
              <p className="text-slate-500 text-sm">
                Choose from dissolution analysis, lab utilities, or specialized calculators
              </p>
            </div>
            <div>
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-sky-500 text-white font-semibold mb-3">2</div>
              <h3 className="font-semibold mb-1 text-slate-800">Enter Your Data</h3>
              <p className="text-slate-500 text-sm">
                Input experimental values or load demo datasets for quick testing
              </p>
            </div>
            <div>
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-sky-500 text-white font-semibold mb-3">3</div>
              <h3 className="font-semibold mb-1 text-slate-800">Get Results</h3>
              <p className="text-slate-500 text-sm">
                View calculations, charts, and detailed interpretations instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-400">
          <p>© 2026 Pharma Calculator · FDA/EMA Compliant Calculations · Free</p>
        </div>
      </footer>
    </div>
  );
}
