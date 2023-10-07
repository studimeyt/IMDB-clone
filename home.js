document.addEventListener("DOMContentLoaded", function () {
    const key = "56420f32";
    const api_website = "http://www.omdbapi.com/?apikey=" + key + "&t=";
    
    const searchForm = document.getElementById("home-search-form");
  
    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
    
        const title = document.getElementById("home-search").value;
        console.log('Form Submitted');

        const mockData = {
            "Title":"Star Wars: Episode IV - A New Hope",
            "Year":"1977","Rated":"PG",
            "Released":"25 May 1977",
            "Runtime":"121 min",
            "Genre":"Action, Adventure, Fantasy",
            "Director":"George Lucas",
            "Writer":"George Lucas",
            "Actors":"Mark Hamill, Harrison Ford, Carrie Fisher",
            "Plot":"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
            "Language":"English",
            "Country":"United States",
            "Awards":"Won 6 Oscars. 65 wins & 31 nominations total",
            "Poster":"https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
            "Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"90/100"}],
            "Metascore":"90",
            "imdbRating":"8.6",
            "imdbVotes":"1,415,793",
            "imdbID":"tt0076759",
            "Type":"movie",
            };
        const dataString = JSON.stringify(mockData);
        // Encode the data using base64
        const encodedData = btoa(dataString);

        // Redirect to index.html with the encoded data as a query parameter
        window.location.assign(`index.html?data=${encodedData}`);
    });
    
    // function apiFetch(apiUrl) {
    //   fetch(apiUrl)
    //     .then(response => {
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       return response.json();
    //     })
    //     .then(data => {
    //         // console.log(data.Title);
    //         // indexCardUpdate(data);
    //         console.log(data);
    //         // indexCardUpdate(mockData);

    //     })
    //     .catch(error => {
    //       console.error('There was a problem with the fetch operation:', error);
    //     });
    // }


});