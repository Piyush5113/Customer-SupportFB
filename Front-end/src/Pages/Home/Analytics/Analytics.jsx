import styles from "./Analytics.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

export const Analytics = () => {
  
const [datasetOverview,setDatasetOverview]=useState([]);
const [insightsData,setInsightsData]=useState([]);
const [mlMetrics,setMlMetrics]=useState([]);

  const chartCards = [
    {
      id: "csat",
      title: "CSAT Distribution",
      description: "Overall customer satisfaction split",
    },
    {
      id: "channel",
      title: "Channel Distribution",
      description: "Volume share by support channel",
    },
    {
      id: "category",
      title: "Category Distribution",
      description: "Ticket volume grouped by issue type",
    },
    {
      id: "response-time",
      title: "Response Time",
      description: "Avg time to first response",
    },
    {
      id: "agent-shift",
      title: "Agent Shift",
      description: "Performance and ticket volume per shift",
    },
    {
      id: "correlation",
      title: "Correlation Heatmap",
      description: "Inter-feature numerical correlation",
    },
    {
      id: "feature-importance",
      title: "Feature Importance",
      description: "Key predictors of dissatisfaction",
    },
    {
      id: "missing-values",
      title: "Missing Values",
      description: "Dataset completeness report",
    },
    {
      id: "time-vs-sat",
      title: "Response Time vs Satisfaction",
      description: "Impact of delay on CSAT",
    },
    {
      id: "cat-vs-csat",
      title: "Category vs CSAT",
      description: "Satisfaction drill-down by category",
    },
  ];

  useEffect(()=>{

    fetchAnalytics();
    
    },[]);

    const fetchAnalytics = async () => {

        try{
    
            const res = await axios.get("http://127.0.0.1:5000/analytics");
    
            setDatasetOverview([
    
                {
                    label:"Total Records",
                    value:res.data.dataset.records
                },
    
                {
                    label:"Satisfied",
                    value:res.data.dataset.satisfied
                },
    
                {
                    label:"Not Satisfied",
                    value:res.data.dataset.not_satisfied
                },
    
                {
                    label:"Features",
                    value:res.data.dataset.features
                }
    
            ]);
    
            setInsightsData(res.data.insights);
    
            setMlMetrics([
    
                {
                    label:"Accuracy",
                    value:res.data.metrics.accuracy
                },
    
                {
                    label:"Precision",
                    value:res.data.metrics.precision
                },
    
                {
                    label:"Recall",
                    value:res.data.metrics.recall
                },
    
                {
                    label:"F1 Score",
                    value:res.data.metrics.f1
                }
    
            ]);
    
        }
    
        catch(err){
    
            console.log(err);
    
        }
    
    }

  return (
    <section className={styles.container} aria-labelledby="analytics-heading">
      {/* Header Section */}
      <header className={styles.header}>
        <div>
          <h1 id="analytics-heading" className={styles.title}>
            EDA &amp; Machine Learning Insights
          </h1>
          <p className={styles.subtitle}>
            Live dynamic operational metrics and model evaluation results.
          </p>
        </div>
        <button
          type="button"
          className={styles.refreshBtn}
          onClick={() => alert("Syncing latest EDA/ML pipeline predictions...")}
          aria-label="Refresh Dataset Insights"
        >
          Sync Live Pipeline
        </button>
      </header>

      {/* Section 1: Dataset Overview */}
      <section className={styles.section} aria-labelledby="overview-heading">
        <h2 id="overview-heading" className={styles.sectionTitle}>
          Section 1: Dataset Overview
        </h2>
        <div className={styles.statsGrid}>
          {datasetOverview.map((item, index) => (
            <article key={index} className={styles.statCard} tabIndex="0">
              <span className={styles.statLabel}>{item.label}</span>
              <strong className={styles.statValue}>{item.value}</strong>
            </article>
          ))}
        </div>
      </section>

      {/* Section 2: EDA Charts Grid */}
      <section className={styles.section} aria-labelledby="charts-heading">
        <div className={styles.sectionHeader}>
          <h2 id="charts-heading" className={styles.sectionTitle}>
            Section 2: Exploratory Data Analysis Charts
          </h2>
          <span className={styles.badge}>Interactive / Recharts Ready</span>
        </div>

        <div className={styles.chartsGrid}>
          {chartCards.map((chart) => (
            <article key={chart.id} className={styles.chartCard} tabIndex="0">
              <header className={styles.chartHeader}>
                <h3 className={styles.chartTitle}>{chart.title}</h3>
                <p className={styles.chartDesc}>{chart.description}</p>
              </header>
              <div
                className={styles.chartPlaceholder}
                role="img"
                aria-label={`Visualization for ${chart.title}`}
              >
                {/* SVG Mock Visualizer - Ready to be replaced by Recharts/Chart.js */}
                <svg className={styles.dummyGraphic} viewBox="0 0 100 40">
                  <path
                    d="M 0,30 Q 25,5 50,20 T 100,10"
                    fill="none"
                    stroke="var(--color-surface-strong)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="50"
                    cy="20"
                    r="3"
                    fill="var(--color-text-primary)"
                  />
                </svg>
                <span className={styles.placeholderLabel}>
                  ✔ {chart.title} [Chart Embed]
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Section 3 & 4 Grid */}
      <div className={styles.twoColumnGrid}>
        {/* Section 3: Insights */}
        <section className={styles.section} aria-labelledby="insights-heading">
          <h2 id="insights-heading" className={styles.sectionTitle}>
            Section 3: Key Insights
          </h2>
          <div className={styles.listGrid}>
            {insightsData.map((insight, idx) => (
              <div key={idx} className={styles.insightCard} tabIndex="0">
                <div className={styles.insightMeta}>
                  <span className={styles.insightLabel}>{insight.label}</span>
                  <span className={styles.insightTag}>{insight.tag}</span>
                </div>
                <strong className={styles.insightValue}>{insight.value}</strong>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: ML Metrics */}
        <section className={styles.section} aria-labelledby="ml-heading">
          <h2 id="ml-heading" className={styles.sectionTitle}>
            Section 4: ML Metrics
          </h2>
          <div className={styles.mlGrid}>
            {mlMetrics.map((metric, idx) => (
              <article key={idx} className={styles.mlCard} tabIndex="0">
                <span className={styles.mlLabel}>{metric.label}</span>
                <strong className={styles.mlValue}>{metric.value}</strong>
                <div className={styles.progressBarBg}>
                  <div
                    className={styles.progressBarFill}
                    style={{ width: metric.value }}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Section 5: Dynamic Dashboard Footer/Notice */}
      <footer
        className={styles.dashboardNotice}
        aria-label="Library Integration Notice"
      >
        <h2 className={styles.noticeTitle}>
          Section 5: Interactive Dashboard Integration
        </h2>
        <p className={styles.noticeText}>
          Ready for live data streaming using <strong>Recharts</strong> or{" "}
          <strong>Chart.js</strong>.
        </p>
      </footer>
    </section>
  );
};

export default Analytics;
