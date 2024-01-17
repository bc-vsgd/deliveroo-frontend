// Img
import logo_react from "../img/logo_react.png";
import logo_reacteur from "../img/logo_reacteur.png";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <span>Made with</span>
          <a
            href="https://react.dev/blog/2023/03/16/introducing-react-dev"
            target="_blank"
          >
            <img
              className="xs-hidden sm-visible"
              src={logo_react}
              alt="Logo React"
            />
            React
          </a>
          <span>at</span>
          <a href="https://www.lereacteur.io/" target="_blank">
            <img
              className="xs-hidden sm-visible"
              src={logo_reacteur}
              alt="Logo Le Reacteur"
            />
            Le Reacteur
          </a>
        </div>
        <div>
          <span>by</span>
          <a href="https://github.com/bc-vsgd" target="_blank">
            Benoît Charles{" "}
            <FontAwesomeIcon
              className="footer-icon xs-hidden sm-visible"
              icon="fa-brands fa-github"
            />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/beno%C3%AEt-charles-b641672a6/"
            target="_blank"
          >
            <FontAwesomeIcon
              className="footer-icon xs-hidden sm-visible"
              icon="fa-brands fa-linkedin"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
