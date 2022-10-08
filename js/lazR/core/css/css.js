import * as FILTER from './filter/filter.js'

export const getCssRootVariableValue = (variableName) => {
    const root = document.querySelector(':root');
    var roots = getComputedStyle(root);
    let value = roots.getPropertyValue(`${variableName}`);
    if (value.charAt(0) == " ") {
        value = value.slice(1, (value.length));
    }
    return value;
}

export const applyColorFilterOnElement = (element, hexValue) => {
    element.setAttribute('style', `filter: ${FILTER.getFilterStringForHexValue(hexValue)}`);
}