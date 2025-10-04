import Logo from '../content/Logo';
import type { Theme } from '../../interfaces/theme';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from '../utils/Dimensions';
import { useState } from 'react';

const AppBarCustom = (props: { siteTheme: Theme }) => {
  const { siteTheme } = props;

  const navigate = useNavigate();

  const { width } = useWindowDimensions();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={`${siteTheme.accentColor} fixed top-0 left-0 right-0 flex justify-between px-4 h-10 w-screen`}
      >
        <span className='float-left flex items-center'>
          <Logo {...siteTheme} />
        </span>

        {
          width <= 680
          ?
          (
            <span className='float-right mr-2 flex items-center'>
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
                  setMenuOpen(!menuOpen);
                }}
                >
                  Menu
                </button>
              </div>
            </span>
          )
          :
          (
            <span className='float-left mr-2 flex items-center'>
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
          )
        }
      </div>
      { menuOpen && 
      <div className={`${siteTheme.accentColor} fixed top-10 left-0 right-0 flex justify-between px-4 w-screen`}>
        <span className='float-left mr-2 flex items-center'>
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
      }
    </>
  );
};

export default AppBarCustom;