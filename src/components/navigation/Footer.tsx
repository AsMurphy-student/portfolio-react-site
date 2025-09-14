import type { Theme } from "../../interfaces/theme";

const Footer = (siteTheme: Theme) => {
    return (
        <div className={`${siteTheme.footerBackgroundColor} ${siteTheme.footerTextColor} min-h-64 font-[MartianMono]`}>
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 text-center xl:text-left">
            <div id="ContactInfo">
              <p>test</p>
            </div>
            <div>
              <p>test</p>
            </div>
            <div>
              <p>test</p>
            </div>
          </div>
        </div>
    );
}

export default Footer;
