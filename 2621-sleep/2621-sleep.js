// Function to sleep for a given number of milliseconds
function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

// Example 1: Sleep for 100ms and log the time difference
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // This will log something close to 100ms
});

// Example 2: Sleep for 200ms and log a message
sleep(200).then(() => {
  console.log("Slept for 200ms");
});
