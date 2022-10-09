const STORAGE = localStorage;
const appShortName = 'lzrTmplt';

if (STORAGE.getItem(`${appShortName}FirstTime`) === null) {
    STORAGE.setItem(`${appShortName}FirstTime`, '0');
    let userTMP = {
        property : 'undefined'
    };
    STORAGE.setItem(`${appShortName}User`, JSON.stringify(userTMP));
}
/* ------------------------------------------------------------------------- */
export const getUser = () => {
    return JSON.parse(STORAGE.getItem(`${appShortName}User`));
}
export const setUser = (user) => {
    STORAGE.setItem(`${appShortName}User`, JSON.stringify(user));
}
/* ------------------------------------------------------------------------- */