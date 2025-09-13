import { useLocation } from 'react-router-dom';
import AppBarCustom from '../../components/navigation/AppBar'
import Footer from '../../components/navigation/Footer'
import type { Theme } from '../../interfaces/theme'
import type { ProjectDictionary } from '../../interfaces/projectDictionary';

function Project(props: {projectDictionary: ProjectDictionary, siteTheme: Theme}) {
  const {projectDictionary, siteTheme} = props;
  const location = useLocation();

  const projectKey = location.pathname.slice(9);
  const projectData = projectDictionary[projectKey];

  return (
    <>
      <div className={`${siteTheme.mainBackgroundColor} dark:bg-black ${siteTheme.mainBackgroundTextColor} dark:text-white font-[MartianMono] pt-10 px-5`}>
        <AppBarCustom {...siteTheme} />
        {/* Body Div */}
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-5'>
          {/* Project Image and Skills Left Aligned */}
          <div className='grid grid-cols-1 gap-5'>
            <h1 className='text-center text-6xl'>{projectData.title}</h1>
            <img src={projectData.mainImageURL} alt={projectData.mainImageAltText} className={`rounded-xl border-8 border-solid ${siteTheme.imageBorderColor}`} />

            <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-x-4'>
              {projectData.skillArray.map((element) => (
                <p key={element} className='bg-cyan-500 rounded-md text-center sm:text-left m-2 p-1 border-2 border-solid'>{element}</p>
              ))}
            </div>

            <div className='grid grid-cols-2 gap-10'>
              <button className={`${siteTheme.contentBoxBackgroundColor} ${siteTheme.contentBoxBackgroundTextColor} rounded-md`} p-2 cursor-pointer onClick={() => window.open(projectData.websiteURL, '_blank')}>View Website</button>
              <button className={`${siteTheme.contentBoxBackgroundColor} ${siteTheme.contentBoxBackgroundTextColor} rounded-md`} p-2 cursor-pointer onClick={() => window.open(projectData.gitRepoURL, '_blank')}>View on Github</button>
            </div>
          </div>
          {/* Project Description */}
          <div className='flex h-full flex-col'>
            <h1 className='text-center text-6xl mt-5 lg:mt-0'>Project Description</h1>
            <div className='flex flex-1 items-center'>
              <p className='text-center text-3xl/12 p-4'>{projectData.description}</p>
            </div>
          </div>
        </div>
        {/* Project Images Grid */}
        <h1 className='text-center text-6xl mt-5'>Project Images</h1>
        <div className={`mx-auto mt-5 pb-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
            {projectData.showcaseImages.map((image, index) => (
                <div key={index} className={`${siteTheme.contentBoxBackgroundColor} ${siteTheme.contentBoxBackgroundTextColor} rounded-lg`}>
                  <img src={image.url} alt="" className='p-2 rounded-xl'/>
                  <p className='my-2'>{image.caption}</p>
                </div>
              ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Project
