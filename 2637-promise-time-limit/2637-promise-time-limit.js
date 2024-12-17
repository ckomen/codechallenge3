/**
 * @param {Function} fn - The asynchronous function to wrap.
 * @param {number} t - The time limit in milliseconds.
 * @return {Function} - A time-limited version of the input function.
 */
function timeLimit(fn, t) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            // Start a timeout that rejects after t ms
            const timeoutId = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            // Call the original async function
            fn(...args)
                .then((res) => {
                    clearTimeout(timeoutId); // Clear timeout if fn resolves successfully
                    resolve(res);
                })
                .catch((err) => {
                    clearTimeout(timeoutId); // Clear timeout if fn throws an error
                    reject(err);
                });
        });
    };
}
