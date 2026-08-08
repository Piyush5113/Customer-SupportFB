import styles from "./Home.module.css";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>

        <p className={styles.tag}>
          AI • MACHINE LEARNING • CUSTOMER EXPERIENCE
        </p>

        <h1>
          CUSTOMER
          <br />
          SATISFACTION
          <br />
          PREDICTION
        </h1>

        <p className={styles.description}>
          Predict whether a customer is likely to be satisfied or not
          using a Machine Learning model trained on more than
          <span> 85,000+ customer interactions.</span>
        </p>

        <div className={styles.buttons}>
          <button className={styles.primary}>
            START PREDICTION
          </button>

          <button className={styles.secondary}>
            VIEW MODEL
            <ArrowRight size={18} />
          </button>
        </div>

        <div className={styles.stats}>

          <div>
            <h2>85K+</h2>
            <span>Records</span>
          </div>

          <div>
            <h2>92%</h2>
            <span>Accuracy</span>
          </div>

          <div>
            <h2>Real-time</h2>
            <span>Prediction</span>
          </div>

        </div>

      </div>

      <div className={styles.right}>

        <div className={styles.glow}></div>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900"
          alt="AI Dashboard"
        />

      </div>
    </section>
  );
};

export default Home;