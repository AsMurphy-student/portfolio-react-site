import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import SecondPage from './pages/SecondPage'
import Project from './pages/projects/Project'
import type { projectPageData } from './interfaces/projectPage'
import type { Theme } from './interfaces/theme'

function App() {
  const siteTheme: Theme = {
    accentColor: 'bg-gray-400',
    mainBackgroundColor: 'bg-cyan-100',
    mainBackgroundTextColor: 'text-black',
    contentBoxBackgroundColor: 'bg-gray-800',
    contentBoxBackgroundTextColor: 'text-orange-100',
    imageBorderColor: 'border-gray-800'
  }

  const nr2003PointsSiteData: projectPageData = {
    title: 'NR2003 Points Site',
    mainImageURL: 'https://placehold.co/1920x1080',
    mainImageAltText: 'Alt Text',
    description: 'Test Description writing some more to test this rn ok it working',
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

  return (
    <BrowserRouter basename='/portfolio-react-site'>
      <Routes>
        <Route path="*" element={<HomePage {...siteTheme} />} />
        <Route path="/secondPage" element={<SecondPage {...siteTheme} />} />
        <Route path="/project" element={<Project projectData={nr2003PointsSiteData} siteTheme={siteTheme} />} />

        {/* Custom 404 page for non-existent URLs */}
        {/* <Route path="/:path(*)" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
