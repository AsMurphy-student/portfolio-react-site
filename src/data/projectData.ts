import type { ProjectDictionary } from "../interfaces/projectDictionary";
import type { ProjectPageData } from "../interfaces/projectPage";

const nr2003raceanalysisapp: ProjectPageData = {
  previewData: {
    title: "NR2003 Race Analysis App",
    workInProgress: true,
    description:
      "This project is a expanded version of my original NR2003 Points Site. This is instead an offline desktop app which utilizes reports generated from NR2003 Replay Analyzer (NR2003RA) to generate indepth visualizations and reports of races. This project uses the Tauri Framework with SQLite.",
    image: "https://placehold.co/1920x1080",
    altText: "Placeholder Image",
  },
  title: "NR2003 Race Analysis App",
  date: new Date(),
  mainImageURL: "https://placehold.co/1920x1080",
  mainImageAltText: "Placeholder Image",
  description:
    "For this personal project, I am creating an in depth tool for analyzing races from Nascar Racing 2003 which utilizes reports generated from NR2003 Replay Analyzer. This app will also feature championship points tracking among other features that other points managers have which use the exported standings at the end of the race. This tool utilizes the replay of the race and thus can have much more information on the races themselves. This app uses the Tauri Framework with React as the front-end, Rust as the back-end, and SQLite for data persistence which will utilize an object-oriented database due to the complex nature of the data being stored.",
  skillArray: [
    "Full Stack Development",
    "Tauri",
    "React",
    "SQLite",
    "OODB",
    "Typescript",
    "Problem Solving",
    "Coding Standards",
    "Technical Design",
    "Project Planning",
  ],
  gitRepoURL: "https://github.com/AsMurphy-student/nr2003-race-analyzer-app",
  showcaseImages: [
    {
      url: "https://placehold.co/1920x1080",
      caption: "Placeholder Image",
    },
    {
      url: "https://placehold.co/1920x1080",
      caption: "Placeholder Image",
    },
    {
      url: "https://placehold.co/1920x1080",
      caption: "Placeholder Image",
    },
    {
      url: "https://placehold.co/1920x1080",
      caption: "Placeholder Image",
    },
    {
      url: "https://placehold.co/1920x1080",
      caption: "Placeholder Image",
    },
  ],
};

const nr2003PointsSiteData: ProjectPageData = {
  previewData: {
    title: "NR2003 Points Site",
    workInProgress: false,
    description:
      "This project is a NR2003 Pts manager which parses race data export from Nascar Racing 2003 and displays data on a season. The site uses Handlebars with React for the Front End, ExpressJS with Node for the Back End, and MongoDB using NoSQL as the Database.",
    image: "/portfolio-react-site/nr2003-pts-site/championship-overview.png",
    altText: "Showcases the main overview page for a championship",
  },
  title: "NR2003 Points Site",
  date: new Date("2025-12-1"),
  mainImageURL: "/portfolio-react-site/nr2003-pts-site/championship-overview.png",
  mainImageAltText: "Showcases the main overview page for a championship",
  description:
    "In this academic project, I developed a comprehensive points tracking website for NASCAR Racing 2003. Using Handlebars as my front-end templating engine and React components when needed, along with ExpressJS as the back end framework and MongoDB to manage data efficiently, I created an intuitive and visually appealing platform that allows users to track race-by-race performance across a championship. The project involved designing a parsing solution to extract relevant information from HTML files exported from the game, ensuring efficient and effective data retrieval.",
  skillArray: [
    "Project Planning",
    "Problem Solving",
    "Technical Design",
    "Coding Standards",
    "Full Stack Development",
    "Node",
    "ExpressJS",
    "Handlebars",
    "React",
    "MongoDB",
    "NoSQL",
    "JavaScript",
  ],
  websiteURL: "https://nr2003-pts-site-87c88debf966.herokuapp.com/",
  gitRepoURL: "https://github.com/AsMurphy-student/nr2003-pts-site",
  showcaseImages: [
    {
      url: "/portfolio-react-site/nr2003-pts-site/championship-overview.png",
      caption: "Showcases the main overview page for a championship.",
    },
    {
      url: "/portfolio-react-site/nr2003-pts-site/driver-overview.png",
      caption: "Showcases the driver overview page, showing stats on a specific driver.",
    },
    {
      url: "/portfolio-react-site/nr2003-pts-site/race-overview.png",
      caption: "Showcases the race overview page, which shows stats on a specific race.",
    },
    {
      url: "/portfolio-react-site/nr2003-pts-site/championship-list.png",
      caption: "Showcases the championship list page where users can create championships and navigate to the overview pages of them.",
    },
    {
      url: "/portfolio-react-site/nr2003-pts-site/change-password.png",
      caption: "The Change Password Form that is in the site.",
    },
  ],
};

const biblecompanion: ProjectPageData = {
  previewData: {
    title: "Bible Companion Flutter App",
    workInProgress: false,
    description:
      "This project is a Bible Reading App which I have named 'Bible Companion'. This app lets you choose a translation of the bible, along with a commentary as well. It features per chapter notes and a reflection checklist that can be changed. This app was created using Flutter and Dart.",
    image: "/portfolio-react-site/bible-companion/reading.png",
    altText: "Showcases the Main Reading Page of the App",
  },
  title: "Bible Companion Flutter App",
  date: new Date("2025-12-1"),
  mainImageURL: "/portfolio-react-site/bible-companion/reading.png",
  mainImageAltText: "Showcases the Main Reading Page of the App",
  description:
    "As part of my portfolio, I developed the Bible Reader Mobile Flutter App, a user-friendly mobile application that provides easy access to various Bible translations. Using Flutter as the development framework, I designed an intuitive interface with a simple and straightforward design that makes it effortless for users to navigate and find their desired content. Through iterative design processes, I refined the app's usability, ensuring a seamless experience for readers of all levels. By leveraging the FreeBible API, I enabled users to access diverse Bible translations, further enhancing the app's value as a valuable resource for spiritual growth and exploration.",
  skillArray: [
    "Project Planning",
    "Problem Solving",
    "Technical Design",
    "Coding Standards",
    "Flutter",
    "Dart",
    "Mobile Development",
  ],
  gitRepoURL: "https://github.com/AsMurphy-student/Bible-Companion",
  showcaseImages: [
    {
      url: "/portfolio-react-site/bible-companion/reading.png",
      caption: "Showcases the Main Reading Page of the App.",
    },
    {
      url: "/portfolio-react-site/bible-companion/book-selection.png",
      caption: "Showcases the Main Drawer for picking a Book of the Bible.",
    },
    {
      url: "/portfolio-react-site/bible-companion/chapter-selection.png",
      caption: "Showcases the End Drawer for picking a chapter of the selected Book.",
    },
    {
      url: "/portfolio-react-site/bible-companion/commentary.png",
      caption: "Showcases the Commentary Page for the current Book and chapter.",
    },
    {
      url: "/portfolio-react-site/bible-companion/reflection.png",
      caption: "Showcases the Reflection Page where the user can update it so that it suits their needs.",
    },
    {
      url: "/portfolio-react-site/bible-companion/notes.png",
      caption: "Showcases the Notes Page where the user can record notes which is saved per chapter. This notes panel updates when a different chapter is selected.",
    },
    {
      url: "/portfolio-react-site/bible-companion/settings.png",
      caption: "Showcases the Settings Page where the user can change the translation and commentary.",
    },
  ],
};

const panic: ProjectPageData = {
  previewData: {
    title: "Pan-ic",
    workInProgress: false,
    description:
      "A MonoGame project created in a group setting in a Game Design Class.",
    image: "/portfolio-react-site/panic/panic-preview-image.jpg",
    altText: "Showcases the main menu of Pan-ic",
  },
  title: "Pan-ic",
  date: new Date("2023-5-1"),
  mainImageURL: "/portfolio-react-site/panic/panic-main-image.jpg",
  mainImageAltText: "Showcases the main menu of Pan-ic",
  description:
    "In this collaborative C# MonoGame project, I worked alongside three team members to design the game's architecture. As part of my role in data management, I focused on optimizing enemy and level data structures for efficient loading and manipulation. Additionally, I developed a simple, but effective, Windows Forms tool that streamlines the process of creating levels, allowing designers to focus on their creative vision.",
  skillArray: [
    "Collaboration",
    "Design Thinking",
    "Data Management",
    "C# Programming",
    "Problem Solving",
    "User-Centered Design",
  ],
  gitRepoURL: "https://github.com/Funklax/Group-5-Whatever-Forever",
  showcaseImages: [
    {
      url: "/portfolio-react-site/panic/chef-running.gif",
      caption: "Protagonist Chef Running Animation.",
    },
    {
      url: "/portfolio-react-site/panic/chef-attack.gif",
      caption: "Protagonist Chef Attacking Animation.",
    },
    {
      url: "/portfolio-react-site/panic/bullet-bounce.gif",
      caption: "Protagonist Chef Attacking with Bullets Bouncing off pan.",
    },
    {
      url: "/portfolio-react-site/panic/bullets-flying.gif",
      caption: "Protagonist Chef Dodging Enemy Bullets.",
    },
    {
      url: "/portfolio-react-site/panic/enemy-animations.gif",
      caption:
        "Showcases the enemy animations. In this case the middle animation is the enemy exploding upon death.",
    },
  ],
};

export const projectDictionary: ProjectDictionary = {
  "nr2003-race-analysis-app": nr2003raceanalysisapp,
  "nr2003-pts-site": nr2003PointsSiteData,
  "bible-companion": biblecompanion,
  "pan-ic": panic,
};
