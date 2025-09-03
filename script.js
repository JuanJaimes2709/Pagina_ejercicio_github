// Datos de hobbies con imágenes de internet
const hobbies = [
  { nombre: "Ajedrez", imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Chess_board_opening_staunton.jpg" },
  { nombre: "Videojuegos", imagen: "https://upload.wikimedia.org/wikipedia/commons/2/20/Video_Game_Controller_%28cropped%29.jpg" },
  { nombre: "Leer", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Bookshelf.jpg/640px-Bookshelf.jpg" }
];

// Datos de series con imágenes públicas
const series = [
  { nombre: "Breaking Bad", imagen: "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png" },
  { nombre: "Stranger Things", imagen: "https://upload.wikimedia.org/wikipedia/en/f/f7/Stranger_Things_logo.png" },
  { nombre: "Dark", imagen: "https://upload.wikimedia.org/wikipedia/en/4/45/DarkNetflixPosterEnglish.jpg" },
  { nombre: "The Witcher", imagen: "https://upload.wikimedia.org/wikipedia/en/9/9d/The_Witcher_title_card.png" },
  { nombre: "Game of Thrones", imagen: "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg" },
  { nombre: "Naruto", imagen: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg" },
  { nombre: "One Piece", imagen: "https://upload.wikimedia.org/wikipedia/en/2/29/OnePieceVolume1Cover.jpg" },
  { nombre: "Attack on Titan", imagen: "https://upload.wikimedia.org/wikipedia/en/7/7e/Shingeki_no_Kyojin_manga_volume_1.jpg" },
  { nombre: "Friends", imagen: "https://upload.wikimedia.org/wikipedia/en/d/d6/Friends_season_one_cast.jpg" },
  { nombre: "The Mandalorian", imagen: "https://upload.wikimedia.org/wikipedia/en/c/c5/The_Mandalorian_season_2_poster.jpg" }
];

// Función para renderizar cards
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

// Renderizamos todo
renderGallery("hobbies", hobbies);
renderGallery("series", series);