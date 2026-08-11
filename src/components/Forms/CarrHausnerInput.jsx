import { useState } from 'react';

export default function CarrHausnerInput({ onCalculate }) {
  const [volumeBefore, setVolumeBefore] = useState('117.6');
  const [volumeAfter, setVolumeAfter] = useState('100');
  const [productWeight, setProductWeight] = useState('100.0');
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    setError(null);

    if (!volumeBefore || !volumeAfter || !productWeight) {
      setError('Please enter both volume values and the product weight.');
      return;
    }

    const vb = parseFloat(volumeBefore);
    const va = parseFloat(volumeAfter);
    const weight = parseFloat(productWeight);

    if (isNaN(vb) || isNaN(va) || isNaN(weight)) {
      setError('Please enter valid numeric values.');
      return;
    }

    if (vb <= 0 || va <= 0 || weight <= 0) {
      setError('Volume values and product weight must be positive numbers.');
      return;
    }

    if (va > vb) {
      setError('Volume after tapping cannot be greater than volume before tapping.');
      return;
    }

    try {
      onCalculate(vb, va, weight);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleClear = () => {
    setVolumeBefore('');
    setVolumeAfter('');
    setProductWeight('100.0');
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

      {/* Product Weight Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold uppercase tracking-wider text-gray-700 mb-3">
          Weight of the Product
        </label>
        <div className="flex gap-3">
          <input
            type="number"
            value={productWeight}
            onChange={(e) => setProductWeight(e.target.value)}
            placeholder="Enter product weight"
            step="0.1"
            className="flex-1 p-3 border-2 border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition"
          />
          <div className="w-20 p-3 border-2 border-gray-300 rounded-lg font-mono text-sm bg-gray-100 text-gray-500 flex items-center justify-center">
            g
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Default value is 100.0 g for the sample being assessed.
        </p>
      </div>

      {/* Volume Before Tapping Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold uppercase tracking-wider text-gray-700 mb-3">
          Bulk Volume (Before Tapping)
        </label>
        <input
          type="number"
          value={volumeBefore}
          onChange={(e) => setVolumeBefore(e.target.value)}
          placeholder="Enter volume before tapping"
          step="0.1"
          className="w-full p-3 border-2 border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition"
        />
        <p className="text-xs text-gray-500 mt-2">
          Volume occupied by the powder sample before tapping.
        </p>
      </div>

      {/* Volume After Tapping Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold uppercase tracking-wider text-gray-700 mb-3">
          Tapped Volume (After Tapping)
        </label>
        <input
          type="number"
          value={volumeAfter}
          onChange={(e) => setVolumeAfter(e.target.value)}
          placeholder="Enter volume after tapping"
          step="0.1"
          className="w-full p-3 border-2 border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition"
        />
        <p className="text-xs text-gray-500 mt-2">
          Volume occupied by the same powder sample after tapping.
        </p>
      </div>

      {/* Formulas Display */}
      <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
        <p className="text-gray-700 mb-3">
          <span className="font-semibold">Carr Index:</span> ((V<sub>before</sub> - V<sub>after</sub>) / V<sub>before</sub>) × 100
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Hausner Ratio:</span> V<sub>before</sub> / V<sub>after</sub>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleCalculate}
          className="flex-1 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
        >
          Calculate
        </button>
        <button
          onClick={handleClear}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition"
        >
          Clear
        </button>
      </div>
    </>
  );
}
