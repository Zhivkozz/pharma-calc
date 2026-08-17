import { useState } from 'react';

const spinnerStyles = `
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export default function PercentageInput({ onCalculate }) {
  // Problem 1: What is X% of Y?
  const [prob1Percent, setProb1Percent] = useState('');
  const [prob1Total, setProb1Total] = useState('');
  const [prob1Answer, setProb1Answer] = useState(null);

  // Problem 2: X is what percent of Y?
  const [prob2Part, setProb2Part] = useState('');
  const [prob2Total, setProb2Total] = useState('');
  const [prob2Answer, setProb2Answer] = useState(null);

  // Problem 3: X is Y% of what?
  const [prob3Part, setProb3Part] = useState('');
  const [prob3Percent, setProb3Percent] = useState('');
  const [prob3Answer, setProb3Answer] = useState(null);

  const [error, setError] = useState(null);

  const handleProblem1 = () => {
    setError(null);
    try {
      if (prob1Percent === '' || prob1Total === '') {
        setError('Please enter values for Problem 1');
        return;
      }
      const percent = parseFloat(prob1Percent);
      const total = parseFloat(prob1Total);

      if (isNaN(percent) || isNaN(total)) {
        setError('Please enter valid numbers');
        return;
      }

      const answer = (percent / 100) * total;
      setProb1Answer(answer);

      onCalculate({
        type: 'problem1',
        percent,
        total,
        answer,
        formula: `(${percent}% ÷ 100) × ${total}`,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleProblem2 = () => {
    setError(null);
    try {
      if (prob2Part === '' || prob2Total === '') {
        setError('Please enter values for Problem 2');
        return;
      }
      const part = parseFloat(prob2Part);
      const total = parseFloat(prob2Total);

      if (isNaN(part) || isNaN(total)) {
        setError('Please enter valid numbers');
        return;
      }

      if (total === 0) {
        setError('Total cannot be zero');
        return;
      }

      const answer = (part / total) * 100;
      setProb2Answer(answer);

      onCalculate({
        type: 'problem2',
        part,
        total,
        answer,
        formula: `(${part} ÷ ${total}) × 100`,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleProblem3 = () => {
    setError(null);
    try {
      if (prob3Part === '' || prob3Percent === '') {
        setError('Please enter values for Problem 3');
        return;
      }
      const part = parseFloat(prob3Part);
      const percent = parseFloat(prob3Percent);

      if (isNaN(part) || isNaN(percent)) {
        setError('Please enter valid numbers');
        return;
      }

      if (percent === 0) {
        setError('Percent cannot be zero');
        return;
      }

      const answer = (part / percent) * 100;
      setProb3Answer(answer);

      onCalculate({
        type: 'problem3',
        part,
        percent,
        answer,
        formula: `${part} ÷ (${percent} ÷ 100)`,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleClearAll = () => {
    setProb1Percent('');
    setProb1Total('');
    setProb1Answer(null);
    setProb2Part('');
    setProb2Total('');
    setProb2Answer(null);
    setProb3Part('');
    setProb3Percent('');
    setProb3Answer(null);
    setError(null);
  };

  return (
    <>
      <style>{spinnerStyles}</style>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-600 rounded">
          <strong className="text-red-700 block mb-1">Error:</strong>
          <span className="text-red-600 text-sm">{error}</span>
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-purple-700 mb-2">3-Way Percent Calculator</h2>
        <p className="text-sm text-gray-600 mb-2">Find the sentence that represents your problem.</p>
        <p className="text-sm text-gray-600">
          Enter the values and click <span className="font-semibold">Calculate</span>.
        </p>
      </div>

      {/* Problem 1: What is X% of Y? */}
      <div className="mb-6 border-2 border-gray-300 rounded-lg overflow-hidden bg-gradient-to-br from-yellow-50 to-yellow-100">
        <div className="p-5">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-bold text-gray-800">What is</span>
            <input
              type="number"
              value={prob1Percent}
              onChange={(e) => setProb1Percent(e.target.value)}
              placeholder=""
              step="0.01"
              className="w-20 px-3 py-2 border-2 border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition bg-white"
            />
            <span className="font-bold text-gray-800">% of</span>
            <input
              type="number"
              value={prob1Total}
              onChange={(e) => setProb1Total(e.target.value)}
              placeholder=""
              step="0.01"
              className="w-24 px-3 py-2 border-2 border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition bg-white"
            />
            <span className="font-bold text-gray-800">?</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleProblem1}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-5 rounded-lg transition transform hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
            >
              Calculate
            </button>
            <span className="font-bold text-gray-800">Answer:</span>
            <input
              type="text"
              value={prob1Answer !== null ? prob1Answer.toFixed(4) : ''}
              readOnly
              className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg font-mono text-sm bg-white text-gray-700 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Problem 2: X is what percent of Y? */}
      <div className="mb-6 border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
        <div className="p-5">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <input
              type="number"
              value={prob2Part}
              onChange={(e) => setProb2Part(e.target.value)}
              placeholder=""
              step="0.01"
              className="w-20 px-3 py-2 border-2 border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition bg-white"
            />
            <span className="font-bold text-gray-800">is what percent of</span>
            <input
              type="number"
              value={prob2Total}
              onChange={(e) => setProb2Total(e.target.value)}
              placeholder=""
              step="0.01"
              className="w-24 px-3 py-2 border-2 border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition bg-white"
            />
            <span className="font-bold text-gray-800">?</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleProblem2}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-5 rounded-lg transition transform hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
            >
              Calculate
            </button>
            <span className="font-bold text-gray-800">Answer:</span>
            <input
              type="text"
              value={prob2Answer !== null ? prob2Answer.toFixed(4) : ''}
              readOnly
              className="w-24 px-3 py-2 border-2 border-gray-300 rounded-lg font-mono text-sm bg-white text-gray-700 focus:outline-none"
            />
            <span className="font-bold text-gray-800">%</span>
          </div>
        </div>
      </div>

      {/* Problem 3: X is Y% of what? */}
      <div className="mb-6 border-2 border-gray-300 rounded-lg overflow-hidden bg-gradient-to-br from-yellow-50 to-yellow-100">
        <div className="p-5">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <input
              type="number"
              value={prob3Part}
              onChange={(e) => setProb3Part(e.target.value)}
              placeholder=""
              step="0.01"
              className="w-20 px-3 py-2 border-2 border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition bg-white"
            />
            <span className="font-bold text-gray-800">is</span>
            <input
              type="number"
              value={prob3Percent}
              onChange={(e) => setProb3Percent(e.target.value)}
              placeholder=""
              step="0.01"
              className="w-20 px-3 py-2 border-2 border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition bg-white"
            />
            <span className="font-bold text-gray-800">% of what?</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleProblem3}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-5 rounded-lg transition transform hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
            >
              Calculate
            </button>
            <span className="font-bold text-gray-800">Answer:</span>
            <input
              type="text"
              value={prob3Answer !== null ? prob3Answer.toFixed(4) : ''}
              readOnly
              className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg font-mono text-sm bg-white text-gray-700 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Clear All Button */}
      <div className="flex gap-3">
        <button
          onClick={handleClearAll}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition"
        >
          Clear
        </button>
      </div>
    </>
  );
}
