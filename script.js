
console.log("1");
console.log("2");

const res = fetch("https://baconipsum.com/api/?type=all.")
    .then((res) => {
        // Parse the response body as JSON (returns a promise)
        return res.json();
    })
    .then((ans) => {
        // Log the result once the JSON is parsed
        console.log(ans);
    })
    .catch((err) => {
        // Handle errors that occur during the fetch
        console.log("Error", err);
    });

console.log("3");








