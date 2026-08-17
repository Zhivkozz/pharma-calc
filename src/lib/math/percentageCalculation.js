/**
 * Percentage Calculations for Pharmaceutical Solutions
 * Supports %w/v, %w/w, %v/v conversions and calculations
 */

/**
 * Calculate %w/v (weight/volume percentage)
 * %w/v = (grams of solute / mL of solution) × 100
 * 
 * @param {number} gramsOfSolute - Grams of solute (drug/ingredient)
 * @param {number} volumeOfSolution - Volume of solution in mL
 * @returns {object} {percentage, formula}
 */
export function calculateWeightVolume(gramsOfSolute, volumeOfSolution) {
  if (!gramsOfSolute || !volumeOfSolution || gramsOfSolute < 0 || volumeOfSolution <= 0) {
    throw new Error('Weight must be ≥ 0 and volume must be > 0');
  }

  const percentage = (gramsOfSolute / volumeOfSolution) * 100;

  return {
    percentage: parseFloat(percentage.toFixed(4)),
    formula: `(${gramsOfSolute}g ÷ ${volumeOfSolution}mL) × 100`,
    interpretation: `${gramsOfSolute}g of substance in ${volumeOfSolution}mL solution`,
  };
}

/**
 * Calculate %w/w (weight/weight percentage)
 * %w/w = (grams of solute / grams of solution) × 100
 * 
 * @param {number} gramsOfSolute - Grams of solute (drug/ingredient)
 * @param {number} gramsOfSolution - Grams of total solution
 * @returns {object} {percentage, formula}
 */
export function calculateWeightWeight(gramsOfSolute, gramsOfSolution) {
  if (!gramsOfSolute || !gramsOfSolution || gramsOfSolute < 0 || gramsOfSolution <= 0) {
    throw new Error('Weight must be ≥ 0 and solution weight must be > 0');
  }

  if (gramsOfSolute > gramsOfSolution) {
    throw new Error('Solute weight cannot exceed solution weight');
  }

  const percentage = (gramsOfSolute / gramsOfSolution) * 100;

  return {
    percentage: parseFloat(percentage.toFixed(4)),
    formula: `(${gramsOfSolute}g ÷ ${gramsOfSolution}g) × 100`,
    interpretation: `${gramsOfSolute}g of substance per ${gramsOfSolution}g solution`,
  };
}

/**
 * Calculate %v/v (volume/volume percentage)
 * %v/v = (mL of solute / mL of solution) × 100
 * 
 * @param {number} volumeOfSolute - Volume of solute in mL
 * @param {number} volumeOfSolution - Volume of total solution in mL
 * @returns {object} {percentage, formula}
 */
export function calculateVolumeVolume(volumeOfSolute, volumeOfSolution) {
  if (!volumeOfSolute || !volumeOfSolution || volumeOfSolute < 0 || volumeOfSolution <= 0) {
    throw new Error('Volume must be ≥ 0 and solution volume must be > 0');
  }

  if (volumeOfSolute > volumeOfSolution) {
    throw new Error('Solute volume cannot exceed solution volume');
  }

  const percentage = (volumeOfSolute / volumeOfSolution) * 100;

  return {
    percentage: parseFloat(percentage.toFixed(4)),
    formula: `(${volumeOfSolute}mL ÷ ${volumeOfSolution}mL) × 100`,
    interpretation: `${volumeOfSolute}mL of substance per ${volumeOfSolution}mL solution`,
  };
}

/**
 * Solve for missing variable in %w/v equation
 * Formula: %w/v = (grams / volume) × 100
 * Rearranged: grams = (%w/v × volume) / 100
 *             volume = (grams × 100) / %w/v
 * 
 * @param {object} inputs - {percentage, grams, volume}
 * @returns {object} Results with solved value
 */
export function solveWeightVolume(inputs) {
  const { percentage, grams, volume } = inputs;

  // Check that exactly two values are provided
  const providedCount = [percentage, grams, volume].filter(v => v !== null && v !== undefined && v !== '').length;
  
  if (providedCount !== 2) {
    throw new Error('Please provide exactly 2 of 3 values (%w/v, grams, volume)');
  }

  if (percentage === null || percentage === undefined || percentage === '') {
    // Solve for %w/v
    const calc = (grams / volume) * 100;
    return {
      percentage: parseFloat(calc.toFixed(4)),
      grams: parseFloat(grams),
      volume: parseFloat(volume),
      solved: 'percentage',
      formula: `%w/v = (${grams}g ÷ ${volume}mL) × 100`,
    };
  } else if (grams === null || grams === undefined || grams === '') {
    // Solve for grams
    const calc = (percentage * volume) / 100;
    return {
      percentage: parseFloat(percentage),
      grams: parseFloat(calc.toFixed(4)),
      volume: parseFloat(volume),
      solved: 'grams',
      formula: `Grams = (${percentage} × ${volume}mL) ÷ 100`,
    };
  } else {
    // Solve for volume
    const calc = (grams * 100) / percentage;
    return {
      percentage: parseFloat(percentage),
      grams: parseFloat(grams),
      volume: parseFloat(calc.toFixed(4)),
      solved: 'volume',
      formula: `Volume = (${grams}g × 100) ÷ ${percentage}`,
    };
  }
}

/**
 * Solve for missing variable in %w/w equation
 * @param {object} inputs - {percentage, gramsOfSolute, gramsOfSolution}
 * @returns {object} Results with solved value
 */
export function solveWeightWeight(inputs) {
  const { percentage, gramsOfSolute, gramsOfSolution } = inputs;

  const providedCount = [percentage, gramsOfSolute, gramsOfSolution].filter(v => v !== null && v !== undefined && v !== '').length;
  
  if (providedCount !== 2) {
    throw new Error('Please provide exactly 2 of 3 values (%w/w, grams solute, grams solution)');
  }

  if (percentage === null || percentage === undefined || percentage === '') {
    const calc = (gramsOfSolute / gramsOfSolution) * 100;
    return {
      percentage: parseFloat(calc.toFixed(4)),
      gramsOfSolute: parseFloat(gramsOfSolute),
      gramsOfSolution: parseFloat(gramsOfSolution),
      solved: 'percentage',
      formula: `%w/w = (${gramsOfSolute}g ÷ ${gramsOfSolution}g) × 100`,
    };
  } else if (gramsOfSolute === null || gramsOfSolute === undefined || gramsOfSolute === '') {
    const calc = (percentage * gramsOfSolution) / 100;
    return {
      percentage: parseFloat(percentage),
      gramsOfSolute: parseFloat(calc.toFixed(4)),
      gramsOfSolution: parseFloat(gramsOfSolution),
      solved: 'gramsOfSolute',
      formula: `Grams Solute = (${percentage} × ${gramsOfSolution}g) ÷ 100`,
    };
  } else {
    const calc = (gramsOfSolute * 100) / percentage;
    return {
      percentage: parseFloat(percentage),
      gramsOfSolute: parseFloat(gramsOfSolute),
      gramsOfSolution: parseFloat(calc.toFixed(4)),
      solved: 'gramsOfSolution',
      formula: `Grams Solution = (${gramsOfSolute}g × 100) ÷ ${percentage}`,
    };
  }
}

/**
 * Solve for missing variable in %v/v equation
 * @param {object} inputs - {percentage, volumeOfSolute, volumeOfSolution}
 * @returns {object} Results with solved value
 */
export function solveVolumeVolume(inputs) {
  const { percentage, volumeOfSolute, volumeOfSolution } = inputs;

  const providedCount = [percentage, volumeOfSolute, volumeOfSolution].filter(v => v !== null && v !== undefined && v !== '').length;
  
  if (providedCount !== 2) {
    throw new Error('Please provide exactly 2 of 3 values (%v/v, volume solute, volume solution)');
  }

  if (percentage === null || percentage === undefined || percentage === '') {
    const calc = (volumeOfSolute / volumeOfSolution) * 100;
    return {
      percentage: parseFloat(calc.toFixed(4)),
      volumeOfSolute: parseFloat(volumeOfSolute),
      volumeOfSolution: parseFloat(volumeOfSolution),
      solved: 'percentage',
      formula: `%v/v = (${volumeOfSolute}mL ÷ ${volumeOfSolution}mL) × 100`,
    };
  } else if (volumeOfSolute === null || volumeOfSolute === undefined || volumeOfSolute === '') {
    const calc = (percentage * volumeOfSolution) / 100;
    return {
      percentage: parseFloat(percentage),
      volumeOfSolute: parseFloat(calc.toFixed(4)),
      volumeOfSolution: parseFloat(volumeOfSolution),
      solved: 'volumeOfSolute',
      formula: `Volume Solute = (${percentage} × ${volumeOfSolution}mL) ÷ 100`,
    };
  } else {
    const calc = (volumeOfSolute * 100) / percentage;
    return {
      percentage: parseFloat(percentage),
      volumeOfSolute: parseFloat(volumeOfSolute),
      volumeOfSolution: parseFloat(calc.toFixed(4)),
      solved: 'volumeOfSolution',
      formula: `Volume Solution = (${volumeOfSolute}mL × 100) ÷ ${percentage}`,
    };
  }
}

/**
 * Convert %w/v to %w/w given density
 * %w/w = (%w/v × 10) / density
 * Assumes: density in g/mL, %w/v is percent
 */
export function convertWeightVolumeToWeightWeight(percentWV, densityOfSolution) {
  if (!percentWV || !densityOfSolution || percentWV < 0 || densityOfSolution <= 0) {
    throw new Error('Percentage and density must be positive');
  }

  const percentWW = (percentWV * 10) / densityOfSolution;

  return {
    percentWW: parseFloat(percentWW.toFixed(4)),
    percentWV: parseFloat(percentWV),
    density: parseFloat(densityOfSolution),
    formula: `%w/w = (${percentWV} × 10) ÷ ${densityOfSolution}`,
    note: 'Formula assumes density in g/mL',
  };
}

/**
 * Convert %w/w to %w/v given density
 * %w/v = (%w/w × density) / 10
 */
export function convertWeightWeightToWeightVolume(percentWW, densityOfSolution) {
  if (!percentWW || !densityOfSolution || percentWW < 0 || densityOfSolution <= 0) {
    throw new Error('Percentage and density must be positive');
  }

  const percentWV = (percentWW * densityOfSolution) / 10;

  return {
    percentWV: parseFloat(percentWV.toFixed(4)),
    percentWW: parseFloat(percentWW),
    density: parseFloat(densityOfSolution),
    formula: `%w/v = (${percentWW} × ${densityOfSolution}) ÷ 10`,
    note: 'Formula assumes density in g/mL',
  };
}
