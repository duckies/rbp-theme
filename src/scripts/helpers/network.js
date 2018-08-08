/**
 * Asyncronously get JSON data from a restful API.
 * @param {String} url
 */
export async function getRequest(url) {
    const response = await fetch(url);

    if (response.ok) return await response.json();
    throw new Error(response.status);
}

/**
 * Asyncronously gets JSON data from a restful POST request.
 * @param {String} url
 * @param {JSON} data
 */
export async function postRequest(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) return await response.json();
    throw new Error(response.status);
}
