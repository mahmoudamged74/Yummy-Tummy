import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import CottonHero from "../../Components/CottonHero/CottonHero";
import styles from "./CottonPage.module.css";

export default function CottonPage() {
  return (
    <div className={styles.cottonPage}>
      <Navbar />
      <CottonHero />
    </div>
  );
}
