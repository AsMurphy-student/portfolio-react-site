import { useNavigate } from "react-router-dom";
import type { Theme } from "../../interfaces/theme";

const Logo = (siteTheme: Theme) => {
    const navigate = useNavigate();
    return (
        <div className="ml-2">
            <h1
            // style={{
            //     fontFamily: 'MartianRobotics'
            // }}
            className={`text-2xl ${siteTheme.logoColor} m-0 p-0 text-left cursor-pointer font-[MartianRobotics]`}
            onClick={() => {
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            >
            Ashton Murphy
            </h1>
        </div>
    );
};

export default Logo;
