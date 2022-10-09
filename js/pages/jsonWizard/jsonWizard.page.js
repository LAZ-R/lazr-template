import * as LAZR from '../../lazR/lazR.js';

export const renderPage = () => {

    LAZR.DOM.setHTMLTitle('JSON Wizard');

    const primaryFilter = LAZR.CSS.getFilterStringForHexValue(LAZR.CSS.getCssRootVariableValue('--primary'));
    const onPrimaryFilter = LAZR.CSS.getFilterStringForHexValue(LAZR.CSS.getCssRootVariableValue('--on-primary'));

    const page = LAZR.DOM.createElement('div', 'jsonWizardPage', 'page', '');
    
    const topPart = LAZR.DOM.createElement('div', 'topPart', 'json-wizard-category json-wizard-top-part', `
        <div class="json-wizard-intro-area">
            <h1>JSON Wizard</h1>
            <span>
                Here you can export your local storage data if you need to save it for later (cache cleaning, browser or device update, etc).<br>
                <br>
                You can also import external data, but they need to be formatted exactly as the export.
            </span>
            <div class="json-wizard-icon-area">
                <img class="json-wizard-icon" src="./images/wand-magic-sparkles-solid.svg" alt="a magic wand with sparkles" style="filter: ${primaryFilter};" />
            </div>
        </div>
        `);
    page.appendChild(topPart);

    const middlePart = LAZR.DOM.createElement('div', 'middlePart', 'json-wizard-category json-wizard-middle-part', `
        <button class="primary-button json-wizard-button">
            <span class="json-wizard-category-title">Export local storage data</span>
            <img class="json-wizard-category-icon" src="./images/right-from-bracket-solid.svg" alt="an arrow to the right comming from a rectangle" style="filter: ${onPrimaryFilter};" />
        </button>`);
    page.appendChild(middlePart);

    const bottomPart = LAZR.DOM.createElement('div', 'bottomPart', 'json-wizard-category json-wizard-bottom-part', `  
        <button class="primary-button json-wizard-button">
            <span class="json-wizard-category-title">Import data to local storage</span>
            <img class="json-wizard-category-icon" src="./images/right-to-bracket-solid.svg" alt="an arrow to the right comming into a rectangle" style="filter: ${onPrimaryFilter};" />
        </button>`);
    page.appendChild(bottomPart);

    return page;
}