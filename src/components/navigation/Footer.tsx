import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import type { Theme } from "../../interfaces/theme";
import Logo from "../content/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (siteTheme: Theme) => {
  return (
    <div
      className={`${siteTheme.footerBackgroundColor} ${siteTheme.footerTextColor} min-h-48 font-[MartianMono]`}
    >
      <div
        id="ContactInfo"
        className="flex flex-col justify-center text-center items-center py-2"
      >
        <Logo siteTheme={siteTheme} />
        <span className="text-lg">
          Contact me:
          <br /> AsMurphy-work@protonmail.com
        </span>
        <div>
          <button
            className="ml-4 hover:bg-gray-700 rounded-lg p-2 transition duration-300 ease-in-out cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/ashton-murphy25/",
                "_blank"
              )
            }
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </button>
          <button
            className="ml-4 hover:bg-gray-700 rounded-lg p-2 transition duration-300 ease-in-out cursor-pointer"
            onClick={() =>
              window.open("https://github.com/AsMurphy-student", "_blank")
            }
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </button>
        </div>
        <p>
          &copy; 2025 Ashton Murphy.
          <br />
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
