# Pharma Calculator Roadmap

Pharma Calculator becomes a free web tool that pharmacy students use to learn calculations and that industry staff (QC, formulation, R&D) trust for day-to-day numbers. The work runs in six phases: fix the foundation, finish what exists, then add student, industry, learning and clinical features in that order.

## Principles

- **Correct before new.** Each formula is checked against a worked example from the reference textbooks (Ansel 13th and 15th editions, Rees/Smith/Watson, Khan and Reddy) or the FDA/EMA/USP/ICH guidance, and that example becomes a unit test.
- **Show the working.** Every result shows the formula, the substituted numbers and the units, so students learn from it and auditors can check it.
- **One step, one pull request.** Each step lands as its own small PR, with tests, and is recorded in the [step log](#step-log).
- **Honest scope.** The home page lists only features that exist. Anything planned is marked as coming soon.
- **Not medical advice.** Clinical calculators carry a clear disclaimer and are never a substitute for professional checking.

## Starting point (2026-10-09, commit 4396d25)

| Area | State | Issue found |
| --- | --- | --- |
| Dissolution f1/f2 | Works for mean values only | f2 counts t=0 and every point after 85%, which inflates the result. The card advertises SD, kinetics, MDT/DE% and bootstrap, which don't exist. |
| Carr Index and Hausner Ratio | Works | Zero is rejected as missing input. |
| 3-way percent | Works | None found. |
| %w/v, %w/w, %v/v library | Written, not used by any page | The %w/v to %w/w conversion is wrong: it uses ×10 where it should divide by density. |
| 15 planned modules | Coming-soon page only | None built. |
| Tests | Broken | Jest can't load React Router 7, and the test checks the wrong page. |
| Setup | `npm ci` fails | Lock file out of sync. Four unused libraries. CRA is deprecated. |
| Reference datasets | Wrong expected values | Example: one expects f2 = 71.6, but the actual result is 88.6. |

## Phase 0: Stabilise the foundation

Phase 0 makes the project safe to change: it must install, test and deploy cleanly before any formula is touched.

1. **0.1 Fix the install.** Regenerate `package-lock.json` and remove the unused libraries (recharts, jspdf, html2canvas, simple-statistics). Done when `npm ci` and `npm run build` pass on a clean machine.
2. **0.2 Move from Create React App to Vite with Vitest.** CRA is no longer maintained, and its Jest setup is why the test fails. Done when `npm run dev`, `npm run build` and `npm test` all work and the app looks the same.
3. **0.3 Fix the existing test.** Point the contact-form test at `/contact`, and add a smoke test that opens each page.
4. **0.4 Add continuous integration.** A GitHub Actions workflow runs install, lint, tests and build on every PR.
5. **0.5 Deploy a preview.** Host the app for free (GitHub Pages, Netlify or Vercel) so every merged step is live to try.
6. **0.6 Write the README.** Cover what the app does, how to run it, how to add a calculator, and the textbook sources.
7. **0.7 Set the calculator pattern.** Each calculator gets three parts: a pure math function in `src/lib/math`, a unit-test file with textbook examples, and a page. Add a shared input component that accepts 0, rejects empty input and shows units.

## Phase 1: Fix and complete the existing calculators

Phase 1 makes the three live calculators correct and delivers what the dissolution card already promises.

1. **1.1 Make the module cards honest.** Trim the dissolution card to the features that exist, and add each feature back as it ships.
2. **1.2 Correct the reference datasets.** Recompute the expected f1 and f2 values and turn the datasets into unit tests.
3. **1.3 Per-unit dissolution input.** Accept 6 to 12 units per time point (pasted or CSV), and show mean, SD and %CV with error bars on the chart.
4. **1.4 Apply the FDA/EMA f2 rules.** Exclude t=0, keep only one point after 85% dissolved, require at least 3 points and 12 units, check the %CV limits (no more than 20% at early points, no more than 10% after), and warn when f2 isn't valid.
5. **1.5 Add MDT and DE%.** Calculate mean dissolution time and dissolution efficiency from the profile.
6. **1.6 Add release-kinetics fitting.** Fit the zero-order, first-order, Higuchi, Korsmeyer-Peppas and Hixson-Crowell models. Show k, R² and AIC for each and highlight the best fit.
7. **1.7 Add bootstrap f2.** Run 1,000 to 5,000 bootstrap resamples and report the 90% confidence interval, for use when variability is too high for plain f2.
8. **1.8 Add an export.** Download a PDF or CSV of inputs, results and chart for lab records.
9. **1.9 Carr and Hausner fixes.** Accept 0 as an input, allow mass and bulk/tapped density as inputs as well as volumes, and add the angle of repose.
10. **1.10 Concentration calculator.** Fix the %w/v and %w/w conversion (%w/w = %w/v ÷ density), then put the w/v, w/w and v/v solver on a page with ratio strength (1:x) and mg/mL.

## Phase 2: Core student calculators

Phase 2 covers the chapters every pharmacy calculations course teaches, in roughly textbook order. Each step's tests use worked examples from the Ansel and Rees/Smith/Watson books.

1. **2.1 Unit converter.** Convert metric, apothecary and household units for mass, volume and temperature, and grains to mg.
2. **2.2 Dilution and concentration.** Solve C1V1 = C2V2 for any unknown, and handle stock solutions and fortifying.
3. **2.3 Alligation.** Use alligation medial and alligation alternate to mix two strengths into a target strength.
4. **2.4 Serial dilution.** Track a multi-step dilution factor and the final concentration at each step.
5. **2.5 Reducing and enlarging formulas.** Scale a compounding formula to a new total quantity.
6. **2.6 Density and specific gravity.** Convert between weight, volume and specific gravity.
7. **2.7 Molarity and electrolytes.** Calculate molarity, molality, normality, mEq and mmol, and osmolarity in mOsm/L.
8. **2.8 Isotonic solutions.** Use the sodium chloride equivalent (E-value) method and the freezing-point depression method, backed by a small E-value table.
9. **2.9 pH and buffers.** Apply Henderson-Hasselbalch, give buffer recipes (acetate, phosphate, citrate) and calculate buffer capacity.

## Phase 3: Industry and QC modules

Phase 3 serves QC, analytical and formulation staff, and every module cites the guidance it follows (USP, ICH, FDA).

1. **3.1 Assay calculations.** Calculate % assay against a standard, correct for potency and water or LOD, % recovery, and USP <905> content uniformity (acceptance value).
2. **3.2 Statistics suite.** Calculate mean, SD and %RSD, run t-tests and one-way ANOVA, and use the Grubbs and Dixon Q outlier tests.
3. **3.3 ICH Q2 method validation.** Assess linearity with regression and residuals, accuracy, repeatability and intermediate precision, and LOD/LOQ from the slope and SD.
4. **3.4 HPLC/GC system suitability.** Calculate resolution, tailing factor, plate count, capacity factor and %RSD of replicate injections.
5. **3.5 Formulation and batch tools.** Calculate API and excipient percentages, batch scaling, overage, yield and process loss.
6. **3.6 Stability.** Fit zero- and first-order degradation, calculate t90 shelf life, and run Arrhenius extrapolation from accelerated data.
7. **3.7 Molecular calculators.** Calculate molecular weight from a formula, equivalent weight, and salt-to-base conversion.

## Phase 4: Learning features

Phase 4 turns the calculators into a study tool, which sets the app apart from plain calculator sites.

1. **4.1 Step-by-step working.** Add a toggle on every calculator that shows the full worked solution with units.
2. **4.2 Practice mode.** Generate problems with random values for each topic, check the student's answer and show the working.
3. **4.3 Formula reference.** Add one page per topic with the formula, when to use it and a worked example.
4. **4.4 Saved history.** Keep recent calculations in the browser, with copy and export.
5. **4.5 Mobile and accessibility pass.** Check keyboard use, labels and contrast, and test on phones.

## Phase 5: Clinical and pharmacokinetics

Phase 5 comes last because dosing errors can harm patients. Each tool needs a disclaimer, input limits and extra review.

1. **5.1 Patient measures.** Calculate BMI, BSA (Mosteller and DuBois), ideal and adjusted body weight.
2. **5.2 Dosing.** Calculate mg/kg and BSA-based doses, paediatric dosing, and doses from the strengths on hand.
3. **5.3 Renal function.** Calculate Cockcroft-Gault CrCl and eGFR (CKD-EPI 2021), and show dose-adjustment prompts.
4. **5.4 IV infusions.** Calculate mL/h, drops/min and mcg/kg/min rates.
5. **5.5 Pharmacokinetics.** Calculate Cmax, Tmax, AUC (trapezoidal), half-life, clearance, Vd and loading and maintenance doses.

## How every step is documented

Each step leaves a trail in four places:

1. **Pull request.** The PR description gives Before and After, the formula and source used, and the test cases with their textbook page.
2. **Tests.** Every formula has a unit test built from at least one published worked example.
3. **[CHANGELOG.md](../CHANGELOG.md).** A dated, user-facing list of what each release added or fixed.
4. **Step log (below).** Updated in the same PR as the step, with status, PR link and date.

Longer design decisions, such as which f2 rules to apply or which hosting to pick, go in the Notes column or a short note under the phase.

## Step log

Status: Not started, In progress, In review, Done. Rows for later phases are added as each phase starts.

| Step | Status | PR | Date done | Notes |
| --- | --- | --- | --- | --- |
| Map the existing code | Done | None | 2026-10-09 | Findings are in the starting-point table above. |
| Write this roadmap | Done | #1 | 2026-10-09 | Moved from a Claude Doc into the repo. |
| 0.1 Fix the install | Done | #1 | 2026-10-09 | Lock file regenerated, 4 unused libraries removed. |
| 0.2 Move to Vite and Vitest | Not started | | | |
| 0.3 Fix the existing test | Not started | | | |
| 0.4 Add CI | Not started | | | |
| 0.5 Deploy a preview | In review | This PR | | GitHub Pages via Actions on every push to main. Router uses PUBLIC_URL as basename; 404.html fallback serves deep links. |
| 0.6 Write the README | Not started | | | |
| 0.7 Set the calculator pattern | Not started | | | |
| 1.1 Make the module cards honest | Not started | | | |
| 1.2 Correct the reference datasets | Not started | | | |
| 1.3 Per-unit dissolution input | Not started | | | |
| 1.4 FDA/EMA f2 rules | Not started | | | |
