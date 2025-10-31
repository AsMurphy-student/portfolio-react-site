import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Project from "./pages/projects/Project";
import { siteTheme } from "./data/siteTheme";
import { projectDictionary } from "./data/projectData";

function App() {
  return (
    <BrowserRouter basename="/portfolio-react-site">
      <Routes>
        <Route
          path="*"
          element={
            <HomePage
              siteTheme={siteTheme}
              projectDictionary={projectDictionary}
            />
          }
        />
        <Route
          path="/project/:projectname"
          element={
            <Project
              projectDictionary={projectDictionary}
              siteTheme={siteTheme}
            />
          }
        />

        {/* Custom 404 page for non-existent URLs */}
        {/* <Route path="/:path(*)" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
