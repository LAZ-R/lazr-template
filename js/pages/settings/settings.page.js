import * as LAZR from '../../lazR/lazR.js';

export const renderPage = () => {

    LAZR.DOM.setHTMLTitle('Settings');

    const primaryFilter = LAZR.CSS.getFilterStringForHexValue(LAZR.CSS.getCssRootVariableValue('--primary'));
    const onPrimaryFilter = LAZR.CSS.getFilterStringForHexValue(LAZR.CSS.getCssRootVariableValue('--on-primary'));

    const page = LAZR.DOM.createElement('div', 'settingsPage', 'page', `
        <h1 style="padding-left: var(--horizontal-padding)">Settings</h1>
        <div class="settings-group">
            <span class="settings-group-name">Settings group name</span>
            <div class="setting-tile">
                <div class="setting-label-area">
                    <span class="setting-label">Setting name</span>
                </div>
                <div class="setting-switch-area">
                    <!-- Rounded switch -->
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>    
            </div>
        </div>
    `);
    

    return page;
}