export default function PercentageResults({ result }) {
  if (!result) {
    return null;
  }

  const getProblemDescription = () => {
    switch (result.type) {
      case 'problem1':
        return `What is ${result.percent}% of ${result.total}?`;
      case 'problem2':
        return `${result.part} is what percent of ${result.total}?`;
      case 'problem3':
        return `${result.part} is ${result.percent}% of what?`;
      default:
        return '';
    }
  };

  const getInterpretation = () => {
    switch (result.type) {
      case 'problem1':
        return `${result.percent}% of ${result.total} equals ${result.answer.toFixed(4)}`;
      case 'problem2':
        return `${result.part} is ${result.answer.toFixed(4)}% of ${result.total}`;
      case 'problem3':
        return `${result.part} is ${result.percent}% of ${result.answer.toFixed(4)}`;
      default:
        return '';
    }
  };

  return (
    <div className="space-y-6">
      {/* Problem Statement */}
      <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-lg">
        <div className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">
          Problem Statement
        </div>
        <div className="text-lg font-bold text-blue-900">
          {getProblemDescription()}
        </div>
      </div>

      {/* Answer Display - Large and Prominent */}
      <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500 rounded-lg">
        <div className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-3">
          Result
        </div>
        <div className="text-5xl font-bold text-green-600 font-mono">
          {result.type === 'problem2'
            ? `${result.answer.toFixed(4)}%`
            : result.answer.toFixed(4)}
        </div>
      </div>

      {/* Formula Section */}
      <div className="p-5 bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-500 rounded-lg">
        <div className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">
          Formula Used
        </div>
        <div className="font-mono text-sm font-semibold text-purple-900 bg-white bg-opacity-70 p-3 rounded-lg border border-purple-300">
          {result.formula}
        </div>
      </div>

      {/* Interpretation */}
      <div className="p-5 bg-gradient-to-br from-amber-50 to-amber-100 border-l-4 border-amber-500 rounded-lg">
        <div className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">
          Interpretation
        </div>
        <div className="text-sm font-semibold text-gray-800">
          {getInterpretation()}
        </div>
      </div>

      {/* Quick Reference Guide */}
      <div className="p-5 bg-gray-50 border border-gray-300 rounded-lg">
        <h4 className="font-bold text-gray-800 mb-4 text-sm">📚 Quick Reference</h4>
        <div className="space-y-3 text-sm">
          <div className="p-3 bg-white rounded-lg border border-gray-200">
            <div className="font-bold text-gray-800 mb-1">Problem 1: What is X% of Y?</div>
            <div className="text-gray-600 text-xs font-mono">(X ÷ 100) × Y</div>
          </div>
          <div className="p-3 bg-white rounded-lg border border-gray-200">
            <div className="font-bold text-gray-800 mb-1">Problem 2: X is what % of Y?</div>
            <div className="text-gray-600 text-xs font-mono">(X ÷ Y) × 100</div>
          </div>
          <div className="p-3 bg-white rounded-lg border border-gray-200">
            <div className="font-bold text-gray-800 mb-1">Problem 3: X is Y% of what?</div>
            <div className="text-gray-600 text-xs font-mono">X ÷ (Y ÷ 100)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
