document.addEventListener("DOMContentLoaded", function () {
    // Get the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const encodedData = urlParams.get("data");

    if (encodedData) {
        // Decode the base64-encoded data
        const dataString = atob(encodedData);

        // Parse the JSON string back into an object
        const data = JSON.parse(dataString);

        // Use the data in index.js
        console.log(data);
        document.getElementById("movie-name-index").innerHTML = `<b>${data.Title}</b>`;
        
    }
    console.log(document.getElementById("movie-name-index").innerHTML);
});
