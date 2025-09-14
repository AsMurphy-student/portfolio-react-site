import Logo from '../content/Logo';
import type { Theme } from '../../interfaces/theme';
import { useNavigate } from 'react-router-dom';

const AppBarCustom = (props: { siteTheme: Theme }) => {
  const { siteTheme } = props;

  const navigate = useNavigate();

  return (
    <div className={`${siteTheme.accentColor} fixed top-0 left-0 right-0 flex justify-between px-4 h-10`}
    >
      <span className='float-left flex items-center'>
        <Logo {...siteTheme} />
      </span>

      <span className='float-left mr-2 flex items-center'>
        {/* Other Buttons go here */}
        <div className="inline-flex">
          <button 
          className="
          bg-gray-300 
          hover:bg-gray-400 
          text-gray-800 
          font-bold 
          py-2 px-4 
          rounded-l"
          onClick={() => {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
          >
            Home
          </button>
          <button 
          className="
          bg-gray-300 
          hover:bg-gray-400 
          text-gray-800 
          font-bold 
          py-2 px-4"
          onClick={() => {
            navigate('/#ProjectHeader');
            // Handles scrolling to project header when still on home
            const element = document.getElementById('ProjectHeader');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          >
            Projects
          </button>
          <button 
          className="
          bg-gray-300 
          hover:bg-gray-400 
          text-gray-800 
          font-bold 
          py-2 px-4 
          rounded-r"
          onClick={() => {
            const element = document.getElementById('ContactInfo');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          >
            Contact Info
          </button>
        </div>
      </span>
    </div>
  );
};

export default AppBarCustom;