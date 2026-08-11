/**
 * Module registry for the Pharma Calculator
 * Defines all available and upcoming calculation modules
 */

export const modules = {
  // PHASE 1: FLAGSHIP MODULE (LIVE)
  dissolution: {
    id: 'dissolution',
    name: 'Dissolution Profile Analysis',
    description: 'f1/f2 similarity factors, dissolution curves, release kinetics',
    icon: '📊',
    phase: 1,
    status: 'live',
    path: '/dissolution',
    category: 'Dissolution & Release',
    features: [
      'f1 & f2 calculation',
      'Mean & SD visualization',
      'Release kinetics (zero, first, Higuchi, Korsmeyer-Peppas)',
      'MDT & DE% metrics',
      'Bootstrap analysis',
    ],
  },

  carrHausner: {
    id: 'carrHausner',
    name: 'Carr Index & Hausner Ratio',
    description: 'Powder flowability assessment with Carr Index and Hausner Ratio calculations',
    icon: '🟢',
    phase: 1,
    status: 'live',
    path: '/carr-hausner',
    category: 'Powder & Materials',
    features: [
      'Carr Compressibility Index calculation',
      'Hausner Ratio calculation',
      'Flowability classification',
      'Color-coded results',
      'Flowability scale reference',
    ],
  },

  // PHASE 3: UTILITY CALCULATORS (COMING SOON)
  unitConverter: {
    id: 'unitConverter',
    name: 'Unit Converter',
    description: 'Convert between mg, g, μg, mL, L, °C, °F, etc.',
    icon: '🔄',
    phase: 3,
    status: 'coming',
    path: '/module/unitConverter',
    category: 'Utilities',
    features: [
      'Mass conversions',
      'Volume conversions',
      'Temperature conversions',
      'Pressure conversions',
    ],
  },

  dilution: {
    id: 'dilution',
    name: 'Dilution Calculator',
    description: 'C1V1=C2V2 calculations for solution dilutions',
    icon: '💧',
    phase: 3,
    status: 'coming',
    path: '/module/dilution',
    category: 'Solution & Dilution',
    features: [
      'C1V1=C2V2 solver',
      'Solve for any unknown',
      'Quick dilution reference',
    ],
  },

  serialDilution: {
    id: 'serialDilution',
    name: 'Serial Dilution',
    description: 'Calculate sequential dilution factors and concentrations',
    icon: '🧪',
    phase: 3,
    status: 'coming',
    path: '/module/serialDilution',
    category: 'Solution & Dilution',
    features: [
      'Multi-step dilutions',
      'Dilution factor tracking',
      'Final concentration calculator',
    ],
  },

  percentage: {
    id: 'percentage',
    name: 'Percentage Converter',
    description: '%w/v, %w/w, %v/v conversions and calculations',
    icon: '%',
    phase: 3,
    status: 'coming',
    path: '/module/percentage',
    category: 'Solution & Dilution',
    features: [
      '%w/v ↔ %w/w conversions',
      '%v/v calculations',
      'Density-corrected conversions',
    ],
  },

  molarity: {
    id: 'molarity',
    name: 'Molarity & Osmolarity',
    description: 'Molarity, normality, molality, and osmolarity calculations',
    icon: '⚗️',
    phase: 3,
    status: 'coming',
    path: '/module/molarity',
    category: 'Solution & Dilution',
    features: [
      'Molarity calculator',
      'Normality calculator',
      'Molality calculator',
      'Osmolarity calculator',
    ],
  },

  pH: {
    id: 'pH',
    name: 'pH & Buffer Tools',
    description: 'Henderson-Hasselbalch, buffer preparation, pKa database',
    icon: '🔬',
    phase: 3,
    status: 'coming',
    path: '/module/pH',
    category: 'Buffer & pH',
    features: [
      'pH calculation',
      'Henderson-Hasselbalch',
      'Buffer preparation',
      'pKa database',
    ],
  },

  buffer: {
    id: 'buffer',
    name: 'Buffer Preparation',
    description: 'Calculate buffer recipes for common pharmaceutical buffers',
    icon: '🧫',
    phase: 3,
    status: 'coming',
    path: '/module/buffer',
    category: 'Buffer & pH',
    features: [
      'Acetate buffer',
      'Phosphate buffer',
      'Citrate buffer',
      'Carbonate buffer',
    ],
  },

  // PHASE 4: PROFESSIONAL MODULES (COMING SOON)
  assay: {
    id: 'assay',
    name: 'Assay Calculators',
    description: '% Assay, potency, recovery, content uniformity',
    icon: '📋',
    phase: 4,
    status: 'coming',
    path: '/module/assay',
    category: 'QC & Assay',
    features: [
      '% Assay calculation',
      'Potency correction',
      'Recovery %',
      'Content uniformity',
    ],
  },

  validation: {
    id: 'validation',
    name: 'ICH Q2 Validation',
    description: 'Accuracy, precision, linearity, LOD, LOQ calculations',
    icon: '✅',
    phase: 4,
    status: 'coming',
    path: '/module/validation',
    category: 'Validation & Statistics',
    features: [
      'Accuracy (%Recovery)',
      'Precision (%RSD)',
      'Linearity & regression',
      'LOD & LOQ',
    ],
  },

  statistics: {
    id: 'statistics',
    name: 'Statistics Suite',
    description: 't-test, ANOVA, Grubbs, Dixon Q, Bland-Altman',
    icon: '📈',
    phase: 4,
    status: 'coming',
    path: '/module/statistics',
    category: 'Validation & Statistics',
    features: [
      't-test (paired & unpaired)',
      'ANOVA',
      'Grubbs outlier test',
      'Dixon Q test',
      'Bland-Altman plot',
    ],
  },

  // PHASE 5: DEMAND-DRIVEN (COMING SOON)
  pharmacokinetics: {
    id: 'pharmacokinetics',
    name: 'Pharmacokinetics',
    description: 'Cmax, Tmax, AUC, half-life, clearance, Vd',
    icon: '💊',
    phase: 5,
    status: 'coming',
    path: '/module/pharmacokinetics',
    category: 'Clinical & PK',
    features: [
      'Cmax & Tmax',
      'AUC calculation',
      'Half-life',
      'Clearance',
      'Volume of distribution',
    ],
  },

  stability: {
    id: 'stability',
    name: 'Stability Studies',
    description: 'Shelf-life, Arrhenius, degradation kinetics',
    icon: '⏱️',
    phase: 5,
    status: 'coming',
    path: '/module/stability',
    category: 'Formulation',
    features: [
      'Shelf-life prediction',
      'Arrhenius calculator',
      'Degradation kinetics',
      'Trend analysis',
    ],
  },

  formulation: {
    id: 'formulation',
    name: 'Formulation Calculators',
    description: 'Batch scaling, yield, overages, composition',
    icon: '⚙️',
    phase: 5,
    status: 'coming',
    path: '/module/formulation',
    category: 'Formulation',
    features: [
      'API percentage',
      'Excipient percentages',
      'Batch scaling',
      'Process loss & overages',
    ],
  },

  hplc: {
    id: 'hplc',
    name: 'HPLC/GC Tools',
    description: 'Resolution, tailing factor, capacity factor, system suitability',
    icon: '🔭',
    phase: 5,
    status: 'coming',
    path: '/module/hplc',
    category: 'Analytical',
    features: [
      'Resolution (Rs)',
      'Tailing factor',
      'Capacity factor (k\')',
      'System suitability',
    ],
  },

  molecular: {
    id: 'molecular',
    name: 'Molecular Calculators',
    description: 'Molecular weight, equivalent weight, concentrations',
    icon: '🧬',
    phase: 5,
    status: 'coming',
    path: '/module/molecular',
    category: 'Chemistry',
    features: [
      'Molecular weight',
      'Empirical formula weight',
      'Equivalent weight',
      'Concentration from MW',
    ],
  },

  dosing: {
    id: 'dosing',
    name: 'Dosing Calculators',
    description: 'Pediatric dosing, renal adjustments, infusion rates',
    icon: '💉',
    phase: 5,
    status: 'coming',
    path: '/module/dosing',
    category: 'Clinical & PK',
    features: [
      'Pediatric dosing (mg/kg, BSA)',
      'Renal dose adjustment (CrCl, eGFR)',
      'IV infusion rates',
      'BMI & ideal body weight',
    ],
  },
};

export const categories = [
  'Dissolution & Release',
  'Solution & Dilution',
  'Buffer & pH',
  'QC & Assay',
  'Validation & Statistics',
  'Clinical & PK',
  'Formulation',
  'Analytical',
  'Chemistry',
  'Utilities',
];

export function getModulesByCategory(category) {
  return Object.values(modules).filter(m => m.category === category);
}

export function getModulesByPhase(phase) {
  return Object.values(modules).filter(m => m.phase === phase);
}

export function getModule(id) {
  return modules[id];
}
