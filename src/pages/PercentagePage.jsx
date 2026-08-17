import { useState } from 'react';
import PercentageInput from '../components/Forms/PercentageInput';
import PercentageResults from '../components/Results/PercentageResults';

export default function PercentagePage() {
  const [result, setResult] = useState(null);

  const handleCalculate = (input) => {
    setResult(input);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-3">Percentage Calculator</h1>
          <p className="text-blue-100 text-lg">
            Solve any percent problem with three simple formulas
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Column */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <PercentageInput onCalculate={handleCalculate} />
          </div>

          {/* Results Column */}
          <div>
            {result ? (
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <PercentageResults result={result} />
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center shadow-sm">
                <div className="text-4xl mb-3">👈</div>
                <p className="text-gray-600 text-lg font-semibold">
                  Select a problem type, enter values, and click Calculate
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Examples Section */}
        <section className="mt-12 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 py-12 px-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-2 text-purple-900">Problem Examples</h2>
          <p className="text-purple-700 mb-6">Click Calculate to try these examples with your own numbers</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example 1 */}
            <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500 shadow-sm hover:shadow-md transition">
              <h4 className="font-bold text-blue-700 mb-3 text-lg">Problem 1</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>What is 20% of 150?</strong>
              </p>
              <div className="bg-gray-50 p-3 rounded border border-gray-300 mb-3">
                <p className="text-xs text-gray-600 font-mono mb-1">Formula:</p>
                <p className="font-mono text-sm text-gray-800">(20 ÷ 100) × 150</p>
              </div>
              <p className="text-sm font-bold text-green-600">
                Answer: 30
              </p>
            </div>

            {/* Example 2 */}
            <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500 shadow-sm hover:shadow-md transition">
              <h4 className="font-bold text-blue-700 mb-3 text-lg">Problem 2</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>30 is what % of 150?</strong>
              </p>
              <div className="bg-gray-50 p-3 rounded border border-gray-300 mb-3">
                <p className="text-xs text-gray-600 font-mono mb-1">Formula:</p>
                <p className="font-mono text-sm text-gray-800">(30 ÷ 150) × 100</p>
              </div>
              <p className="text-sm font-bold text-green-600">
                Answer: 20%
              </p>
            </div>

            {/* Example 3 */}
            <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500 shadow-sm hover:shadow-md transition">
              <h4 className="font-bold text-blue-700 mb-3 text-lg">Problem 3</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>30 is 20% of what?</strong>
              </p>
              <div className="bg-gray-50 p-3 rounded border border-gray-300 mb-3">
                <p className="text-xs text-gray-600 font-mono mb-1">Formula:</p>
                <p className="font-mono text-sm text-gray-800">30 ÷ (20 ÷ 100)</p>
              </div>
              <p className="text-sm font-bold text-green-600">
                Answer: 150
              </p>
            </div>
          </div>
        </section>

        {/* Pharmacy Applications */}
        <section className="mt-12 bg-white border border-gray-200 py-12 px-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">🧪 Pharmacy Applications</h2>
          <p className="text-gray-600 mb-6">Use the percentage calculator for these common pharmaceutical tasks</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 mb-2">Solution Concentration</h4>
              <p className="text-sm text-gray-700">
                Calculate how much active ingredient is in a solution. "What is 5% of 500 mL?" helps you find the grams of solute needed.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 mb-2">Assay Calculations</h4>
              <p className="text-sm text-gray-700">
                Determine what percentage one value is of another. "30 is what percent of 150?" = 20% - useful for assay results.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 mb-2">Dilution Preparation</h4>
              <p className="text-sm text-gray-700">
                Find the total volume needed. "30 is 20% of what?" = 150 - helps in serial dilutions and solution preparation.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 mb-2">Dosage Calculations</h4>
              <p className="text-sm text-gray-700">
                Calculate drug amounts in formulations. Useful for compounding and pharmaceutical strength calculations.
              </p>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 py-12 px-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">How to Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-3">1</div>
              <h3 className="font-bold mb-2 text-gray-800">Choose Problem</h3>
              <p className="text-sm text-gray-700">
                Select which problem type matches your calculation
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-3">2</div>
              <h3 className="font-bold mb-2 text-gray-800">Enter Values</h3>
              <p className="text-sm text-gray-700">
                Input your numbers in the fields. Supports positive and negative values
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-3">3</div>
              <h3 className="font-bold mb-2 text-gray-800">Get Result</h3>
              <p className="text-sm text-gray-700">
                Click Calculate and see the formula, result, and interpretation
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm">
          <p>© 2026 Pharma Calculator | Percentage Tool | Free & Open Source</p>
        </div>
      </footer>
    </div>
  );
}
