import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import AppBarCustom from './components/navigation/AppBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <Box sx={{flexGrow: 1}}>
        <AppBar position='static'>
          <Button color="inherit">Login</Button>
        </AppBar>
      </Box> */}

      {/* <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppBarCustom>
          <button>Test</button>
          <button>Another Button</button>
        </AppBarCustom>
      </Box> */}

      <AppBarCustom />


      
    </>
  )
}

export default App
