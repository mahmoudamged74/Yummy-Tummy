import React from "react";
import styles from "./TalkAbout.module.css";

export default function TalkAbout() {
  return (
    <section className={styles.talkAboutSection}>
      <img
        src="/assets/I--03.png"
        alt="Rotating Circle"
        className={styles.rotatingCircle}
      />
      <div className="container-fluid">
        <div className={`row ${styles.row}`}>
          <div className="col-12">
            <div className={styles.contentWrapper}>
              <div className={styles.logoWrapper}>
                <img
                  src="/assets/iconn.svg"
                  alt="Logo"
                  className={styles.logoImage}
                />
              </div>

              <div className={styles.textWrapper}>
                <p className={styles.talkText}>
                  SO IF YOU'D LIKE TO TALK ABOUT
                </p>
                <p className={styles.talkText}>YOUR PROJECT, GET IN TOUCH.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
