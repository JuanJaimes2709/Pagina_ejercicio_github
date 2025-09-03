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
    imagen: "https://upload.wikimedia.org/wikipedia/en/4/42/Suits_season_1_DVD.jpg" },

  { nombre: "Snowfall", 
    imagen: "https://upload.wikimedia.org/wikipedia/en/5/5c/Snowfall_%28TV_series%29.png" },

  { nombre: "The Big Bang Theory", 
    imagen: "https://upload.wikimedia.org/wikipedia/en/7/7e/BigBangTheory_Logo.png" },

  { nombre: "Brooklyn Nine-Nine", 
    imagen: "https://upload.wikimedia.org/wikipedia/en/8/8a/Brooklyn_Nine-Nine_logo.png" },

  { nombre: "Chernobyl", 
    imagen: "https://upload.wikimedia.org/wikipedia/en/3/3a/Chernobyl_2019_Miniseries.jpg" },

  { nombre: "Dark", 
    imagen: "https://upload.wikimedia.org/wikipedia/en/4/45/DarkNetflixPosterEnglish.jpg" },

  { nombre: "Ragnarok", 
    imagen: "https://upload.wikimedia.org/wikipedia/en/f/f3/Ragnarok_poster.jpg" },
    
  { nombre: "Vikings", 
    imagen: "https://upload.wikimedia.org/wikipedia/en/b/b5/Vikings_Title_Card.jpg" }
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