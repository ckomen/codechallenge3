document.addEventListener("DOMContentLoaded", () => {
    const movieDetails = {
      poster: document.getElementById("poster"),
      title: document.getElementById("title"),
      runtime: document.getElementById("runtime"),
      showtime: document.getElementById("showtime"),
      availableTickets: document.getElementById("available-tickets"),
      buyTicketButton: document.getElementById("buy-ticket"),
    };
  
    const filmsList = document.getElementById("films");
  
    // Fetch and display the first movie's details
    function fetchFirstMovie() {
      fetch("http://localhost:3000/films/1")
        .then((response) => response.json())
        .then((movie) => updateMovieDetails(movie))
        .catch((error) => console.error("Error fetching movie:", error));
    }
  
    // Fetch and populate the movie list
    function fetchMovieList() {
      fetch("http://localhost:3000/films")
        .then((response) => response.json())
        .then((movies) => {
          filmsList.innerHTML = ""; // Clear placeholder
          movies.forEach((movie) => createFilmListItem(movie));
        })
        .catch((error) => console.error("Error fetching movie list:", error));
    }
  
    // Update movie details section
    function updateMovieDetails(movie) {
      const availableTickets = movie.capacity - movie.tickets_sold;
  
      movieDetails.poster.src = movie.poster;
      movieDetails.title.textContent = movie.title;
      movieDetails.runtime.textContent = movie.runtime;
      movieDetails.showtime.textContent = movie.showtime;
      movieDetails.availableTickets.textContent = availableTickets;
  
      movieDetails.buyTicketButton.disabled = availableTickets <= 0;
      movieDetails.buyTicketButton.textContent = availableTickets > 0 ? "Buy Ticket" : "Sold Out";
  
      // Add event listener for the Buy Ticket button
      movieDetails.buyTicketButton.onclick = () => {
        if (availableTickets > 0) {
          movie.tickets_sold++;
          updateMovieDetails(movie);
        }
      };
    }
  
    // Create a film list item
    function createFilmListItem(movie) {
      const li = document.createElement("li");
      li.textContent = movie.title;
      li.classList.add("film", "item");
  
      if (movie.capacity - movie.tickets_sold <= 0) {
        li.classList.add("sold-out");
      }
  
      li.onclick = () => {
        fetch(`http://localhost:3000/films/${movie.id}`)
          .then((response) => response.json())
          .then((movieDetails) => updateMovieDetails(movieDetails))
          .catch((error) => console.error("Error fetching movie details:", error));
      };
  
      filmsList.appendChild(li);
    }
  
    // Initialize the app
    fetchFirstMovie();
    fetchMovieList();
  });
  