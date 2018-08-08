/**
 * Wraps an element in a newly created element.
 * @param {Element} el
 * @param {Element} wrapper
 */
export function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}
