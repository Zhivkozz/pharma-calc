/**
 * Calculate f2 (similarity factor) between reference and test dissolution profiles
 * 
 * Formula: f2 = 50 × log{[1 + (1/n)×Σ(Rt - Tt)²]^-0.5 × 100}
 * 
 * where:
 *   n = number of time points
 *   Rt = mean % dissolved at time t (reference)
 *   Tt = mean % dissolved at time t (test)
 *   f2 ≥ 50 and ≤ 100 indicates similar profiles
 * 
 * @param {number[]} referenceData - Reference profile (% dissolved per time point)
 * @param {number[]} testData - Test profile (% dissolved per time point)
 * @returns {object} { f2: number, passesF2: boolean, message: string }
 */
export function calculateF2(referenceData, testData) {
  if (referenceData.length !== testData.length) {
    throw new Error('Reference and test data must have the same number of time points');
  }
  
  if (referenceData.length === 0) {
    throw new Error('Data arrays cannot be empty');
  }
  
  // Calculate sum of squared differences
  let sumSquaredDiff = 0;
  for (let i = 0; i < referenceData.length; i++) {
    const diff = referenceData[i] - testData[i];
    sumSquaredDiff += diff * diff;
  }
  
  const n = referenceData.length;
  const numerator = 1 + (1 / n) * sumSquaredDiff;
  const f2 = 50 * Math.log10(Math.pow(numerator, -0.5) * 100);
  
  const passesF2 = f2 >= 50 && f2 <= 100;
  const message = passesF2 
    ? `✓ Profiles are similar (f2 = ${f2.toFixed(2)})` 
    : `✗ Profiles are NOT similar (f2 = ${f2.toFixed(2)})`;
  
  return { 
    f2: parseFloat(f2.toFixed(2)), 
    passesF2, 
    message 
  };
}
