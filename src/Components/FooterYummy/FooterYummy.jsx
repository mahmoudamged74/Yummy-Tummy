import React from "react";
import styles from "./FooterYummy.module.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function FooterYummy() {
  return (
    <footer className={styles.footerSection}>
      <div className="container-fluid">
        <div className={`row ${styles.footerRow}`}>
          {/* Left Side - Rotating Image */}
          <div className="col-12 col-md-6 col-lg-6">
            <div className={styles.imageContainer}>
              <img
                src="/assets/Group (3).svg"
                alt="Footer Design"
                className={styles.rotatingImage}
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="col-12 col-md-6 col-lg-6">
            <div className={styles.contentContainer}>
              {/* BUSINESS ENQUIRIES */}
              <div className={styles.footerColumn}>
                <h3 className={styles.footerTitle}>BUSINESS ENQUIRIES</h3>
                <p className={styles.footerText}>
                  <a
                    href="mailto:naturallorganic@outlook.com"
                    className={styles.footerLink}
                  >
                    naturallorganic@outlook.com
                  </a>
                </p>
              </div>

              {/* GET IN TOUCH */}
              <div className={styles.footerColumn}>
                <h3 className={styles.footerTitle}>GET IN TOUCH</h3>
                <p className={styles.footerText}>
                  <a href="tel:+201031570011" className={styles.footerLink}>
                    (+2) 0103 1570011
                  </a>
                </p>
                <p className={styles.footerText}>
                  <a href="tel:+201031550080" className={styles.footerLink}>
                    (+2) 0103 1550080
                  </a>
                </p>
              </div>

              {/* LOCATION */}
              <div className={styles.footerColumn}>
                <h3 className={styles.footerTitle}>LOCATION</h3>
                <p className={styles.footerText}>
                  11 st off el nozha
                  <br />
                  el sabaa Emarat sq,
                  <br />
                  Almazah, Heliopolis,
                  <br />
                  Cairo Governorate
                </p>
              </div>

              {/* FOLLOW US */}
              <div className={styles.footerColumn}>
                <h3 className={styles.footerTitle}>FOLLOW US</h3>
                <div className={styles.socialIcons}>
                  <a href="#" className={styles.socialIcon}>
                    <FaFacebook />
                  </a>
                  <a href="#" className={styles.socialIcon}>
                    <FaInstagram />
                  </a>
                  <a href="#" className={styles.socialIcon}>
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
