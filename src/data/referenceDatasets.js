/**
 * Reference dissolution datasets with known f1, f2 values
 * Used for regression testing and manual verification
 */

export const referenceDatasets = [
  {
    name: "FDA Example 1 (Similar Profiles)",
    description: "FDA guidance example - f2 should be ~71.6",
    timePoints: [0, 1, 2, 4, 6, 8, 12],
    reference: [0, 20, 50, 75, 90, 100, 100],
    test: [0, 18, 52, 74, 88, 100, 100],
    expectedF2: 71.6,
    expectedF1: 2.0,
  },
  {
    name: "Similar Profiles (f2 = 65)",
    description: "Generic example - profiles within similarity",
    timePoints: [0, 0.5, 1, 2, 4, 6, 8, 12, 16, 20, 24],
    reference: [0, 10, 25, 45, 65, 80, 90, 100, 100, 100, 100],
    test: [0, 8, 28, 48, 68, 82, 92, 100, 100, 100, 100],
    expectedF2: 65,
    expectedF1: 3.5,
  },
  {
    name: "Dissimilar Profiles (f2 = 35)",
    description: "Profiles that fail f2 criterion",
    timePoints: [0, 1, 2, 4, 6, 8, 12],
    reference: [0, 30, 60, 85, 95, 100, 100],
    test: [0, 5, 20, 50, 75, 90, 100],
    expectedF2: 35,
    expectedF1: 25,
  },
  {
    name: "Identical Profiles",
    description: "Perfectly matched - f2 should be 100",
    timePoints: [0, 1, 2, 4, 6, 12],
    reference: [0, 15, 35, 60, 80, 100],
    test: [0, 15, 35, 60, 80, 100],
    expectedF2: 100,
    expectedF1: 0,
  },
];

export function getTestDataset(name) {
  return referenceDatasets.find(ds => ds.name === name);
}
