import { useNavigate } from 'react-router-dom';
import BioContent from '../components/content/BioContent';
import AppBarCustom from '../components/navigation/AppBar'
import Footer from '../components/navigation/Footer';
import type { Theme } from '../interfaces/theme';
import { useEffect } from 'react';

function HomePage(props: { siteTheme: Theme, projectKeys: string[] }) {
  const { siteTheme, projectKeys } = props;

  const navigate = useNavigate();

  const projectData = [
    {
      title: "NR2003 Points Site",
      workInProgress: true,
      description: 'Site will display race data for NR2003 using a React Frontend and Express.js backend.',
      page: '',
      image: 'https://placehold.co/2560x1440',
      alt: ''
    },
    {
      title: 'OpenWeatherMap Flutter Site',
      workInProgress: true,
      description: 'Site will be made with Flutter using the OpenWeatherMap API.',
      page: '',
      image: 'https://placehold.co/1920x1080',
      alt: ''
    },
    // {
    //   title: 'Project 3',
    //   description: 'This is a brief description of Project 3.',
    //   page: '/secondPage',
    //   image: 'https://placehold.co/1920x1080',
    //   alt: ''
    // },
    // {
    //   title: 'Project 4',
    //   description: 'This is a brief description of Project 3.',
    //   page: '/secondPage',
    //   image: 'https://placehold.co/1920x1080',
    //   alt: ''
    // },
  ];

  projectData.map((project, index) => {
    project.page = `/project/${projectKeys[index]}`
  });

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
      <div className={`${siteTheme.mainBackgroundColor} dark:bg-black ${siteTheme.mainBackgroundTextColor} dark:text-white font-[MartianMono] py-10 px-5`}>
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
            {projectData.map((project, index) => (
              <div 
                key={index} 
                className={`${siteTheme.contentBoxBackgroundColor} ${siteTheme.contentBoxTextColor} shadow-md rounded p-8 cursor-pointer`}
                onClick={() => {
                  navigate(project.page);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
              >
                <img src={project.image} alt={project.alt} />
                <h5 className='text-xl'>{project.title}</h5>
                { project.workInProgress && <h5 className='text-xl'>(Work in Progress)</h5> }
                <hr className='my-2' />
                <p className='text-sm'>{project.description}</p>
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