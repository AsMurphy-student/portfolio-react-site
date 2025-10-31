import { useNavigate } from "react-router-dom";
import type { Theme } from "../../interfaces/theme";
import useWindowDimensions from "../utils/Dimensions";

const Logo = (props: { siteTheme: Theme; clickable: boolean }) => {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  const { siteTheme, clickable } = props;
  return (
    <div className="ml-2">
      {clickable ? (
        <h1
          className={`${width <= 800 ? "text-3xl" : "text-5xl"} ${
            siteTheme.logoColor
          } m-0 p-0 text-left cursor-pointer font-[MartianRobotics]`}
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "instant" });
          }}
        >
          Ashton Murphy
        </h1>
      ) : (
        <h1
          className={`${width <= 800 ? "text-4xl" : "text-5xl"} ${
            siteTheme.logoColor
          } m-0 p-0 text-left font-[MartianRobotics]`}
        >
          Ashton Murphy
        </h1>
      )}
    </div>
  );
};

Logo.defaultProps = {
  clickable: false,
};

export default Logo;
