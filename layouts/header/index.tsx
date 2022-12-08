import Logo from "@components/logo";
import MainMenu from "@components/menu/main-menu";
import ColorSwitcher from "@components/color-switcher";
import headerData from "../../data/general/header.json";
import menuData from "../../data/general/menu.json";

const Header = () => (
    <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
        <div className="container">
            <div className="header-inner">
                <div className="header-left">
                    <Logo logo={headerData.logo} />
                    <div className="mainmenu-wrapper">
                        <nav
                            id="sideNav"
                            className="mainmenu-nav"
                        >
                            <MainMenu menu={menuData} />
                        </nav>
                    </div>
                </div>
                <div className="header-right">
                    <div
                        id="my_switcher"
                        className="setting-option my_switcher"
                    >
                        <ColorSwitcher />
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
