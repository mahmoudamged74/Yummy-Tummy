import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import YummyHero from "../../Components/YummyHero/YummyHero";
import styles from "./YummyPage.module.css";
import YummyCollection from "../../Components/YummyCollection/YummyCollection";
import Fruit from "../../Components/Fruit/Fruit";
import FooterYummy from "../../Components/FooterYummy/FooterYummy";

export default function YummyPage() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.yummyPage}>
      <Navbar />
      <YummyHero />
      <YummyCollection />
      <Fruit />
      <FooterYummy />
    </div>
  );
}
