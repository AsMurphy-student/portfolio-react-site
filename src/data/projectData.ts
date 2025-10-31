import type { ProjectDictionary } from "../interfaces/projectDictionary";
import type { ProjectPageData } from "../interfaces/projectPage";

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
    title: 'NR2003 Championship Manager Flutter Desktop App',
    workInProgress: true,
    description: 'A Flutter App utilizing a local MongoDB Database for local, offline management of championship season in NR2003. This app will also utilize the NR2003 Replay Analyzer to generate in depth race statistics along with championship statistics.',
    image: 'https://placehold.co/1920x1080',
    altText: ''
  },
  title: 'NR2003 Championship Manager Flutter Desktop App',
  date: new Date(),
  mainImageURL: 'https://placehold.co/1920x1080',
  mainImageAltText: 'Alt Text',
  description: 'I\'ve seen a lot of different championship programs for NR2003 and have even made some of my own. This one I am developing will be a little different as it will utilize reports from the very old NR2003 Replay Analyzer to generate highly in depth in race statistics along with championship statistics. More info as development continues will be updated here.',
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
    image: '/portfolio-react-site/panic-preview-image.jpg',
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

export const projectDictionary: ProjectDictionary = {
  "nr2003-pts-site": nr2003PointsSiteData,
  "openweather-flutter-app": openweatherflutterapp,
  "pan-ic": panic,
};