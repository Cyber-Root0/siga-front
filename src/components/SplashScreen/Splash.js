import React, { useEffect, useState } from "react";
import FatecLogo from './../../assets/img/FatecLogo.png';
import "./SplashScreen.css";
const SplashScreen = ({ onSplashEnd }) => {
  return (
    <div className="splash-screen">
      <img
        src={FatecLogo}
        alt="Siga Logo Fatec"
        className="splash-logo"
      />
    </div>
  );
};
export default SplashScreen;