import { useState } from 'react';
import CarrHausnerInput from '../components/Forms/CarrHausnerInput';
import CarrHausnerResults from '../components/Results/CarrHausnerResults';
import {
  calculateCarrIndex,
  calculateHausnerRatio,
} from '../lib/math/carrHausnerCalculation';

export default function CarrHausnerPage() {
  const [inputValues, setInputValues] = useState(null);
  const [carrResult, setCarrResult] = useState(null);
  const [hausnerResult, setHausnerResult] = useState(null);

  const handleCalculate = (volumeBefore, volumeAfter, productWeight) => {
    try {
      const carr = calculateCarrIndex(volumeBefore, volumeAfter);
      const hausner = calculateHausnerRatio(volumeBefore, volumeAfter);

      setInputValues({
        volumeBefore,
        volumeAfter,
        productWeight,
      });
      setCarrResult(carr);
      setHausnerResult(hausner);

      console.log('✓ Carr Index Result:', carr);
      console.log('✓ Hausner Ratio Result:', hausner);
    } catch (error) {
      alert('Calculation Error: ' + error.message);
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-8">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">Carr Index & Hausner Ratio Calculator</h1>
          <p className="text-purple-100">
            Evaluate powder flowability and compressibility characteristics
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Column */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <CarrHausnerInput onCalculate={handleCalculate} />
          </div>

          {/* Results Column */}
          <div>
            {carrResult && hausnerResult && inputValues ? (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <CarrHausnerResults
                  volumeBefore={inputValues.volumeBefore}
                  volumeAfter={inputValues.volumeAfter}
                  productWeight={inputValues.productWeight}
                  carrResult={carrResult}
                  hausnerResult={hausnerResult}
                />
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <p className="text-gray-600 text-lg">
                  👈 Enter the sample volumes and product weight, then click "Calculate" to see results
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* About Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">About This Calculator</h2>
            <p className="text-sm text-gray-700 mb-4">
              This tool calculates the Carr Compressibility Index and Hausner Ratio, two widely used
              parameters for evaluating the flowability and compressibility of powders and granular
              materials.
            </p>
            <p className="text-sm text-gray-700">
              These parameters are essential in pharmaceutical development, powder metallurgy, food
              processing, chemical manufacturing, and material science laboratories.
            </p>
          </div>

          {/* Applications Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Key Applications</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>✓ Pharmaceutical formulation and powder processing</li>
              <li>✓ Powder metallurgy material characterization</li>
              <li>✓ Food and chemical processing quality control</li>
              <li>✓ Material science laboratory testing</li>
              <li>✓ Powder handling and storage optimization</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
