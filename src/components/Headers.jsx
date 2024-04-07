import { Link } from "react-router-dom";
import "../assets/css/Header.css";
import Logo from "../assets/img/marvel-logo.png";
const Header = () => {
  return (
    <>
      <header>
        <div className="containerheader">
          <Link to={"/"}>
            <div className="logoheader">
              <img src="{Logo}" />
            </div>
          </Link>
          {/* Barre de recherche */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Recherche..."
              aria-label="Recherche"
            />
            <i className="fa fa-search search-icon"></i> {/* Icône de loupe */}
          </div>
          <nav className="navigation-header">
            <Link to={"/characters"}>
              <span>Personnages</span>
            </Link>
            <Link to={"/comics"}>
              <span>Comics</span>
            </Link>
            <Link to={"/favoris"}>
              <span>Favoris</span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
