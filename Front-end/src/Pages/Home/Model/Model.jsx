import React from "react";
import styles from "./Model.module.css";

export const ModelPage = () => {
  const pipelineSteps = [
    "Dataset",
    "Data Cleaning",
    "EDA",
    "Feature Engineering",
    "Train Test Split",
    "Logistic Regression",
    "Hyperparameter Tuning",
    "Evaluation",
    "Deployment",
  ];

  const algorithms = [
    {
      name: "Logistic Regression",
      accuracy: "92%",
      precision: "91%",
      recall: "90%",
      f1: "91%",
      isSelected: true,
    },
    {
      name: "Decision Tree",
      accuracy: "89%",
      precision: "88%",
      recall: "87%",
      f1: "87%",
      isSelected: false,
    },
    {
      name: "Random Forest",
      accuracy: "91%",
      precision: "90%",
      recall: "90%",
      f1: "90%",
      isSelected: false,
    },
  ];

  const featureImportance = [
    { feature: "Response Time", weight: 95 },
    { feature: "Channel", weight: 80 },
    { feature: "Category", weight: 65 },
    { feature: "Agent Shift", weight: 45 },
    { feature: "Tenure", weight: 35 },
  ];

  const coefficients = [
    { name: "Response Time (Delayed)", coef: "-1.82", impact: "Negative" },
    { name: "Channel (Phone)", coef: "+1.24", impact: "Positive" },
    { name: "Category (Technical)", coef: "-0.95", impact: "Negative" },
    { name: "Tenure", coef: "+0.42", impact: "Positive" },
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <span className={styles.heroBadge}>
          ML Architecture &amp; Evaluation
        </span>
        <h1 className={styles.heroTitle}>Machine Learning Model</h1>
        <p className={styles.heroSubtitle}>
          End-to-end workflow, model comparison, explainability, and evaluation
          metrics for customer satisfaction prediction.
        </p>
      </header>

      {/* Workflow Section */}
      <section className={styles.section} aria-labelledby="workflow-title">
        <h2 id="workflow-title" className={styles.sectionTitle}>
          ML Workflow Pipeline
        </h2>
        <div className={styles.workflowGrid}>
          {pipelineSteps.map((step, index) => (
            <React.Fragment key={index}>
              <div className={styles.workflowStep} tabIndex="0">
                <span className={styles.stepIndex}>0{index + 1}</span>
                <span className={styles.stepLabel}>{step}</span>
              </div>
              {index < pipelineSteps.length - 1 && (
                <div className={styles.workflowArrow} aria-hidden="true">
                  ↓
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Algorithms Compared Section */}
      <section className={styles.section} aria-labelledby="algo-title">
        <h2 id="algo-title" className={styles.sectionTitle}>
          Algorithms Compared
        </h2>
        <div
          className={styles.tableWrapper}
          tabIndex="0"
          role="region"
          aria-label="Model Performance Table"
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Model</th>
                <th scope="col">Accuracy</th>
                <th scope="col">Precision</th>
                <th scope="col">Recall</th>
                <th scope="col">F1 Score</th>
              </tr>
            </thead>
            <tbody>
              {algorithms.map((algo, index) => (
                <tr
                  key={index}
                  className={algo.isSelected ? styles.selectedRow : ""}
                >
                  <th scope="row" className={styles.modelNameCell}>
                    {algo.name}
                    {algo.isSelected && (
                      <span className={styles.winnerBadge}>Selected</span>
                    )}
                  </th>
                  <td>{algo.accuracy}</td>
                  <td>{algo.precision}</td>
                  <td>{algo.recall}</td>
                  <td>{algo.f1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Final Selected Model & Why */}
      <section
        className={styles.selectedModelCard}
        aria-labelledby="selected-title"
      >
        <div className={styles.selectedHeader}>
          <div>
            <span className={styles.subTag}>Production Choice</span>
            <h2 id="selected-title" className={styles.selectedTitle}>
              Selected Model: Logistic Regression
            </h2>
          </div>
        </div>
        <div className={styles.reasonsGrid}>
          <div className={styles.reasonItem}>✔ High Accuracy (92%)</div>
          <div className={styles.reasonItem}>✔ Fast Low-Latency Prediction</div>
          <div className={styles.reasonItem}>✔ Less Risk of Overfitting</div>
          <div className={styles.reasonItem}>✔ Frictionless Deployment</div>
          <div className={styles.reasonItem}>
            ✔ Fully Explainable &amp; Auditable
          </div>
        </div>
      </section>

      {/* Feature Importance & Explainability */}
      <div className={styles.twoColumnGrid}>
        {/* Feature Importance */}
        <section className={styles.section} aria-labelledby="feat-title">
          <h2 id="feat-title" className={styles.sectionTitle}>
            Feature Importance
          </h2>
          <div className={styles.importanceContainer}>
            {featureImportance.map((item, idx) => (
              <div key={idx} className={styles.featureRow} tabIndex="0">
                <div className={styles.featureMeta}>
                  <span className={styles.featureName}>{item.feature}</span>
                  <span className={styles.featureValue}>{item.weight}%</span>
                </div>
                <div className={styles.barBg}>
                  <div
                    className={styles.barFill}
                    style={{ width: `${item.weight}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Model Explainability */}
        <section className={styles.section} aria-labelledby="explain-title">
          <h2 id="explain-title" className={styles.sectionTitle}>
            Model Explainability (Coefficients)
          </h2>
          <div className={styles.coefContainer}>
            {coefficients.map((coef, idx) => (
              <div key={idx} className={styles.coefCard} tabIndex="0">
                <span className={styles.coefName}>{coef.name}</span>
                <div className={styles.coefMeta}>
                  <span
                    className={
                      coef.impact === "Positive"
                        ? styles.posImpact
                        : styles.negImpact
                    }
                  >
                    {coef.impact}
                  </span>
                  <strong className={styles.coefVal}>{coef.coef}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Visual Diagnostics (Confusion Matrix, ROC, PR Curve) */}
      <section className={styles.section} aria-labelledby="diag-title">
        <h2 id="diag-title" className={styles.sectionTitle}>
          Visual Evaluation &amp; Diagnostics
        </h2>
        <div className={styles.chartsGrid}>
          {/* Confusion Matrix */}
          <article className={styles.diagCard} tabIndex="0">
            <h3 className={styles.diagTitle}>Confusion Matrix</h3>
            <div
              className={styles.matrixGrid}
              aria-label="Confusion Matrix Graphic"
            >
              <div className={styles.matrixCellPos}>TP: 68,240</div>
              <div className={styles.matrixCellNeg}>FP: 2,120</div>
              <div className={styles.matrixCellNeg}>FN: 4,760</div>
              <div className={styles.matrixCellPos}>TN: 10,787</div>
            </div>
          </article>

          {/* ROC Curve */}
          <article className={styles.diagCard} tabIndex="0">
            <h3 className={styles.diagTitle}>ROC Curve</h3>
            <div
              className={styles.graphPlaceholder}
              role="img"
              aria-label="ROC Curve Graph"
            >
              <svg className={styles.svgGraph} viewBox="0 0 100 60">
                <line
                  x1="0"
                  y1="60"
                  x2="100"
                  y2="0"
                  stroke="var(--color-text-tertiary)"
                  strokeDasharray="2"
                />
                <path
                  d="M 0,60 Q 10,5 100,0"
                  fill="none"
                  stroke="var(--color-surface-strong)"
                  strokeWidth="2"
                />
              </svg>
              <span className={styles.graphLabel}>AUC = 0.94</span>
            </div>
          </article>

          {/* Precision-Recall Curve */}
          <article className={styles.diagCard} tabIndex="0">
            <h3 className={styles.diagTitle}>Precision-Recall Curve</h3>
            <div
              className={styles.graphPlaceholder}
              role="img"
              aria-label="Precision Recall Curve Graph"
            >
              <svg className={styles.svgGraph} viewBox="0 0 100 60">
                <path
                  d="M 0,5 Q 70,10 100,60"
                  fill="none"
                  stroke="var(--color-surface-strong)"
                  strokeWidth="2"
                />
              </svg>
              <span className={styles.graphLabel}>AP = 0.92</span>
            </div>
          </article>
        </div>
      </section>

      {/* Hyperparameter Tuning */}
      <section className={styles.tuningCard} aria-labelledby="tuning-title">
        <div className={styles.tuningHeader}>
          <h2 id="tuning-title" className={styles.tuningTitle}>
            Hyperparameter Tuning
          </h2>
          <span className={styles.badge}>GridSearchCV</span>
        </div>
        <p className={styles.tuningDesc}>
          Optimized using 5-fold cross-validation across C parameter
          regularization strengths, penalties, and solvers.
        </p>

        <div className={styles.paramsGrid}>
          <div className={styles.paramItem}>
            <span className={styles.paramLabel}>Search Strategy</span>
            <strong className={styles.paramVal}>GridSearchCV</strong>
          </div>
          <div className={styles.paramItem}>
            <span className={styles.paramLabel}>Evaluated Parameters</span>
            <strong className={styles.paramVal}>C, Penalty, Solver</strong>
          </div>
          <div className={styles.paramItem}>
            <span className={styles.paramLabel}>Optimal C</span>
            <strong className={styles.paramVal}>1.0</strong>
          </div>
          <div className={styles.paramItem}>
            <span className={styles.paramLabel}>Optimal Penalty</span>
            <strong className={styles.paramVal}>l2</strong>
          </div>
          <div className={styles.paramItem}>
            <span className={styles.paramLabel}>Optimal Solver</span>
            <strong className={styles.paramVal}>lbfgs</strong>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModelPage;
