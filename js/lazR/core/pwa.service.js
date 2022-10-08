import { VERSION_NUMBER, MAX_SCREEN_SIZE } from "../../data/pwa.data.js";



export const getAppVersionNumber = () => {
  return VERSION_NUMBER;
}

/* Breakpoints */
export const isPhone = window.innerWidth <= MAX_SCREEN_SIZE.Phone
export const isTablet = window.innerWidth > MAX_SCREEN_SIZE.Phone && window.innerWidth <= MAX_SCREEN_SIZE.Tablet
export const isTabletOrUp = window.innerWidth > MAX_SCREEN_SIZE.Phone
export const isLaptop = window.innerWidth > MAX_SCREEN_SIZE.Tablet && window.innerWidth <= MAX_SCREEN_SIZE.Laptop
export const isLaptopOrUp = window.innerWidth > MAX_SCREEN_SIZE.Tablet
export const isDesktop = window.innerWidth > MAX_SCREEN_SIZE.Laptop

/* Wake Lock */

// initialization : wake lock sentinel
let wakeLock = null;

if ('wakeLock' in navigator) {
    console.log("// Screen Wake Lock API supported 🎉");
}

/**
 * Request the screen to stay awake
 */
export const requestWakeLock = async () => {
    console.log('wakeLock requested');
    try {
        // initialization : wake lock sentinel
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => {
            console.log('Screen Wake Lock released:', wakeLock.released);
        });
        console.log('Screen Wake Lock released:', wakeLock.released);
    } catch (err) {
        console.error(err);
    }
};

document.addEventListener('visibilitychange', async () => {
    if (wakeLock !== null && document.visibilityState === 'visible') {
    wakeLock = await navigator.wakeLock.request('screen');
    }
});