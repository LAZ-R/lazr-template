import * as LAZR from '../lazR/lazR.js'
import * as HEADER from '../components/header/header.component.js'
import * as FOOTER from '../components/footer/footer.component.js'

import * as PAGE_INDEX from '../pages/index/index.page.js'
import * as PAGE_ABOUT from '../pages/about/about.page.js'

const page = new URLSearchParams(window.location.search).get('page');
const MAIN = document.getElementById('main');

HEADER.renderView();
if (LAZR.BREAKPOINTS.isLaptopOrUp) {
    FOOTER.renderView();
}
switch (page) {
    case 'about':
        MAIN.appendChild(PAGE_ABOUT.renderPage());
        break;
    default:
        MAIN.appendChild(PAGE_INDEX.renderPage());
        break;
}
LAZR.DOM.setViewportSize();