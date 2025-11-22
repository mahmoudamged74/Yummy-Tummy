import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Singture from "../../Components/Singture/Singture";
import TalkAbout from "../../Components/TalkAbout/TalkAbout";
import FooterHome from "../../Components/FooterHome/FooterHome";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Singture />
      <TalkAbout />
      <FooterHome />
    </div>
  );
}
