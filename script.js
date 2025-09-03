// Hobbies con imágenes
const hobbies = [
  { nombre: "Ajedrez", 
    imagen: "https://www.clarin.com/2024/08/20/fW3JLI9Fl_2000x1500__1.jpg"},

  { nombre: "Jugar videojuegos", 
    imagen: "https://media.istockphoto.com/id/1448737609/es/foto/sobre-el-%C3%A1ngulo-del-hombro-de-una-joven-jugadora-que-gana-en-un-videojuego-en-una-computadora.jpg?b=1&s=612x612&w=0&k=20&c=M-9JuAYj8tcLJtQ1wYfErV1erXf5eD-rGc53eHvvY04=" },

  { nombre: "Leer manga", 
    imagen: "https://pack-yak.intomanga.com/images/manga/Berserk/chapter/1/page/1/15c1d15b-4d03-4c16-967c-2d4b8cebf8eb" },

  { nombre: "Ver series", 
    imagen: "https://images-cdn4.welcomesoftware.com/assets/top+bingeworthy.jpg/Zz01YzNmZDUzOGEzN2IxMWVmYTcwMmE2OTNhMDk0ZTcyZg==?width=768&height=430" }
];

// Series favoritas con imágenes
const series = [
  { nombre: "Better Call Saul", 
    imagen: "https://images.justwatch.com/poster/309347442/s718/temporada-1.jpg" },

  { nombre: "Breaking Bad", 
    imagen: "https://static.wikia.nocookie.net/wiki-doblaje-espana/images/a/ad/Breaking_Bad_portada.png/revision/latest?cb=20240325165208&path-prefix=es" },

  { nombre: "Suits", 
    imagen: "https://www.themoviebuff.net/wp-content/uploads/2024/04/SuitsSO2Gallery04-3d7328f.jpg" },

  { nombre: "Snowfall", 
    imagen: "https://images.justwatch.com/poster/305466252/s718/snowfall.jpg" },

  { nombre: "The Big Bang Theory", 
    imagen: "https://m.media-amazon.com/images/I/71qKFGIrv2L._UF1000,1000_QL80_.jpg" },

  { nombre: "Brooklyn Nine-Nine", 
    imagen: "https://m.media-amazon.com/images/M/MV5BNzBiODQxZTUtNjc0MC00Yzc1LThmYTMtN2YwYTU3NjgxMmI4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },

  { nombre: "Chernobyl", 
    imagen: "https://m.media-amazon.com/images/M/MV5BNzU0OTI4YTQtNGQ1ZS00ZjA4LTg3MTMtZjkyZWNjN2RiZDJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },

  { nombre: "Dark", 
    imagen: "https://m.media-amazon.com/images/M/MV5BOWJjMGViY2UtNTAzNS00ZGFjLWFkNTMtMDBiMDMyZTM1NTY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },

  { nombre: "Ragnarok", 
    imagen: "https://resizing.flixster.com/h6RzHQRuGKF_oSKfvYPMyoTzjus=/fit-in/705x460/v2/https://resizing.flixster.com/5j_rdt-u-orKm3_SY9EBuNxzvGU=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjkyODgyMy53ZWJw" },
    
  { nombre: "Vikings", 
    imagen: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9155926_b_v10_au.jpg" }
];

// Renderizar galería
function renderGallery(id, items) {
  const container = document.getElementById(id);
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = item.imagen;
    img.alt = item.nombre;

    const text = document.createElement("p");
    text.textContent = item.nombre;

    card.appendChild(img);
    card.appendChild(text);
    container.appendChild(card);
  });
}

// Pintar en pantalla
renderGallery("hobbies", hobbies);
renderGallery("series", series);