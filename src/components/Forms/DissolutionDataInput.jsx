import { useState } from 'react';

export default function DissolutionDataInput({ onCalculate }) {
  const [timePointsText, setTimePointsText] = useState('15\n30\n45\n60\n90');
  const [referenceText, setReferenceText] = useState('23\n45\n67\n80\n90');
  const [testText, setTestText] = useState('25\n48\n70\n82\n92');
  const [error, setError] = useState(null);

  const parseData = (timeText, dissolutionText) => {
    const timeLines = timeText.trim().split('\n').filter(line => line.trim());
    const dissolutionLines = dissolutionText.trim().split('\n').filter(line => line.trim());

    if (timeLines.length !== dissolutionLines.length) {
      throw new Error(`Time points (${timeLines.length}) and dissolution values (${dissolutionLines.length}) must match`);
    }

    const data = [];
    for (let i = 0; i < timeLines.length; i++) {
      const time = parseFloat(timeLines[i]);
      const dissolution = parseFloat(dissolutionLines[i]);

      if (isNaN(time) || isNaN(dissolution)) {
        throw new Error(`Invalid data at line ${i + 1}`);
      }

      data.push({ time, dissolution });
    }

    data.sort((a, b) => a.time - b.time);
    return data;
  };

  const handleCalculate = () => {
    setError(null);

    if (!timePointsText.trim() || !referenceText.trim() || !testText.trim()) {
      setError('Please enter time points and dissolution values for both products.');
      return;
    }

    try {
      const referenceData = parseData(timePointsText, referenceText);
      const testData = parseData(timePointsText, testText);

      if (referenceData.length === 0) {
        setError('No valid data points found.');
        return;
      }

      // Extract values in order
      const timePoints = referenceData.map(d => d.time);
      const referenceValues = referenceData.map(d => d.dissolution);
      const testValues = testData.map(d => d.dissolution);

      // Call parent with parsed data
      onCalculate(timePoints, [referenceValues], [testValues]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleClear = () => {
    setTimePointsText('');
    setReferenceText('');
    setTestText('');
    setError(null);
  };

  return (
    <>
      {/* Error Container */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-600 rounded">
          <strong className="text-red-700 block mb-1">Error:</strong>
          <span className="text-red-600 text-sm">{error}</span>
        </div>
      )}

      {/* Time Points Input */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 mb-3">
          Time Points (minutes)
        </h3>
        <textarea
          value={timePointsText}
          onChange={(e) => setTimePointsText(e.target.value)}
          placeholder="Enter time points, one per line&#10;Example:&#10;15&#10;30&#10;45&#10;60&#10;90"
          className="w-full p-3 border-2 border-gray-300 rounded-lg font-mono text-sm min-h-[120px] focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition"
        />
        <p className="text-xs text-gray-500 mt-2">One time point per line</p>
      </div>

      {/* Reference Product Input */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 mb-3">
          Reference Product Dissolution (%)
        </h3>
        <textarea
          value={referenceText}
          onChange={(e) => setReferenceText(e.target.value)}
          placeholder="Enter dissolution values, one per line&#10;Example:&#10;23&#10;45&#10;67&#10;80&#10;90"
          className="w-full p-3 border-2 border-gray-300 rounded-lg font-mono text-sm min-h-[120px] focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition"
        />
        <p className="text-xs text-gray-500 mt-2">One value per line (must match number of time points)</p>
      </div>

      {/* Test Product Input */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 mb-3">
          Test Product Dissolution (%)
        </h3>
        <textarea
          value={testText}
          onChange={(e) => setTestText(e.target.value)}
          placeholder="Enter dissolution values, one per line&#10;Example:&#10;25&#10;48&#10;70&#10;82&#10;92"
          className="w-full p-3 border-2 border-gray-300 rounded-lg font-mono text-sm min-h-[120px] focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition"
        />
        <p className="text-xs text-gray-500 mt-2">One value per line (must match number of time points)</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleCalculate}
          className="flex-1 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
        >
          Calculate f2
        </button>
        <button
          onClick={handleClear}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition"
        >
          Clear All
        </button>
      </div>
    </>
  );
}
