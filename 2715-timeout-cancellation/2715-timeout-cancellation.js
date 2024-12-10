function cancellable(fn, args, t) {
    const timer = setTimeout(() => {
        // Call the function and capture the time and result
        const result = fn(...args);
        console.log({ time: t, returned: result });
    }, t);

    // Return a cancel function
    return function cancelFn() {
        clearTimeout(timer); // Cancel the execution of the function
    };
}
const cancelTimeMs = 50;
const cancelFn1 = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFn1, cancelTimeMs); // Logs: { time: 20, returned: 10 }
const cancelFn2 = cancellable((x) => x ** 2, [2], 100);
setTimeout(cancelFn2, cancelTimeMs); // Logs nothing as function is cancelled
const cancelFn3 = cancellable((x1, x2) => x1 * x2, [2, 4], 30);
setTimeout(cancelFn3, cancelTimeMs); // Logs: { time: 30, returned: 8 }