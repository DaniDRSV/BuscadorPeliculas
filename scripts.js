const apiKey = "5a4dba67";

function buscarPelicula() {
  const titulo = document.getElementById("searchInput").value.trim();
  if (!titulo) return;

const url = `https://www.omdbapi.com/?t=${titulo}&plot=full&apikey=${apiKey}`;


  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.Response === "True") {
        document.getElementById("resultado").innerHTML = `
          <div class="card mb-3 bg-secondary text-light">
            <div class="row g-0">
              <div class="col-md-4 d-flex align-items-center justify-content-center p-2">
                <img src="${data.Poster}" class="img-fluid rounded-start" alt="Poster de ${data.Title}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${data.Title} (${data.Year})</h5>
                  <p class="card-text"><strong>Descripción:</strong> ${data.Plot}</p>
                </div>
              </div>
            </div>
          </div>
        `;
      } else {
        document.getElementById("resultado").innerHTML = `<p>Película no encontrada</p>`;
      }
    })
    .catch(error => {
      console.error("Error al buscar la película:", error);
      document.getElementById("resultado").innerHTML = `<p>Error al conectar con la API</p>`;
    });
}
