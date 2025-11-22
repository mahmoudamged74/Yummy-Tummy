import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <img
              src="/assets/Group.svg"
              alt="Natural Organic"
              className={styles.logoImage}
            />
          </Link>

          <div className={styles.navLinks}>
            <a href="#about" className={styles.navLink} onClick={closeSidebar}>
              About
            </a>

            <div className={styles.dropdown}>
              <a
                href="#works"
                className={styles.navLink}
                onClick={closeSidebar}
              >
                Our Works
                <FaChevronDown className={styles.dropdownIcon} />
              </a>
            </div>

            <div className={styles.dropdown}>
              <a
                href="#translation"
                className={styles.navLink}
                onClick={closeSidebar}
              >
                Translation
                <FaChevronDown className={styles.dropdownIcon} />
              </a>
            </div>

            <a
              href="#contact"
              className={styles.navLinkContact}
              onClick={closeSidebar}
            >
              CONTACT US
            </a>
          </div>

          <div className={styles.menuIcon} onClick={toggleSidebar}>
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div
        className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}
        onClick={closeSidebar}
      >
        <div
          className={styles.sidebarContent}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.sidebarHeader}>
            <Link to="/" onClick={closeSidebar}>
              <img
                src="/assets/Group.svg"
                alt="Natural Organic"
                className={styles.sidebarLogo}
              />
            </Link>
            <button className={styles.closeButton} onClick={closeSidebar}>
              <FaTimes />
            </button>
          </div>

          <div className={styles.sidebarLinks}>
            <a
              href="#about"
              className={styles.sidebarLink}
              onClick={closeSidebar}
            >
              About
            </a>

            <div className={styles.sidebarDropdown}>
              <a
                href="#works"
                className={styles.sidebarLink}
                onClick={closeSidebar}
              >
                Our Works
                <FaChevronDown className={styles.dropdownIcon} />
              </a>
            </div>

            <div className={styles.sidebarDropdown}>
              <a
                href="#translation"
                className={styles.sidebarLink}
                onClick={closeSidebar}
              >
                Translation
                <FaChevronDown className={styles.dropdownIcon} />
              </a>
            </div>

            <a
              href="#contact"
              className={styles.sidebarLinkContact}
              onClick={closeSidebar}
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div className={styles.overlay} onClick={closeSidebar}></div>
      )}
    </>
  );
}
