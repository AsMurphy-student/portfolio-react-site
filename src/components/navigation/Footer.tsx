import Logo from "../content/Logo";

const Footer = () => {
    return (
        <div className='bg-gray-800 min-h-64 text-white font-[MartianMono]'>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div>
                <Logo />
                <p>test</p>
            </div>
            <p>test</p>
            <p>test</p>
          </div>
        </div>
    );
}

export default Footer;
