import { useNavigate } from "react-router-dom";
import type { Theme } from "../../interfaces/theme";

const Logo = (props: { siteTheme: Theme, clickable: boolean }) => {
    const navigate = useNavigate();
    const { siteTheme, clickable } = props;
    return (
        <div className="ml-2">
            {clickable ?
                <h1
                    className={`text-2xl ${siteTheme.logoColor} m-0 p-0 text-left cursor-pointer font-[MartianRobotics]`}
                    onClick={() => {
                        navigate('/');
                        window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                >
                    Ashton Murphy
                </h1>
                :
                <h1
                    className={`text-2xl ${siteTheme.logoColor} m-0 p-0 text-left font-[MartianRobotics]`}
                >
                    Ashton Murphy
                </h1>
            }
        </div>
    );
};

Logo.defaultProps = {
    clickable: false,
}

export default Logo;
