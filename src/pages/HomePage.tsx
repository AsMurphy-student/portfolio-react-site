import BioContent from '../components/content/BioContent';
import AppBarCustom from '../components/navigation/AppBar'
import './HomePage.css';

function HomePage() {
  return (
    <>
      <AppBarCustom />
      {/* Body Div */}
      <div style={{marginTop: '3rem'}}>
        <h1 style={{fontSize: 56}}>About Myself</h1>

        <BioContent />
        {/* Projects Carousel Div */}
        <div>
                    
        </div>
      </div>
    </>
  )
}

export default HomePage