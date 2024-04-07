import { Link } from "react-router-dom";
import Logo from "../assets/img/marvel-logo.png";
import Captain from "../assets/img/captain.png";
import Hulk from "../assets/img/hulk.png";

const Home = () => {
  return (
    <main className="body-content">
      <div className="left">
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>
      </div>
      <div className="middle">
        <div className="captain">
          <img src={Captain} alt="Logo" />
          <Link to="/characters">
            <button className="btnhome">
              <span>Les Personnages</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="right">
        <div className="hulk">
          <img src={Hulk} alt="Logo" />
        </div>
        <Link to="/comics">
          <button className="btnhome">
            <span>Les Comics</span>
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
