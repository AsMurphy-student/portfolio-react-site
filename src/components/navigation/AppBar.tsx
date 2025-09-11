import Logo from '../content/Logo';
import type { Theme } from '../../interfaces/theme';

const AppBarCustom = (siteTheme: Theme) => {

  return (
    <div className={`${siteTheme.accentColor} fixed top-0 left-0 right-0 flex justify-between px-4 h-10`}
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