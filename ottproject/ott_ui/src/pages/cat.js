window.setupEventListeners = function () {
    document.getElementById("sortBtn").addEventListener("click", sortGenres);
    document.getElementById("filterBtn").addEventListener("click", filterByYear);
  };
  
  // Sort Genres Alphabetically
  function sortGenres() {
    let nav = document.querySelector(".navbar");
    let genres = Array.from(nav.getElementsByTagName("h2"));
  
    genres.sort((a, b) => a.innerText.localeCompare(b.innerText));
  
    // Re-append sorted genres
    nav.innerHTML = "";
    genres.forEach((genre) => {
      let link = document.createElement("a");
      link.href = `/${genre.innerText}`;
      link.appendChild(genre);
      nav.appendChild(link);
    });
  }
  
  // Dummy Filtering Function (Modify to Filter by Year)
  function filterByYear() {
    alert("Filtering by year is not yet implemented!");
  }
  

