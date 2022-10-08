import * as SERVICE_PWA from './core/pwa.service.js'
import * as CORE_MATHS from './core/maths/maths.js'
import * as CORE_DOM from './core/DOM/DOM.js'
import * as CORE_CSS from './core/css/css.js'

/* APP Data */
export const getAppVersionNumber = () => SERVICE_PWA.getAppVersionNumber();

/* Breakpoints */
export const BREAKPOINTS = {
    isPhone: SERVICE_PWA.isPhone,
    isTablet: SERVICE_PWA.isTablet,
    isTabletOrUp: SERVICE_PWA.isTabletOrUp,
    isLaptop: SERVICE_PWA.isLaptop,
    isLaptopOrUp: SERVICE_PWA.isLaptopOrUp,
    isDesktop: SERVICE_PWA.isDesktop
}

/* CSS */
export const CSS = {
    getCssRootVariableValue: (variableName) => CORE_CSS.getCssRootVariableValue(variableName),
    applyColorFilterOnElement: (element, hexValue) => CORE_CSS.applyColorFilterOnElement(element,hexValue)
}

/* DOM */
export const DOM = {
    setViewportSize: () => CORE_DOM.setViewportSize(),
    setHTMLTitle: (pageTitle) => CORE_DOM.setHTMLTitle(pageTitle),
    htmlStringToElement: (html) => CORE_DOM.htmlStringToElement(html),
    createElement: (element, id, className, innerHtml) => CORE_DOM.createElement(element, id, className, innerHtml),
    createImgElement: (id, className, src, alt) => CORE_DOM.createImgElement(id, className, src, alt),
}

/* Maths */
export const MATHS = {
    getRandomIntegerBetween: (min, max) => CORE_MATHS.getRandomIntegerBetween(min, max),
    roundTo: (n, digits) => CORE_MATHS.roundTo(n, digits)
};

export const requestWakeLock = async () => await SERVICE_PWA.requestWakeLock();
