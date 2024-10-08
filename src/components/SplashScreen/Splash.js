import Loading from '../Loading/Loading';
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
      <Loading />
    </div>
  );
};
export default SplashScreen;