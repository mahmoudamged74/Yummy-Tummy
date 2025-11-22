import React from "react";
import styles from "./YummyCollection.module.css";

export default function YummyCollection() {
  return (
    <section className={styles.yummyCollectionSection}>
      <div className="container-fluid">
        <div className={`row ${styles.row}`}>
          <div className="col-12">
            <div className={styles.collectionContent}>
              <img
                src="/assets/Group (5).svg"
                alt="Yummy Collection"
                className={styles.collectionImage}
              />
              <div className={styles.collectionText}>
                <p className={styles.collectionDescription}>
                  At Natural Organic, everything we make is pure, real, and
                  naturally beautiful. No preservatives. No chemicals. Just
                  nature, the way it's meant to be
                </p>
              </div>
              {/* Rectangle Image Container - Full Width */}
              <div className={styles.rectangleContainer}>
                <img
                  src="/assets/Rectangle.svg"
                  alt="Rectangle"
                  className={styles.rectangleImage}
                />

                {/* Leaves positioned on the image */}
                <img
                  src="/assets/L--05.png"
                  alt="Leaf 1"
                  className={styles.leaf1}
                />
                <img
                  src="/assets/L--06.png"
                  alt="Leaf 2"
                  className={styles.leaf2}
                />
                <img
                  src="/assets/L--07.png"
                  alt="Leaf 3"
                  className={styles.leaf3}
                />
                <img
                  src="/assets/L--08.png"
                  alt="Leaf 4"
                  className={styles.leaf4}
                />
                <img
                  src="/assets/L--09.png"
                  alt="Leaf 5"
                  className={styles.leaf5}
                />
                <img
                  src="/assets/L--10.png"
                  alt="Leaf 6"
                  className={styles.leaf6}
                />
                <img
                  src="/assets/L--12.png"
                  alt="Leaf 7"
                  className={styles.leaf7}
                />
                <img
                  src="/assets/L--13.png"
                  alt="Leaf 8"
                  className={styles.leaf8}
                />
                <img
                  src="/assets/L--15.png"
                  alt="Leaf 9"
                  className={styles.leaf9}
                />
                <img
                  src="/assets/L--05.png"
                  alt="Leaf 10"
                  className={styles.leaf10}
                />
                <img
                  src="/assets/L--06.png"
                  alt="Leaf 11"
                  className={styles.leaf11}
                />
                <img
                  src="/assets/L--07.png"
                  alt="Leaf 12"
                  className={styles.leaf12}
                />
                <img
                  src="/assets/L--08.png"
                  alt="Leaf 13"
                  className={styles.leaf13}
                />
                <img
                  src="/assets/L--09.png"
                  alt="Leaf 14"
                  className={styles.leaf14}
                />
                <img
                  src="/assets/L--10.png"
                  alt="Leaf 15"
                  className={styles.leaf15}
                />
              </div>
              {/* Positioned Images */}
              <img
                src="/assets/Group (6).svg"
                alt="Group 6"
                className={styles.positionedImage}
              />
              <img
                src="/assets/I--03.png"
                alt="Rotating Circle"
                className={styles.rotatingCircle}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
