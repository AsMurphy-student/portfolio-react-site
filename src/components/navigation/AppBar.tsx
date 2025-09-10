import * as React from 'react';
import Logo from '../content/Logo';

const AppBarCustom: React.FC = () => {

  return (
    <div className='fixed top-0 left-0 right-0 flex justify-between bg-red-600 px-4 h-10'
    >
      <span className='float-left flex items-center'>
        <Logo />
      </span>

      <span className='float-left mr-2 flex items-center'>
        {/* Other Buttons go here */}
      </span>
    </div>
  );
};

export default AppBarCustom;