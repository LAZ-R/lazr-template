import * as LAZR from '../../../lazR/lazR.js';

let isMenuVisible = false;

const onPrimaryFilter = LAZR.CSS.getFilterStringForHexValue(LAZR.CSS.getCssRootVariableValue('--on-primary'));

export const renderView = () => {

    const headerBurgerMenuButtonArea = LAZR.DOM.createElement('div', 'headerBurgerMenuButtonArea', 'header-burger-menu-button-area', ``);
    
    const headerBurgerMenuButton = LAZR.DOM.createElement('button', 'headerBurgerMenuButton', 'header-burger-menu-button', `
    <img src="./images/font-awsome/bars-solid.svg" class="burger-menu-header-button-icon" style="filter: ${onPrimaryFilter};" />
    `);
    headerBurgerMenuButton.onclick = () => isMenuVisible ? closeMenu() : openMenu();
    headerBurgerMenuButtonArea.appendChild(headerBurgerMenuButton);
    
    document.getElementById('header').appendChild(headerBurgerMenuButtonArea);

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
                        <img class="util-icon" src="./images/font-awsome/wand-magic-sparkles-solid.svg" alt="a magic wand with sparkles" style="filter: ${onPrimaryFilter};" />
                    </div>                    
                    <span>JSON Wizard</span>
                </a>` : ''}
                <a href="./?page=settings" class="burger-menu-page burger-menu-util">
                    <div class="util-icon-area">
                        <img class="util-icon" src="./images/font-awsome/gear-solid.svg" alt="gear" style="filter: ${onPrimaryFilter};" />
                    </div>                    
                    <span>Settings</span>
                </a>
                <a href="./?page=about" class="burger-menu-page burger-menu-util">
                    <div class="util-icon-area">
                        <img class="util-icon" src="./images/font-awsome/circle-info-solid.svg" alt="information mark" style="filter: ${onPrimaryFilter};" />
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
    
    document.getElementById('headerBurgerMenuButton').style.transition = 'opacity .1s linear';
    document.getElementById('headerBurgerMenuButton').style.opacity = '0%';
    setTimeout(() => {
        document.getElementById('headerBurgerMenuButton').innerHTML = `
            <img src="./images/font-awsome/bars-solid.svg" class="burger-menu-header-button-icon" style="filter: ${onPrimaryFilter};" />`;
        document.getElementById('headerBurgerMenuButton').style.opacity = '100%';
    }, 100);
    
    LAZR.BREAKPOINTS.isTablet
        ? document.getElementById('burgerMenu').style.right = '-40%'
        : document.getElementById('burgerMenu').style.right = '-70%';
    setTimeout(() => {
        document.getElementById('burgerMenuBackground').style.display = 'none';
    }, 200);

    isMenuVisible = false;
}
export const openMenu = () => {
    document.getElementById('burgerMenuBackground').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('burgerMenuBackground').style.opacity = '50%';
    }, 10);

    document.getElementById('headerBurgerMenuButton').style.transition = 'opacity .2s linear';
    document.getElementById('headerBurgerMenuButton').style.opacity = '0%';
    setTimeout(() => {
        document.getElementById('headerBurgerMenuButton').innerHTML = `
            <img src="./images/font-awsome/xmark-solid.svg" class="burger-menu-header-button-icon" style="filter: ${onPrimaryFilter}" />`;
        document.getElementById('headerBurgerMenuButton').style.opacity = '100%';
    }, 200);
    
    document.getElementById('burgerMenu').style.right = 0;
    
    isMenuVisible = true;
}