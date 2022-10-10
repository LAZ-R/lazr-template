import * as LAZR from '../../../lazR/lazR.js';

let isMenuVisible = false;

export const renderView = () => {
    const onPrimaryFilter = LAZR.CSS.getFilterStringForHexValue(LAZR.CSS.getCssRootVariableValue('--on-primary'));

    const headerBurgerMenuButton = LAZR.DOM.createElement('button', 'headerBurgerMenuButton', 'header-burger-menu-button', '☰');
    headerBurgerMenuButton.onclick = () => isMenuVisible ? closeMenu() : openMenu();
    document.getElementById('header').appendChild(headerBurgerMenuButton);

    const burgerMenuBackground = LAZR.DOM.createElement('div', 'burgerMenuBackground', 'burger-menu-background', '');
    burgerMenuBackground.onclick = () => closeMenu();
    document.getElementById('body').appendChild(burgerMenuBackground);

    const burgerMenu = LAZR.DOM.createElement('div', 'burgerMenu', 'burger-menu', `
        <div class="burger-menu-pages">
            <a href="./" class="burger-menu-page">Home</a>
        </div>
        <div class="burger-menu-bottom">
            <div class="burger-menu-utils">   
                ${LAZR.STORAGE.getUserSetting('jsonWizard').isActive ? `
                <a href="./?page=jsonWizard" class="burger-menu-page burger-menu-util">
                    <div class="util-icon-area">
                        <img class="util-icon" src="./images/wand-magic-sparkles-solid.svg" alt="a magic wand with sparkles" style="filter: ${onPrimaryFilter};" />
                    </div>                    
                    <span>JSON Wizard</span>
                </a>` : ''}
                <a href="./?page=settings" class="burger-menu-page burger-menu-util">
                    <div class="util-icon-area">
                        <img class="util-icon" src="./images/gear-solid.svg" alt="gear" style="filter: ${onPrimaryFilter};" />
                    </div>                    
                    <span>Settings</span>
                </a>
                <a href="./?page=about" class="burger-menu-page burger-menu-util">
                    <div class="util-icon-area">
                        <img class="util-icon" src="./images/circle-info-solid.svg" alt="information mark" style="filter: ${onPrimaryFilter};" />
                    </div>                    
                    <span>About</span>
                </a>
            </div>
            <div class="burger-menu-app-data">
                <span>v${LAZR.APP_DATA.getAppVersionNumber()}</span>
                <span>&copy; ${new Date().getFullYear()} • laz_R</span>
            </div>
        </div>
        `);
    document.getElementById('body').appendChild(burgerMenu);
}

export const closeMenu = () => {
    document.getElementById('burgerMenuBackground').style.opacity = '0%';
    document.getElementById('headerBurgerMenuButton').innerHTML = '☰';
    LAZR.BREAKPOINTS.isTablet
        ? document.getElementById('burgerMenu').style.right = '-40%'
        : document.getElementById('burgerMenu').style.right = '-60%';
    setTimeout(() => {
        document.getElementById('burgerMenuBackground').style.display = 'none';
    }, 200);
    isMenuVisible = false;
}
export const openMenu = () => {
    document.getElementById('burgerMenuBackground').style.display = 'flex';
    document.getElementById('headerBurgerMenuButton').innerHTML = '☒';
    document.getElementById('burgerMenu').style.right = 0;
    setTimeout(() => {
        document.getElementById('burgerMenuBackground').style.opacity = '50%';
    }, 10);
    isMenuVisible = true;
}