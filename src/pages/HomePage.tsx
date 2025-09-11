import { useNavigate } from 'react-router-dom';
import BioContent from '../components/content/BioContent';
import AppBarCustom from '../components/navigation/AppBar'
import Footer from '../components/navigation/Footer';

function HomePage() {
  const navigate = useNavigate();

  const projectData = [
    {
      title: 'NR2003 Points Site (Work in Progress)',
      description: 'Site will display race data for NR2003 using a React Frontend and Express.js backend.',
      page: '/project',
      image: 'https://placehold.co/2560x1440',
      alt: ''
    },
    {
      title: 'OpenWeatherMap Flutter Site (Work in Progress)',
      description: 'Site will be made with Flutter using the OpenWeatherMap API.',
      page: '/secondPage',
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


  return (
    <>
      <div className='bg-cyan-100 dark:bg-black text-black dark:text-white py-10 px-5'>
        <AppBarCustom />
        {/* Body Div */}
        <div className='mt-4'>
          <h1 className='text-6xl mb-5 text-center'>About Myself</h1>

          <BioContent />
          {/* Projects Carousel Div */}
          <h1 className='text-6xl my-5 text-center'>Projects</h1>
          <div
            className={`mx-auto mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
          >
            {projectData.map((project, index) => (
              <div 
                key={index} 
                className='bg-gray-800 shadow-md rounded p-8 cursor-pointer'
                onClick={() => {
                  navigate(project.page);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
              >
                <img src={project.image} alt={project.alt} />
                <h5 className='text-lg'>{project.title}</h5>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </>
  )
}

export default HomePage