import * as basicLightbox from 'basiclightbox';
import {wrap} from './helpers';

/**
 * If a YouTube iframe is found, make it responsive.
 */
function createResponsiveEmbeds() {
    document.querySelectorAll('iframe[src^="https://www.youtube.com"]')
        .forEach((elem) => {
            let wrapper = document.createElement('div');
            wrapper.classList.add('responsive-embed');
            wrap(elem, wrapper);
        });
}

/**
 * Creates lightboxes for images found in posts.
 */
function createLightboxes() {
    document.querySelectorAll('.post-content img').forEach((elem) => {
        elem.onclick = function(e) {
            e.preventDefault();
            basicLightbox.create(`<img src='${elem.getAttribute('src')}'>`).show();
        };
    });
}

/**
 * Since they use this disgusting arrow character, lets replace it.
 */
function cuteifyBreadcrumbs() {
    const elem = document.querySelector('.breadcrumbs .mask');
    if (elem) {
        elem.innerHTML = elem.innerHTML.replace(/»/g, '/');
    }
}

/**
 * Creates proxy moderation button on the responsive widgets menu.
 */
function bulkModeration() {
    const widgetsElem = document.querySelector('.widgets.top');
    const moderateElem = document.querySelector('.thread-moderation');

    if (bulkModeration) {
        const proxyModButton = `
        <button id="moderation-proxy" class="mdc-button">Officer</button>`;

        widgetsElem.querySelector('.left')
            .insertAdjacentHTML('beforeend', proxyModButton);

        document.getElementById('moderation-proxy')
            .addEventListener('click', (e) => {
                e.preventDefault();
                let btn = document.getElementById('moderation-proxy');
                widgetsElem.classList.toggle('widget-shift');

                if (btn.textContent === 'Officer') {
                    btn.textContent = 'Close';
                } else {
                    btn.textContent = 'Officer';
                }

                if (document.querySelector('.m_forum.viewforum')) {
                    if (moderateElem.offsetParent) {
                        document.querySelector('.bulk-moderator-close').click();
                    } else {
                        document.querySelector('.link-moderate-tool').click();
                    }
                } else {
                    moderateElem.style.display =
                        moderateElem.offsetParent === null ? 'block' : 'none';
                }
            });
    }
}

/**
 * Initializes forum styles.
 */
export function initForum() {
    const forumElem = document.querySelector('.m_forum');

    if (!forumElem) {
        return;
    }

    bulkModeration();
    cuteifyBreadcrumbs();
    createLightboxes();
    createResponsiveEmbeds();
}
