import React from "react";
import rangManchLogo from "../../assets/rangManchLogo.jpg";
import avantikulamLogo from "../../assets/avantikulamLogo.jpg";
import BranchesIntro from "./BranchesIntro";


export default function SocietySection() {
  return (
    <div className="flex flex-col gap-32 pb-20">
      {/* Section 1: RangManch */}
      <BranchesIntro
        imgSrc={rangManchLogo}
        imgAlt="RangManch Logo"
        smallTitle="Visionaries Behind the Lens"
        title1="Rang"
        title2="Manch"
        desc="The official Filmmaking society of MANIT BHOPAL. We don't just capture moments; 
                  we craft narratives that resonate. In collaboration with INSPIRE MANIT, we push the 
                  boundaries of student cinema."
      />

      {/* Section 2: Avantikulam */}
      <BranchesIntro
        imgSrc={avantikulamLogo}
        imgAlt="Avantikulam Logo"
        smallTitle="Igniting Potential"
        title1="Avanti"
        title2="kulam"
        desc="Avantikulam is a mission-driven project aimed at democratizing elite education. 
                  Providing free, high-quality resources for NTSE, Olympiad, and JEE/NEET aspirants 
                  from underprivileged backgrounds."
        isRev={true}
      />
    </div>
  );
}
