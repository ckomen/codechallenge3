function cancellable(fn, args, t) {
    const startTime = Date.now();

    // Call the function immediately
    fn(...args);

    // Define the interval to call the function repeatedly
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // Define the cancel function
    const cancelFn = () => {
        clearInterval(intervalId);
    };

    return cancelFn; // Only return the cancel function
}

// Example usage
const example1 = () => {
    const fn = (x) => x * 2;
    const args = [4];
    const t = 35;
    const cancelTimeMs = 190;

    const cancelFn = cancellable(fn, args, t);

    setTimeout(() => {
        cancelFn();
        console.log("Cancelled at", cancelTimeMs, "ms");
    }, cancelTimeMs);
};

const example2 = () => {
    const fn = (x1, x2) => x1 * x2;
    const args = [2, 5];
    const t = 30;
    const cancelTimeMs = 165;

    const cancelFn = cancellable(fn, args, t);

    setTimeout(() => {
        cancelFn();
        console.log("Cancelled at", cancelTimeMs, "ms");
    }, cancelTimeMs);
};

const example3 = () => {
    const fn = (x1, x2, x3) => x1 + x2 + x3;
    const args = [5, 1, 3];
    const t = 50;
    const cancelTimeMs = 180;

    const cancelFn = cancellable(fn, args, t);

    setTimeout(() => {
        cancelFn();
        console.log("Cancelled at", cancelTimeMs, "ms");
    }, cancelTimeMs);
};

// Uncomment to run examples
// example1();
// example2();
// example3();
