import React, { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";

const translations = {
  en: {
    title: "THIS IS OUR JOURNEY",
    texts: [
      "Natural Organic isn't just a brand, it's a lifestyle.",
      "Every product we create is 100% natural, We believe in pure comfort, pure beauty, ",
      "and the kind of quality that only nature can make",
      "At Natural Organic, everything we make is pure, real, and naturally beautiful.",
      "No preservatives. No chemicals. Just nature, the way it's meant to be",
    ],
  },
  fr: {
    title: "VOICI NOTRE PARCOURS",
    texts: [
      "Natural Organic n'est pas seulement une marque, c'est un mode de vie.",
      "Chaque produit que nous créons est 100% naturel, Nous croyons au confort pur, à la beauté pure, ",
      "et à la qualité que seule la nature peut créer",
      "Chez Natural Organic, tout ce que nous fabriquons est pur, réel et naturellement beau.",
      "Pas de conservateurs. Pas de produits chimiques. Juste la nature, comme elle est censée être",
    ],
  },
  it: {
    title: "QUESTO È IL NOSTRO VIAGGIO",
    texts: [
      "Natural Organic non è solo un marchio, è uno stile di vita.",
      "Ogni prodotto che creiamo è 100% naturale, Crediamo nel comfort puro, nella bellezza pura, ",
      "e nella qualità che solo la natura può creare",
      "In Natural Organic, tutto ciò che facciamo è puro, reale e naturalmente bello.",
      "Nessun conservante. Nessun prodotto chimico. Solo la natura, come dovrebbe essere",
    ],
  },
};

export default function HeroSection() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Language rotation every 7 seconds
    const languageInterval = setInterval(() => {
      setCurrentLanguage((prev) => {
        if (prev === "en") return "fr";
        if (prev === "fr") return "it";
        return "en";
      });
    }, 7000);

    return () => clearInterval(languageInterval);
  }, []);

  useEffect(() => {
    // Reset and type the title when language changes
    setIsTyping(true);
    setDisplayedTitle("");
    const fullTitle = translations[currentLanguage].title;
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex < fullTitle.length) {
        setDisplayedTitle(fullTitle.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 50); // Typing speed: 50ms per character

    return () => clearInterval(typeInterval);
  }, [currentLanguage]);

  const currentTexts = translations[currentLanguage].texts;

  return (
    <section className={styles.heroSection}>
      <div className={`container-fluid ${styles.container}`}>
        <div className={`row ${styles.row}`}>
          {/* Column 1 */}
          <div className="col-12 col-md-6 col-lg-6">
            <div
              className={styles.heroBox}
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <img
                src="/assets/vvv.jpg"
                alt="Hero Image"
                className={styles.heroImageFirst}
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-12 col-md-6 col-lg-2">
            <div
              className={styles.heroBox}
              style={{
                background: "linear-gradient(90deg, #00C2B1 0%, #00C9ED 100%)",
              }}
            >
              <img
                src="/assets/Group (1).svg"
                alt="Hero Image"
                className={styles.heroImage}
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className={styles.heroBox}
              style={{
                background: "linear-gradient(90deg, #F469DC 0%, #F56D00 100%)",
              }}
            >
              <img
                src="/assets/wmoyYf.tif.svg"
                alt="Hero Image"
                className={styles.heroImage1}
              />
            </div>
          </div>

          {/* Column 4 */}
          <div className="col-12 col-md-8 col-lg-8">
            <div
              className={styles.heroBox}
              style={{ backgroundColor: "#F69138" }}
            >
              <div className={styles.journeyContent}>
                <h1 className={styles.journeyTitle}>
                  {displayedTitle}
                  {isTyping && <span className={styles.cursor}>|</span>}
                </h1>
                {currentTexts.map((text, index) => (
                  <p key={index} className={styles.journeyText}>
                    {text}
                  </p>
                ))}

                {/* Star Icons */}
                <img
                  src="/assets/icon.svg"
                  alt="Star Icon"
                  className={styles.starIconTopRight}
                />
                <img
                  src="/assets/icon-small.svg"
                  alt="Star Icon Small"
                  className={styles.starIconBottomRight}
                />
                <img
                  src="/assets/icon-small.svg"
                  alt="Star Icon Small"
                  className={styles.starIconBottomLeft}
                />
              </div>
            </div>
          </div>

          {/* Column 5*/}
          <div className="col-12 col-md-4 col-lg-4">
            <div
              className={`${styles.heroBox} ${styles.heroBoxWithCircle}`}
              style={{
                background: "linear-gradient(90deg, #F469DC 0%, #F56D00 100%)",
              }}
            >
              <div className={styles.gradientContent}>
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
                  <span className={styles.naturalOrganic}>NATURAL ORGANIC</span>
                </h3>

                {/* Star Icons for Gradient Box */}
                <img
                  src="/assets/icon-small.svg"
                  alt="Star Icon Small"
                  className={styles.gradientStarTop}
                />
                <img
                  src="/assets/icon-small.svg"
                  alt="Star Icon Small"
                  className={styles.gradientStarBottom}
                />

                {/* Rotating Circle */}
                <img
                  src="/assets/I--03.png"
                  alt="Rotating Circle"
                  className={styles.rotatingCircle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
