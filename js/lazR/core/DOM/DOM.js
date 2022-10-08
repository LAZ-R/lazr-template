export const setViewportSize = () => {
    const setDocumentHeight = () => {
        document.documentElement.style.setProperty('--doc-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', setDocumentHeight);
    setDocumentHeight();
}

export const setHTMLTitle = (pageTitle) => {
    const title = document.getElementById('title');
    title.innerHTML = pageTitle;

    const appleTitle = document.getElementById('appleTitle');
    appleTitle.setAttribute('content', pageTitle);
}

export const htmlStringToElement = (html) => {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }
  
export const createElement = (element, id, className, innerHtml) => {
    return htmlStringToElement(`<${element} id="${id}" class="${className}">${innerHtml}</${element}>`)
}

export const createImgElement = (id, className, src, alt) => {
    return htmlStringToElement(`<img id="${id}" class="${className}" src="${src}" alt="${alt}">`)
}