/**
 * Calculate f1 (difference factor) between reference and test dissolution profiles
 * 
 * Formula: f1 = {Σ|Rt - Tt|} / {Σ Rt} × 100
 * 
 * where:
 *   Rt = mean % dissolved at time t (reference)
 *   Tt = mean % dissolved at time t (test)
 *   f1 ≤ 15 indicates similar profiles (typically)
 * 
 * @param {number[]} referenceData - Reference profile (% dissolved per time point)
 * @param {number[]} testData - Test profile (% dissolved per time point)
 * @returns {object} { f1: number, passesF1: boolean, message: string }
 */
export function calculateF1(referenceData, testData) {
  if (referenceData.length !== testData.length) {
    throw new Error('Reference and test data must have the same number of time points');
  }
  
  if (referenceData.length === 0) {
    throw new Error('Data arrays cannot be empty');
  }
  
  // Calculate sum of absolute differences
  let sumAbsDiff = 0;
  for (let i = 0; i < referenceData.length; i++) {
    sumAbsDiff += Math.abs(referenceData[i] - testData[i]);
  }
  
  // Calculate sum of reference values
  let sumRef = 0;
  for (let i = 0; i < referenceData.length; i++) {
    sumRef += referenceData[i];
  }
  
  if (sumRef === 0) {
    throw new Error('Sum of reference values cannot be zero');
  }
  
  const f1 = (sumAbsDiff / sumRef) * 100;
  
  const passesF1 = f1 <= 15;
  const message = passesF1 
    ? `✓ Profiles are similar (f1 = ${f1.toFixed(2)})` 
    : `✗ Profiles are NOT similar (f1 = ${f1.toFixed(2)})`;
  
  return { 
    f1: parseFloat(f1.toFixed(2)), 
    passesF1, 
    message 
  };
}
