import * as React from 'react';

interface Props {};

const AppBarCustom: React.FC<Props> = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#b90606ff',
    padding: '8px 2px',
    // paddingTop: 0,
    height: '50px'
  }}>
    <span style={{ float: 'left', marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
      <h1
        style={{
          fontSize: `${4}rem`,
          fontFamily: "'MartianRobotics'",
          color: 'black',
          margin: 0,
          padding: 0,
          textAlign: 'left'
        }}
      >
        Ashton Murphy
      </h1>
    </span>

    <span style={{ float: 'right', marginRight: '10px', display: 'flex', alignItems: 'center' }}>
      <button>Button 3</button>
      <button>Button 4</button>
    </span>
  </div>
);

export default AppBarCustom;