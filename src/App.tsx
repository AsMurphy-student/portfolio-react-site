import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Project from './pages/projects/Project'
import type { ProjectPageData } from './interfaces/projectPage'
import type { Theme } from './interfaces/theme'
import type { ProjectDictionary } from './interfaces/projectDictionary'

function App() {
  const siteTheme: Theme = {
    accentColor: 'bg-gray-400',
    logoColor: 'text-black',
    accentTextColor: 'text-black',
    mainBackgroundColor: 'bg-cyan-100',
    mainBackgroundTextColor: 'text-black',
    contentBoxBackgroundColor: 'bg-gray-800',
    contentBoxTextColor: 'text-orange-100',
    imageBorderColor: 'border-gray-800',
    footerBackgroundColor: 'bg-gray-800',
    footerTextColor: 'text-white'
  }

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
