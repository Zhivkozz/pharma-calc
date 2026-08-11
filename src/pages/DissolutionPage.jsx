import { useState } from 'react';
import DissolutionDataInput from '../components/Forms/DissolutionDataInput';
import F2ResultDisplay from '../components/Results/F2ResultDisplay';
import DissolutionPlot from '../components/Charts/DissolutionPlot';
import { calculateF2 } from '../lib/math/f2Calculation';
import { calculateF1 } from '../lib/math/f1Calculation';

export default function DissolutionPage() {
  const [f2Result, setF2Result] = useState(null);
  const [f1Result, setF1Result] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [numDataPoints, setNumDataPoints] = useState(0);

  const handleCalculate = (timePoints, referenceUnits, testUnits) => {
    try {
      // Calculate mean for each time point
      const calculateMean = (values) => {
        return values.reduce((a, b) => a + b, 0) / values.length;
      };

      const refMean = timePoints.map((_, timeIdx) =>
        calculateMean(referenceUnits.map(unit => unit[timeIdx]))
      );

      const testMean = timePoints.map((_, timeIdx) =>
        calculateMean(testUnits.map(unit => unit[timeIdx]))
      );

      // Calculate f1 and f2
      const f2 = calculateF2(refMean, testMean);
      const f1 = calculateF1(refMean, testMean);

      setF2Result(f2);
      setF1Result(f1);
      setNumDataPoints(timePoints.length);
      setChartData({
        timePoints,
        referenceUnits,
        testUnits,
      });

      // Console logging for verification
      console.log('✓ F2 Result:', f2);
      console.log('✓ F1 Result:', f1);
      console.log('Reference Mean:', refMean);
      console.log('Test Mean:', testMean);
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
          <h1 className="text-4xl font-bold mb-2">f2 Similarity Factor Calculator</h1>
          <p className="text-purple-100">Dissolution Profile Comparison for Pharmaceutical Products</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Column */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <DissolutionDataInput onCalculate={handleCalculate} />
          </div>

          {/* Results Column */}
          <div>
            {f2Result && f1Result && chartData ? (
              <div className="space-y-6">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <F2ResultDisplay
                    f2Result={f2Result}
                    f1Result={f1Result}
                    numDataPoints={numDataPoints}
                  />
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <DissolutionPlot
                    timePoints={chartData.timePoints}
                    referenceUnits={chartData.referenceUnits}
                    testUnits={chartData.testUnits}
                  />
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <p className="text-gray-600 text-lg">
                  👈 Enter data and click "Calculate f2" to see results
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
