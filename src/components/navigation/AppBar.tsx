import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const AppBarCustom: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: '#b90606ff',
      padding: '8px 2px',
      height: '2rem'
    }}>
      <span style={{ float: 'left', marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
        <h1
          style={{
            fontSize: `${2}rem`,
            fontFamily: "'MartianRobotics'",
            color: 'black',
            margin: 0,
            padding: 0,
            textAlign: 'left',
            cursor: 'pointer'
          }}
          onClick={() => {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
        >
          Ashton Murphy
        </h1>
      </span>

      <span style={{ float: 'right', marginRight: '10px', display: 'flex', alignItems: 'center' }}>
        {/* Other Buttons go here */}
      </span>
    </div>
  );
};

export default AppBarCustom;