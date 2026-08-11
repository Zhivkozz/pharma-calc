export default function F2ResultDisplay({ f2Result, f1Result, numDataPoints }) {
  if (!f2Result || !f1Result) {
    return null;
  }

  const isSimilar = f2Result.f2 >= 50;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {/* f2 Result Card */}
        <div
          className={`p-5 rounded-lg border-l-4 ${
            isSimilar
              ? 'bg-green-50 border-green-500'
              : 'bg-orange-50 border-orange-500'
          }`}
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
            f2 Similarity Factor
          </div>
          <div
            className={`text-4xl font-bold font-mono ${
              isSimilar ? 'text-green-600' : 'text-orange-600'
            }`}
          >
            {f2Result.f2.toFixed(2)}
          </div>
          <div className={`text-sm mt-2 ${isSimilar ? 'text-green-700' : 'text-orange-700'}`}>
            {isSimilar ? '✓ Similar profiles (f2 ≥ 50)' : '✗ Dissimilar profiles (f2 < 50)'}
          </div>
        </div>

        {/* Data Points Card */}
        <div className="p-5 rounded-lg border-l-4 border-purple-500 bg-purple-50">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
            Data Points Compared
          </div>
          <div className="text-4xl font-bold font-mono text-purple-600">
            {numDataPoints}
          </div>
          <div className="text-sm text-purple-700 mt-2">
            Number of time points used in calculation
          </div>
        </div>
      </div>

      {/* f1 Result Card */}
      <div className="p-5 rounded-lg border-l-4 border-blue-500 bg-blue-50 mb-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
          f1 Difference Factor
        </div>
        <div className="text-4xl font-bold font-mono text-blue-600">
          {f1Result.f1.toFixed(2)}
        </div>
        <div className="text-sm text-blue-700 mt-2">
          {f1Result.passesF1
            ? '✓ Passes criterion (f1 ≤ 15)'
            : '✗ Fails criterion (f1 > 15)'}
        </div>
      </div>

      {/* Summary */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">FDA/EMA Criterion:</span> Both f1 ≤ 15 AND f2 ≥ 50 are required to establish similarity.
          {f2Result.passesF2 && f1Result.passesF1
            ? ' ✓ These profiles meet the similarity criteria.'
            : ' ✗ These profiles do NOT meet the similarity criteria.'}
        </p>
      </div>
    </div>
  );
}
