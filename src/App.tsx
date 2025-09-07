import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import SecondPage from './pages/SecondPage'
import Project from './pages/projects/Project'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/secondPage" element={<SecondPage />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
