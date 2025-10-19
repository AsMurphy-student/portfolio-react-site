import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Project from './pages/projects/Project'
import type { ProjectPageData } from './interfaces/projectPage'
import type { Theme } from './interfaces/theme'
import type { ProjectDictionary } from './interfaces/projectDictionary'

function App() {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const siteTheme: Theme = isDarkMode ? {
    accentColor: 'bg-[#4CAF50]',
    logoColor: 'text-white',
    navButtonColor: 'bg-[#3498DB]',
    navButtonHoverColor: 'hover:bg-[#45B3FA]',
    navButtonTextColor: 'text-gray-200',
    mainBackgroundColor: 'bg-[#333]',
    mainBackgroundTextColor: 'text-white',
    contentBoxBackgroundColor: 'bg-[#444]',
    contentBoxTextColor: 'text-gray-200',
    imageBorderColor: 'border-gray-600',
    footerBackgroundColor: 'bg-[#666]',
    footerTextColor: 'text-white',
  } : {
    accentColor: 'bg-[#8BC34A]',
    logoColor: 'text-black',
    navButtonColor: 'bg-[#FFA07A]',
    navButtonHoverColor: 'hover:bg-[#FFC080]',
    navButtonTextColor: 'text-[#032B44]',
    mainBackgroundColor: 'bg-[#E5E5EA]',
    mainBackgroundTextColor: 'text-black',
    contentBoxBackgroundColor: 'bg-[#C9C4CA]',
    contentBoxTextColor: 'text-[#444444]',
    imageBorderColor: 'border-gray-800',
    footerBackgroundColor: 'bg-[#032B44]',
    footerTextColor: 'text-[#F7F7F7]',
  };

  const nr2003PointsSiteData: ProjectPageData = {
    previewData: {
      title: "NR2003 Points Site",
      workInProgress: true,
      description: 'Site will display race data for NR2003 using a React Frontend and Express.js backend.',
      image: 'https://placehold.co/2560x1440',
      altText: ''
    },
    title: 'NR2003 Points Site',
    mainImageURL: 'https://placehold.co/1920x1080',
    mainImageAltText: 'Alt Text',
    description: 'React Test Description writing some more to test this rn ok it working',
    skillArray: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5", "Skill 6", "Skill 7"],
    websiteURL: 'https://placehold.co/1920x1080',
    gitRepoURL: 'https://placehold.co/1920x1080',
    showcaseImages: [
      {
        url: 'https://placehold.co/1920x1080',
        caption: 'Test Caption'
      },
      {
        url: 'https://placehold.co/1920x1080',
        caption: 'Test Caption'
      },
      {
        url: 'https://placehold.co/1920x1080',
        caption: 'Test Caption'
      },
      {
        url: 'https://placehold.co/1920x1080',
        caption: 'Test Caption'
      },
      {
        url: 'https://placehold.co/1920x1080',
        caption: 'Test Caption'
      },
      {
        url: 'https://placehold.co/1920x1080',
        caption: 'Test Caption'
      },
    ]
  };

  const openweatherflutterapp: ProjectPageData = {
    previewData: {
      title: 'OpenWeatherMap Flutter Site',
      workInProgress: true,
      description: 'Site will be made with Flutter using the OpenWeatherMap API.',
      image: 'https://placehold.co/1920x1080',
      altText: ''
    },
    title: 'OpenWeather Flutter App',
    mainImageURL: 'https://placehold.co/1920x1080',
    mainImageAltText: 'Alt Text',
    description: 'Flutter Test Description writing some more to test this rn ok it working',
    skillArray: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5", "Skill 6", "Skill 7"],
    websiteURL: 'https://placehold.co/1920x1080',
    gitRepoURL: 'https://placehold.co/1920x1080',
    showcaseImages: [
      {
        url: 'https://placehold.co/1920x1080',
        caption: 'Test Caption'
      },
      {
        url: 'https://placehold.co/1920x1080',
        caption: 'Test Caption'
      },
      {
        url: 'https://placehold.co/1920x1080',
        caption: 'Test Caption'
      },
      {
        url: 'https://placehold.co/1920x1080',
        caption: 'Test Caption'
      },
      {
        url: 'https://placehold.co/1920x1080',
        caption: 'Test Caption'
      },
      {
        url: 'https://placehold.co/1920x1080',
        caption: 'Test Caption'
      },
    ]
  };

  const projectDictionary: ProjectDictionary = {
    "nr2003-pts-site": nr2003PointsSiteData,
    "openweather-flutter-app": openweatherflutterapp,
  };

  return (
    <BrowserRouter basename='/portfolio-react-site'>
      <Routes>
        <Route path="*" element={<HomePage siteTheme={siteTheme} projectDictionary={projectDictionary} />} />
        <Route path="/project/:projectname" element={<Project projectDictionary={projectDictionary} siteTheme={siteTheme} />} />

        {/* Custom 404 page for non-existent URLs */}
        {/* <Route path="/:path(*)" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
