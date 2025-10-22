import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Project from './pages/projects/Project'
import type { ProjectPageData } from './interfaces/projectPage'
import type { Theme } from './interfaces/theme'
import type { ProjectDictionary } from './interfaces/projectDictionary'

function App() {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const siteTheme: Theme = isDarkMode ? {
    // Dark Theme
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
    // Light Theme
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
    date: new Date(),
    mainImageURL: 'https://placehold.co/1920x1080',
    mainImageAltText: 'Alt Text',
    description: 'This project will use ExpressJS for the backend while also using MongoDB for race data. The front end will also be made using React TS.',
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
    date: new Date(),
    mainImageURL: 'https://placehold.co/1920x1080',
    mainImageAltText: 'Alt Text',
    description: 'This app will use the OpenWeather API to display weather data and will be designed with mobile devices in mind. May also ensure it is responsive as a desktop app as well.',
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

  const panic: ProjectPageData = {
    previewData: {
      title: 'Pan-ic',
      workInProgress: false,
      description: 'A MonoGame project created in a group setting in a Game Design Class.',
      image: '/portfolio-react-site/panic-main-image.jpg',
      altText: 'Showcases the main menu of Pan-ic'
    },
    title: 'Pan-ic',
    date: new Date('2023-5-1'),
    mainImageURL: '/portfolio-react-site/panic-main-image.jpg',
    mainImageAltText: 'Showcases the main menu of Pan-ic',
    description: 'In this collaborative C# MonoGame project, I worked alongside three team members to design the game\'s architecture. As part of my role in data management, I focused on optimizing enemy and level data structures for efficient loading and manipulation. Additionally, I developed a simple, but effective, Windows Forms tool that streamlines the process of creating levels, allowing designers to focus on their creative vision.',
    skillArray: ["Collaboration", "Design Thinking", "Data Management", "C# Programming", "Problem Solving", "User-Centered Design"],
    gitRepoURL: 'https://github.com/Funklax/Group-5-Whatever-Forever',
    showcaseImages: [
      {
        url: '/portfolio-react-site/chef-running.gif',
        caption: 'Protagonist Chef Running Animation.'
      },
      {
        url: '/portfolio-react-site/chef-attack.gif',
        caption: 'Protagonist Chef Attacking Animation.'
      },
      {
        url: '/portfolio-react-site/bullet-bounce.gif',
        caption: 'Protagonist Chef Attacking with Bullets Bouncing off pan.'
      },
      {
        url: '/portfolio-react-site/bullets-flying.gif',
        caption: 'Protagonist Chef Dodging Enemy Bullets.'
      },
      {
        url: '/portfolio-react-site/enemy-animations.gif',
        caption: 'Showcases the enemy animations. In this case the middle animation is the enemy exploding upon death.'
      },
    ],
  };

  const projectDictionary: ProjectDictionary = {
    "nr2003-pts-site": nr2003PointsSiteData,
    "openweather-flutter-app": openweatherflutterapp,
    "pan-ic": panic,
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
