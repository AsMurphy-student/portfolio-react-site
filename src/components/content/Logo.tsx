import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();
    return (
        <div className="ml-2">
            <h1
            style={{
                fontSize: `${2}rem`,
                fontFamily: "'MartianRobotics'",
                color: 'black',
                margin: 0,
                padding: 0,
                textAlign: 'left',
                cursor: 'pointer'
            }}
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
