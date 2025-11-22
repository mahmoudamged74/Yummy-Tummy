import React from "react";
import { Link } from "react-router-dom";
import styles from "./Singture.module.css";

export default function Singture() {
  return (
    <section className={styles.signatureSection}>
      <div className="container">
        <div className={`row ${styles.row}`}>
          <div className="col-12">
            <h2 className={styles.signatureTitle}>
              THE SIGNATURE<span className={styles.signatureLine}>LINE</span>
            </h2>
          </div>
        </div>

        <div className={`row ${styles.logosRow}`}>
          <div className={`col-12 ${styles.logosContainer}`}>
            <img
              src="/assets/Group (8).svg"
              alt="Organic Home"
              className={styles.logoImage}
            />
            <span className={styles.orText}>OR</span>
            <img
              src="/assets/Group (9).svg"
              alt="Organic Fruits"
              className={styles.logoImage}
            />
          </div>
        </div>

        <div className={`row ${styles.cardsRow}`}>
          {/* Card 1 - Home */}
          <div className="col-12 col-md-6">
            <Link to="/cotton" style={{ textDecoration: "none" }}>
              <div className={`${styles.signatureCard} ${styles.homeCard}`}>
                <div className={styles.cardImageWrapper}>
                  <img
                    src="/assets/Group (2).svg"
                    alt="Home Logo"
                    className={styles.cardImage}
                  />
                </div>
                <h3 className={styles.cardTitle}>HOME</h3>
              </div>
            </Link>
          </div>

          {/* Card 2 - Yummy Tummy */}
          <div className="col-12 col-md-6">
            <Link to="/yummy" style={{ textDecoration: "none" }}>
              <div className={`${styles.signatureCard} ${styles.yummyCard}`}>
                <div className={styles.cardImageWrapper}>
                  <img
                    src="/assets/Group (3).svg"
                    alt="Yummy Tummy Logo"
                    className={styles.cardImage}
                  />
                </div>
                <h3 className={styles.cardTitleYummy}>YUMMY TUMMY</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
