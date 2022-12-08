import Logo from "@components/logo";
import headerData from "../../data/general/header.json";

const Header = () => (
    <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
        <div className="container">
            <div className="header-inner">
                <div className="header-left">
                    <Logo logo={headerData.logo} />
                </div>
                <div className="header-right">
                    <div
                        id="my_switcher"
                        className="setting-option my_switcher"
                    >
                        ColorSwitcher
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
