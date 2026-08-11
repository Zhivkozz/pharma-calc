/**
 * Carr Index & Hausner Ratio Calculations
 * For evaluating powder flowability and compressibility
 * Based on volume of 100g powder before and after tapping
 */

/**
 * Calculate Carr Compressibility Index from volumes
 * Formula: ((Volume_Before - Volume_After) / Volume_Before) × 100
 * Which is equivalent to: ((Tapped Density - Bulk Density) / Tapped Density) × 100
 * where: Bulk Density = 100g / V_before, Tapped Density = 100g / V_after
 * 
 * @param {number} volumeBefore - Volume of 100g powder before tapping
 * @param {number} volumeAfter - Volume of 100g powder after tapping
 * @returns {object} {carrIndex, classification, color}
 */
export function calculateCarrIndex(volumeBefore, volumeAfter) {
  // Validation
  if (!volumeBefore || !volumeAfter || volumeBefore <= 0 || volumeAfter <= 0) {
    throw new Error('Both volume values must be positive numbers');
  }

  if (volumeAfter > volumeBefore) {
    throw new Error('Volume after tapping cannot be greater than volume before tapping');
  }

  // Calculate Carr Index
  // Carr Index = ((V_before - V_after) / V_before) × 100
  const carrIndex = ((volumeBefore - volumeAfter) / volumeBefore) * 100;

  // Classify flowability
  const classification = classifyCarrIndex(carrIndex);

  return {
    carrIndex: parseFloat(carrIndex.toFixed(2)),
    classification: classification.name,
    flowability: classification.flowability,
    color: classification.color,
  };
}

/**
 * Calculate Hausner Ratio from volumes
 * Formula: Volume_Before / Volume_After
 * Which is equivalent to: Tapped Density / Bulk Density
 * where: Bulk Density = 100g / V_before, Tapped Density = 100g / V_after
 * 
 * @param {number} volumeBefore - Volume of 100g powder before tapping
 * @param {number} volumeAfter - Volume of 100g powder after tapping
 * @returns {object} {hausnerRatio, classification, color}
 */
export function calculateHausnerRatio(volumeBefore, volumeAfter) {
  // Validation
  if (!volumeBefore || !volumeAfter || volumeBefore <= 0 || volumeAfter <= 0) {
    throw new Error('Both volume values must be positive numbers');
  }

  if (volumeAfter > volumeBefore) {
    throw new Error('Volume after tapping cannot be greater than volume before tapping');
  }

  // Calculate Hausner Ratio
  // Hausner Ratio = V_before / V_after
  const hausnerRatio = volumeBefore / volumeAfter;

  // Classify flowability
  const classification = classifyHausnerRatio(hausnerRatio);

  return {
    hausnerRatio: parseFloat(hausnerRatio.toFixed(3)),
    classification: classification.name,
    flowability: classification.flowability,
    color: classification.color,
  };
}

/**
 * Classify flowability based on Carr Index
 * @param {number} carrIndex - Calculated Carr Index value
 * @returns {object} {name, flowability, color}
 */
function classifyCarrIndex(carrIndex) {
  if (carrIndex <= 10) {
    return { name: 'Excellent Flow', flowability: 'Excellent', color: 'green' };
  } else if (carrIndex <= 15) {
    return { name: 'Good Flow', flowability: 'Good', color: 'green' };
  } else if (carrIndex <= 20) {
    return { name: 'Fair Flow', flowability: 'Fair', color: 'yellow' };
  } else if (carrIndex <= 25) {
    return { name: 'Passable Flow', flowability: 'Passable', color: 'yellow' };
  } else if (carrIndex <= 31) {
    return { name: 'Poor Flow', flowability: 'Poor', color: 'orange' };
  } else {
    return { name: 'Very Poor / Very Very Poor Flow', flowability: 'Very Poor', color: 'red' };
  }
}

/**
 * Classify flowability based on Hausner Ratio
 * @param {number} hausnerRatio - Calculated Hausner Ratio value
 * @returns {object} {name, flowability, color}
 */
function classifyHausnerRatio(hausnerRatio) {
  if (hausnerRatio <= 1.11) {
    return { name: 'Excellent Flow', flowability: 'Excellent', color: 'green' };
  } else if (hausnerRatio <= 1.18) {
    return { name: 'Good Flow', flowability: 'Good', color: 'green' };
  } else if (hausnerRatio <= 1.25) {
    return { name: 'Fair Flow', flowability: 'Fair', color: 'yellow' };
  } else if (hausnerRatio <= 1.34) {
    return { name: 'Passable Flow', flowability: 'Passable', color: 'yellow' };
  } else if (hausnerRatio <= 1.45) {
    return { name: 'Poor Flow', flowability: 'Poor', color: 'orange' };
  } else {
    return { name: 'Very Poor / Very Very Poor Flow', flowability: 'Very Poor', color: 'red' };
  }
}

/**
 * Get color class for Tailwind CSS based on color name
 * @param {string} color - Color name (green, yellow, orange, red)
 * @returns {object} {bgColor, borderColor, textColor, badgeColor}
 */
export function getColorClasses(color) {
  const colorMap = {
    green: {
      bgColor: 'bg-green-50',
      borderColor: 'border-green-500',
      textColor: 'text-green-700',
      badgeColor: 'bg-green-100 text-green-800',
      valueColor: 'text-green-600',
    },
    yellow: {
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-500',
      textColor: 'text-yellow-700',
      badgeColor: 'bg-yellow-100 text-yellow-800',
      valueColor: 'text-yellow-600',
    },
    orange: {
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-500',
      textColor: 'text-orange-700',
      badgeColor: 'bg-orange-100 text-orange-800',
      valueColor: 'text-orange-600',
    },
    red: {
      bgColor: 'bg-red-50',
      borderColor: 'border-red-500',
      textColor: 'text-red-700',
      badgeColor: 'bg-red-100 text-red-800',
      valueColor: 'text-red-600',
    },
  };

  return colorMap[color] || colorMap.green;
}

/**
 * Get flowability scale reference
 */
export const flowabilityScale = [
  {
    classification: 'Excellent Flow',
    carrIndexRange: '≤ 10%',
    hausnerRatioRange: '1.00 - 1.11',
    color: 'green',
  },
  {
    classification: 'Good Flow',
    carrIndexRange: '11 - 15%',
    hausnerRatioRange: '1.12 - 1.18',
    color: 'green',
  },
  {
    classification: 'Fair Flow',
    carrIndexRange: '16 - 20%',
    hausnerRatioRange: '1.19 - 1.25',
    color: 'yellow',
  },
  {
    classification: 'Passable Flow',
    carrIndexRange: '21 - 25%',
    hausnerRatioRange: '1.26 - 1.34',
    color: 'yellow',
  },
  {
    classification: 'Poor Flow',
    carrIndexRange: '26 - 31%',
    hausnerRatioRange: '1.35 - 1.45',
    color: 'orange',
  },
  {
    classification: 'Very Poor / Very Very Poor Flow',
    carrIndexRange: '> 32%',
    hausnerRatioRange: '> 1.46',
    color: 'red',
  },
];
