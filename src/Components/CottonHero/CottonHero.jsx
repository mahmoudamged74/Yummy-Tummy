import React from "react";
import styles from "./CottonHero.module.css";

export default function CottonHero() {
  return (
    <section className={styles.cottonHeroSection}>
      <div className="container-fluid">
        <div className={`row ${styles.row}`}>
          {/* Left Side - 4 Boxes Grid */}

          <div className="col-12 col-lg-6">
            <div className={styles.rotatingImageContainer}>
              <img
                src="/assets/Group (2).svg"
                alt="Cotton Logo"
                className={styles.rotatingImage}
              />
              <h2 className={styles.cottonTitle}>HOME</h2>
            </div>
          </div>
          {/* Right Side - Rotating Image */}
          <div className="col-12 col-lg-6">
            <div className={styles.gridContainer}>
              {/* Box 1 - Top Left */}
              <div
                className={styles.gridBox}
                style={{
                  background:
                    "linear-gradient(90deg, #00C2B1 0%, #00C9ED 100%)",
                }}
              >
                <img
                  src="/assets/Group (1).svg"
                  alt="Box 1"
                  className={styles.gridImage}
                />
              </div>

              {/* Box 2 - Top Right */}
              <div
                className={styles.gridBox}
                style={{
                  background:
                    "linear-gradient(90deg, #F469DC 0%, #F56D00 100%)",
                }}
              >
                <div className={styles.presentationBox}>
                  <p className={styles.clickText}>CLICK HERE TO GET</p>
                  <img
                    src="/assets/Group (4).svg"
                    alt="Presentation"
                    className={styles.presentationImage}
                  />
                  <h3 className={styles.presentationTitle}>
                    PRESENTATION
                    <br />
                    FOR CUSTOMERS
                  </h3>
                </div>
                {/* Star Icons */}
                <img
                  src="/assets/icon-small.svg"
                  alt="Star Icon"
                  className={styles.presentationStarTop}
                />
                <img
                  src="/assets/icon-small.svg"
                  alt="Star Icon"
                  className={styles.presentationStarBottom}
                />
              </div>

              {/* Box 3 - Bottom Left - Text Content */}
              <div
                className={styles.gridBox}
                style={{
                  backgroundColor: "#fff",
                }}
              >
                <div className={styles.textContent}>
                  <h3 className={styles.gradientTitle}>
                    <span className={styles.madeFrom}>MADE FROM</span>
                    <br />
                    <span className={styles.boldText}>NATURE</span>
                    <br />
                    <span className={styles.boldText}>DESIGNED</span>
                    <br />
                    <span className={styles.boldText}>FOR COMFORT</span>
                    <br />
                    <span className={styles.lightText}>STYLED FOR LIFE</span>
                    <br />
                    <br />
                    <span className={styles.naturalOrganic}>
                      NATURAL ORGANIC
                    </span>
                  </h3>
                </div>
                {/* Star Icons */}
                <img
                  src="/assets/icon-small.svg"
                  alt="Star Icon"
                  className={styles.textContentStarTop}
                />
                <img
                  src="/assets/icon-small.svg"
                  alt="Star Icon"
                  className={styles.textContentStarBottom}
                />
              </div>

              {/* Box 4 - Bottom Right */}
              <div
                className={`${styles.gridBox} ${styles.detailsBox}`}
                style={{
                  background:
                    "linear-gradient(90deg, #00C2B1 0%, #00C9ED 100%)",
                }}
              >
                <div className={styles.detailsContent}>
                  <p className={styles.detailsText}>COLLECTION</p>
                  <img
                    src="/assets/Group (7).svg"
                    alt="Plus Icon"
                    className={styles.plusIcon}
                  />
                </div>
                {/* Rotating Circle */}
                {/* <img
                  src="/assets/I--03.png"
                  alt="Rotating Circle"
                  className={styles.detailsRotatingCircle}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
