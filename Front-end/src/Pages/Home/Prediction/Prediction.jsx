import { useState } from "react";
import styles from "./Prediction.module.css";
import { BrainCircuit, ShieldCheck, Database } from "lucide-react";
import axios from "axios";

const Prediction = () => {
  const [formData, setFormData] = useState({
    channel_name: "",
    category: "",
    sub_category: "",
    agent_shift: "",
    manager: "",
    tenure_bucket: "",
    response_time: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePredict = async (e) => {
    e.preventDefault();
  
    setLoading(true);
  
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData
      );
  
      setResult({
        prediction: response.data.prediction,
        confidence: response.data.confidence,
        probability: response.data.confidence,
        recommendation:
          response.data.prediction === "Satisfied"
            ? "Customer is highly likely to be satisfied."
            : "Customer may require immediate attention.",
      });
    } catch (error) {
      console.log(error);
  
      alert("Prediction Failed");
    }
  
    setLoading(false);
  };

  return (
    <section className={styles.predictionPage}>

      <div className={styles.heading}>

        <p>AI POWERED PREDICTION</p>

        <h1>
          CUSTOMER SATISFACTION
          <br />
          PREDICTION
        </h1>

      </div>

      <div className={styles.wrapper}>

        {/* Left */}

        <form
          className={styles.formCard}
          onSubmit={handlePredict}
        >

          <h2>Customer Information</h2>

          <div className={styles.grid}>

            <div>
              <label>Channel</label>

              <select
                name="channel_name"
                onChange={handleChange}
              >
                <option>Select</option>
                <option>Email</option>
                <option>Phone</option>
                <option>Chat</option>
              </select>
            </div>

            <div>
              <label>Category</label>

              <select
                name="category"
                onChange={handleChange}
              >
                <option>Select</option>
                <option>Billing</option>
                <option>Refund</option>
                <option>Return</option>
              </select>
            </div>

            <div>
              <label>Sub Category</label>

              <input
                type="text"
                name="sub_category"
                placeholder="Enter..."
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Agent Shift</label>

              <select
                name="agent_shift"
                onChange={handleChange}
              >
                <option>Select</option>
                <option>Morning</option>
                <option>Evening</option>
                <option>Night</option>
              </select>
            </div>

            <div>
              <label>Manager</label>

              <input
                type="text"
                name="manager"
                placeholder="Manager Name"
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Agent Tenure</label>

              <select
                name="tenure_bucket"
                onChange={handleChange}
              >
                <option>Select</option>
                <option>0-6 Months</option>
                <option>6-12 Months</option>
                <option>1-2 Years</option>
              </select>
            </div>

            <div className={styles.full}>
              <label>Response Time (Minutes)</label>

              <input
                type="number"
                name="response_time"
                placeholder="Enter response time"
                onChange={handleChange}
              />
            </div>

          </div>

          <button
            className={styles.predictBtn}
            type="submit"
          >
            {loading ? "Predicting..." : "Predict Satisfaction"}
          </button>

        </form>

        {/* Right */}

        <div className={styles.sideCard}>

          <div className={styles.infoCard}>

            <BrainCircuit size={36} />

            <h3>Machine Learning</h3>

            <p>Logistic Regression Model</p>

          </div>

          <div className={styles.infoCard}>

            <ShieldCheck size={36} />

            <h3>Accuracy</h3>

            <p>92%</p>

          </div>

          <div className={styles.infoCard}>

            <Database size={36} />

            <h3>Dataset</h3>

            <p>85,907 Records</p>

          </div>

        </div>

      </div>

      {result && (

        <div className={styles.resultCard}>

          <h2>{result.prediction}</h2>

          <p>
            Confidence
            <span>{result.confidence}%</span>
          </p>

          <div className={styles.progress}>

            <div
              style={{
                width: `${result.probability}%`,
              }}
            ></div>

          </div>

          <h4>Recommendation</h4>

          <p>{result.recommendation}</p>

        </div>

      )}

    </section>
  );
};

export default Prediction;