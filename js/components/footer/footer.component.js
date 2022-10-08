import * as LAZR from '../../lazR/lazR.js';

export const renderView = () => {
    document.getElementById('footer').innerHTML =
    `&copy; ${new Date().getFullYear()} - v${LAZR.getAppVersionNumber()} - <a href="./about.html">About</a>`;
}