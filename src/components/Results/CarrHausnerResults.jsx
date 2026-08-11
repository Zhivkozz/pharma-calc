import { getColorClasses, flowabilityScale } from '../../lib/math/carrHausnerCalculation';

export default function CarrHausnerResults({
  volumeBefore,
  volumeAfter,
  productWeight,
  carrResult,
  hausnerResult,
}) {
  if (!carrResult || !hausnerResult) {
    return null;
  }

  const getEmoji = (color) => {
    switch (color) {
      case 'green':
        return '🟢';
      case 'yellow':
        return '🟡';
      case 'orange':
        return '🟠';
      case 'red':
        return '🔴';
      default:
        return '•';
    }
  };

  return (
    <div>
      {/* Input Values Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
            Product Weight
          </div>
          <div className="text-2xl font-bold text-gray-800">
            {productWeight} <span className="text-sm font-normal text-gray-500">g</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Sample mass used</p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
            Bulk Volume
          </div>
          <div className="text-2xl font-bold text-gray-800">
            {volumeBefore}
          </div>
          <p className="text-xs text-gray-500 mt-1">Before tapping</p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
            Tapped Volume
          </div>
          <div className="text-2xl font-bold text-gray-800">
            {volumeAfter}
          </div>
          <p className="text-xs text-gray-500 mt-1">After tapping</p>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 gap-5 mb-8">
        {/* Carr Index Card */}
        <div
          className={`p-5 rounded-lg border-l-4 ${getColorClasses(carrResult.color).bgColor} ${
            getColorClasses(carrResult.color).borderColor
          }`}
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Carr Compressibility Index
              </div>
              <div className={`text-4xl font-bold font-mono ${getColorClasses(carrResult.color).valueColor}`}>
                {carrResult.carrIndex}%
              </div>
            </div>
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
              getColorClasses(carrResult.color).badgeColor
            }`}>
              {getEmoji(carrResult.color)} {carrResult.classification}
            </div>
          </div>
          <p className={`text-sm ${getColorClasses(carrResult.color).textColor}`}>
            Formula: ((Tapped - Bulk) / Tapped) × 100
          </p>
        </div>

        {/* Hausner Ratio Card */}
        <div
          className={`p-5 rounded-lg border-l-4 ${getColorClasses(hausnerResult.color).bgColor} ${
            getColorClasses(hausnerResult.color).borderColor
          }`}
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Hausner Ratio
              </div>
              <div className={`text-4xl font-bold font-mono ${getColorClasses(hausnerResult.color).valueColor}`}>
                {hausnerResult.hausnerRatio}
              </div>
            </div>
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
              getColorClasses(hausnerResult.color).badgeColor
            }`}>
              {getEmoji(hausnerResult.color)} {hausnerResult.classification}
            </div>
          </div>
          <p className={`text-sm ${getColorClasses(hausnerResult.color).textColor}`}>
            Formula: Tapped / Bulk
          </p>
        </div>
      </div>

      {/* Flowability Scale Reference */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 mb-3">
          Flowability Classification Scale
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border border-gray-300 text-left font-semibold text-gray-700">
                  Classification
                </th>
                <th className="p-3 border border-gray-300 text-left font-semibold text-gray-700">
                  Carr Index
                </th>
                <th className="p-3 border border-gray-300 text-left font-semibold text-gray-700">
                  Hausner Ratio
                </th>
              </tr>
            </thead>
            <tbody>
              {flowabilityScale.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-3 border border-gray-300 font-semibold">
                    <span className="mr-2">{getEmoji(row.color)}</span>
                    {row.classification}
                  </td>
                  <td className="p-3 border border-gray-300">{row.carrIndexRange}</td>
                  <td className="p-3 border border-gray-300">{row.hausnerRatioRange}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interpretation */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Interpretation:</span> Both Carr Index and Hausner Ratio
          assess powder flowability. Lower Carr Index and Hausner Ratio values indicate better flow
          characteristics. These parameters are critical in pharmaceutical formulation, powder metallurgy,
          and food processing.
        </p>
      </div>
    </div>
  );
}
