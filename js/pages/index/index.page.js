import * as LAZR from '../../lazR/lazR.js';

export const renderPage = () => {

    const logHelloWorld = (number) => {
        console.log(`Hello world n°${number}`);
    }
    window.logHelloWorld = logHelloWorld;

    /* --------------------------------------------------------------------- */
    const pageTitle = 'laz_R Template';
    LAZR.DOM.setHTMLTitle(pageTitle);

    const page = LAZR.DOM.createElement('div', 'indexPage', 'page', `
        <h1>${pageTitle}</h1>
        <div style="display:flex;justify-content:space-between;width: 100%">
            <button class="primary-button" onclick="logHelloWorld(1)">Hello World 1</button>
            <button class="secondary-button" onclick="logHelloWorld(2)">Hello World 2</button>
        </div>`);

    for (let n = 0; n < 10; n++) {
        page.appendChild(
            LAZR.DOM.createElement('h2', '', '', `
                Subtitle n°${n + 1}`));
        page.appendChild(
                LAZR.DOM.createElement('p', '', '', `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac nulla nisl. Praesent nec venenatis leo.
                Mauris imperdiet, enim a pulvinar pretium, neque ante varius nibh, non bibendum leo nisl in mi.
                Ut imperdiet tellus elementum, laoreet est quis, sodales libero. Duis posuere ullamcorper lectus at eleifend.<br>
                Cras convallis, velit nec viverra euismod, nunc turpis volutpat metus, ut scelerisque nunc libero ut est.
                Phasellus ut odio semper, volutpat odio a, suscipit massa. Curabitur feugiat erat turpis, in placerat neque tristique a.`));
    }
    page.style.padding = '0px var(--horizontal-padding)';
    /* --------------------------------------------------------------------- */
    
    return page;
}
