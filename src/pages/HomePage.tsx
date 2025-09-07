import { useNavigate } from 'react-router-dom';
import BioContent from '../components/content/BioContent';
import AppBarCustom from '../components/navigation/AppBar'
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const projectData = [
    {
      title: 'Project 1',
      description: 'This is a brief description of Project 1.',
      page: '/secondPage'
    },
    {
      title: 'Project 2',
      description: 'This is a brief description of Project 2.',
      page: '/secondPage'
    },
    {
      title: 'Project 3',
      description: 'This is a brief description of Project 3.',
      page: '/secondPage'
    },
    {
      title: 'Project 4',
      description: 'This is a brief description of Project 3.',
      page: '/secondPage'
    },
  ];


  return (
    <>
      <AppBarCustom />
      {/* Body Div */}
      <div style={{marginTop: '3rem'}}>
        <h1 className='text-[52px]'>About Myself</h1>

        <BioContent />
        {/* Projects Carousel Div */}
        <div
          className={`mx-auto mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
        >
          {projectData.map((project, index) => (
            <div 
              key={index} 
              className='bg-black shadow-md rounded p-8 cursor-pointer'
              onClick={() => {
                navigate(project.page);
              }}
            >
              <img src="https://placehold.co/1920x1080" alt="" />
              <h5 className='text-lg'>{project.title}</h5>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default HomePage