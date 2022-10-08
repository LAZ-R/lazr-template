import * as LAZR from '../../../lazR/lazR.js';

let isMenuVisible = false;

export const renderView = () => {
    const headerBurgerMenuButton = LAZR.DOM.createElement('button', 'headerBurgerMenuButton', 'header-burger-menu-button', '☰');
    headerBurgerMenuButton.onclick = () => isMenuVisible ? closeMenu() : openMenu();
    document.getElementById('header').appendChild(headerBurgerMenuButton);

    const burgerMenuBackground = LAZR.DOM.createElement('div', 'burgerMenuBackground', 'burger-menu-background', '');
    burgerMenuBackground.onclick = () => closeMenu();
    document.getElementById('body').appendChild(burgerMenuBackground);

    const burgerMenu = LAZR.DOM.createElement('div', 'burgerMenu', 'burger-menu', `
        <div class="burger-menu-links">
            <a href="./" class="burger-menu-link">Home</a>
            <a href="./?page=about" class="burger-menu-link">About</a>
        </div>
        <div class="burger-menu-about">
            <span>v${LAZR.getAppVersionNumber()}</span>
            <span>&copy; ${new Date().getFullYear()} • laz_R</span>
        </div>`);
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