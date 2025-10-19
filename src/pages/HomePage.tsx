import { useNavigate } from 'react-router-dom';
import BioContent from '../components/content/BioContent';
import AppBarCustom from '../components/navigation/AppBar'
import Footer from '../components/navigation/Footer';
import type { Theme } from '../interfaces/theme';
import { useEffect } from 'react';
import type { ProjectDictionary } from '../interfaces/projectDictionary';

function HomePage(props: { siteTheme: Theme, projectDictionary: ProjectDictionary }) {
  const { siteTheme, projectDictionary } = props;

  const projectKeys = Object.keys(projectDictionary);

  const navigate = useNavigate();

  // Handles clicking project button from separate page
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, []);

  return (
    <>
      <div className={`${siteTheme.mainBackgroundColor}
      ${siteTheme.mainBackgroundTextColor} font-[MartianMono] 
       py-10 px-5 w-screen`}>
        <AppBarCustom siteTheme={siteTheme} />
        {/* Body Div */}
        <div className='mt-4'>
          <h1 className='text-6xl mb-5 text-center'>About Myself</h1>

          <BioContent />
          {/* Projects Carousel Div */}
          <h1 className='text-6xl my-5 text-center' id='ProjectHeader'>Projects</h1>
          <div
            className={`mx-auto mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
          >
            {Object.values(projectDictionary).map((project, index) => (
              <div
                key={index}
                className={`${siteTheme.contentBoxBackgroundColor} ${siteTheme.contentBoxTextColor} shadow-md rounded p-8 cursor-pointer`}
                onClick={() => {
                  navigate(`/project/${projectKeys[index]}`);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
              >
                <img className={`border-4 ${siteTheme.imageBorderColor} rounded-lg`} src={project.previewData.image} alt={project.previewData.altText} />
                <h5 className='text-xl font-extrabold'>{project.title}</h5>
                {project.previewData.workInProgress && <h5 className='text-xl font-extrabold'>(Work in Progress)</h5>}
                <hr className='my-2' />
                <p className='text-sm font-extrabold'>{project.previewData.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer {...siteTheme} />
    </>
  )
}

export default HomePage