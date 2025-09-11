import AppBarCustom from '../components/navigation/AppBar'
import type { Theme } from '../interfaces/theme'

function SecondPage(siteTheme: Theme) {
  return (
    <>
      <AppBarCustom {...siteTheme} />
      <h1>Second Page</h1>
    </>
  )
}

export default SecondPage