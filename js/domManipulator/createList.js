/**
 * createTrendingMoviesList()
 * 
 * La funzione prendera in ingresso un array di movies. per ogni movie aggiungerà al dom un nuovo nodo, che sarò un tag <li> contenente il titolo dei movie.
 * 
 * @param Array dei film
 * @returns 
 */

export const createTrendingMoviesList = (movieData) => { 
//recupero il nodo ul con id "trending-movie-list"
    const list = document.getElementById("trending-movie-list");

    //ciclo su ogni elemento dell'array che viene preso in ingresso come parametro.
    movieData.forEach((element) => {

        //creiamo un nuovo nod ehce correisponde a un tag <li>
        const listItem = document.createElement("li");

        //impostiamo il contenuto del tag li appena creato, assegnando il valore del title dell'elemento corrente in questa iterazione dell'array
        listItem.textContent = element.title;

        //appendiamo la pagina html il nuovo tag creato. Dove? sul tag recuperato
        list.appendChild(listItem);
    });
};

export const createCard = (data, cardID) => {
    const cardContainer = document.getElementById(cardID);
    
    const row = document.createElement("div");
    row.className = "row row-cols-1 row-cols-md-2 row-cols-lg-3";

    data.forEach(film => {
        const col = document.createElement("div");
        col.className = "col";

        const card = document.createElement("div");
        const cardImage = document.createElement("img");
        const textContainer = document.createElement("div");
        const cardTitle = document.createElement("h5"); 
        const cardDescription = document.createElement("p"); 
        const cardButton = document.createElement("a"); 

        card.className = "card bg-white h-100";
        textContainer.className = "card-body d-flex flex-column justify-content-between";
        cardImage.className = "card-img-top";   
        cardTitle.className = "card-title";
        cardDescription.className = "card-text";
        cardButton.className = "btn btn-primary mt-auto";

        cardImage.alt = film.title;
        cardImage.src = `https:image.tmdb.org/t/p/w500${film.backdrop_path}`;
        cardButton.href = `https:image.tmdb.org/t/p/w500${film.poster_path}`;

        cardTitle.textContent = film.title;
        cardDescription.textContent = truncateText(film.overview, 100); // Limita la descrizione a 100 caratteri
        cardButton.textContent = "Scopri di più";

        textContainer.appendChild(cardTitle);
        textContainer.appendChild(cardDescription);
        textContainer.appendChild(cardButton);
        card.appendChild(cardImage);
        card.appendChild(textContainer);
        col.appendChild(card);

        row.appendChild(col);
    });

    cardContainer.appendChild(row);
}

// Funzione per abbreviare il testo oltre una certa lunghezza
function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    } else {
        return text;
    }
}




export const carouselImages = (data, imageID) => {
    const imageContainer = document.getElementById(imageID);

    const divFirstImage = document.createElement("div");
    const imgFirstImage = document.createElement("img");
    divFirstImage.className = "carousel-item active";
    imgFirstImage.className = "d-block w-100";
    imgFirstImage.src = `https:image.tmdb.org/t/p/w500${data[0].backdrop_path}`;
    imgFirstImage.href = `https:image.tmdb.org/t/p/w500${data[0].poster_path}`;
    divFirstImage.appendChild(imgFirstImage);
    imageContainer.appendChild(divFirstImage);

    data.slice(1).forEach(film => {
        // Condiziona tutto questo codice in base al fatto che sia definito backdrop_path e poster_path
        const divImage = document.createElement("div");
        const imgImage = document.createElement("img");
        const buttonImage = document.createElement("a");
        divImage.className = "carousel-item";
        imgImage.className = "d-block w-100";
        if (film.backdrop_path!==null) {
            imgImage.src = `https:image.tmdb.org/t/p/w500${film.backdrop_path}`;
            buttonImage.href = `https:image.tmdb.org/t/p/w500${film.poster_path}`;
        
            imgImage.appendChild(buttonImage);
            divImage.appendChild(imgImage);
            imageContainer.appendChild(divImage);
        }
        else {}
        
        // Fine if
    });
}

function limitaDescrizione() {
    var descrizione = document.getElementById("descrizione");
    var testoCompleto = descrizione.innerHTML;
    var lunghezzaMassima = 100; // Cambia questo valore al numero di caratteri desiderato
    
    if (testoCompleto.length > lunghezzaMassima) {
      var testoAbbreviato = testoCompleto.substring(0, lunghezzaMassima);
      descrizione.innerHTML = testoAbbreviato + '...';
    } else {
      // Se il testo è già abbreviato, ripristina il testo completo
      descrizione.innerHTML = testoCompleto;
    }
  }
