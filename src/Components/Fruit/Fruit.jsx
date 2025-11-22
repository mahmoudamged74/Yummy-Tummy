import React, { useRef, useEffect, useState } from "react";
import styles from "./Fruit.module.css";

const fruits = [
  { name: "Mango", image: "/assets/mongo.svg", color: "#EA9E0E" },
  { name: "Apple", image: "/assets/apple.svg", color: "#FB120C" },
  { name: "Pineapple", image: "/assets/pianeapple.svg", color: "#EDBC1B" },
  { name: "Pears", image: "/assets/pears.svg", color: "#91BF5B" },
  { name: "Orange", image: "/assets/orange.svg", color: "#FF9700" },
  { name: "kiwi", image: "/assets/kiwi.svg", color: "#A5C725" },
  { name: "Lemon", image: "/assets/lemonsvg.svg", color: "#FDE202" },
  { name: "Grapefruit", image: "/assets/grapefruite.svg", color: "#FB120C" },
  { name: "Bananas", image: "/assets/bananas.svg", color: "#DD9B02" },
  { name: "Grapes Blue", image: "/assets/grapesblue.svg", color: "#515B86" },
  { name: "Mandarin", image: "/assets/mardian.svg", color: "#E54403" },
  { name: "Grapes Red", image: "/assets/grapesred.svg", color: "#B70E04" },
  { name: "Pomegranate", image: "/assets/pomegrante.svg", color: "#B70E04" },
  { name: "Grapes Green", image: "/assets/grapesgreen.svg", color: "#BFD845" },
  { name: "Strawberry", image: "/assets/strawparry.svg", color: "#B70E04" },
  { name: "Sweet Potato", image: "/assets/sweetpetoto.svg", color: "#9F432D" },
  { name: "Garlic", image: "/assets/gralic.svg", color: "#B68255" },
  { name: "Carrot", image: "/assets/carrot.svg", color: "#F05407" },
  { name: "Onion-RED", image: "/assets/onienred.svg", color: "#B987A6" },
  { name: "Potato", image: "/assets/patato.svg", color: "#FFC54E" },
  { name: "lettuce", image: "/assets/lattuse.svg", color: "#AFD348" },
  { name: "Ginger", image: "/assets/ginger.svg", color: "#C6893A" },
  { name: "Onion", image: "/assets/onien.svg", color: "#E17345" },
];

export default function Fruit() {
  const sectionRef = useRef(null);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (sectionRef.current) {
        setSectionHeight(sectionRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Create multiple leaves for falling animation
  const leaves = Array.from({ length: 20 }, (_, i) => i);
  const fallingLeaves = Array.from({ length: 25 }, (_, i) => i);
  
  // Leaf images array
  const leafImages = [
    "/assets/L--05.png",
    "/assets/L--06.png",
    "/assets/L--07.png",
    "/assets/L--08.png",
    "/assets/L--09.png",
    "/assets/L--10.png",
    "/assets/L--12.png",
    "/assets/L--13.png",
    "/assets/L--15.png",
  ];


  return (
    <div ref={sectionRef} className={styles.fruitSection}>
      {/* Falling Leaves */}
      {leaves.map((leaf) => {
        const leafImage = leafImages[leaf % leafImages.length];
        return (
          <div
            key={`leaf-${leaf}`}
            className={styles.fallingLeaf}
            style={{
              left: `${(leaf * 6) % 100}%`,
              animationDelay: `${leaf * 0.3}s`,
              animationDuration: `${12 + (leaf % 5)}s`,
              "--fall-distance":
                sectionHeight > 0 ? `${sectionHeight + 60}px` : "100vh",
            }}
          >
            <img
              src={leafImage}
              alt="Falling Leaf"
              className={styles.leafImage}
            />
          </div>
        );
      })}

      {/* Falling Leaves (More) */}
      {fallingLeaves.map((leafIndex) => {
        const leafImage = leafImages[leafIndex % leafImages.length];
        return (
          <div
            key={`falling-leaf-${leafIndex}`}
            className={styles.fallingFruit}
            style={{
              left: `${(leafIndex * 4 + 2) % 100}%`,
              animationDelay: `${leafIndex * 0.6}s`,
              animationDuration: `${30 + (leafIndex % 10)}s`,
              "--fall-distance":
                sectionHeight > 0 ? `${sectionHeight + 50}px` : "100vh",
            }}
          >
            <img
              src={leafImage}
              alt="Falling Leaf"
              className={styles.leafImage}
            />
          </div>
        );
      })}

      <div className="container-fluid">
        <div className={`row g-4 ${styles.fruitRow}`}>
          {fruits.map((fruit, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div
                className={styles.fruitContainer}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img
                  src={fruit.image}
                  alt={fruit.name}
                  className={styles.fruitImage}
                />
                <div
                  className={styles.fruitName}
                  style={{ color: fruit.color }}
                >
                  {fruit.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.fruitBottom}>

      </div>
    </div>
  );
}
