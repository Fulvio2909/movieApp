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
    
    // Creiamo un nuovo elemento div con la classe "row" per iniziare una nuova riga della griglia
    const row = document.createElement("div");
    row.className = "row row-cols-1 row-cols-md-2 row-cols-lg-3"; // Utilizziamo le classi di Bootstrap per definire le dimensioni delle colonne

    data.forEach(film => {
        // Creiamo il contenitore per ogni card all'interno della griglia
        const col = document.createElement("div");
        col.className = "col";

        // Creiamo la card
        const card = document.createElement("div");
        const cardImage = document.createElement("img");
        const textContainer = document.createElement("div");
        const cardTitle = document.createElement("h5"); 
        const cardDescription = document.createElement("p"); 
        const cardButton = document.createElement("a"); 

        card.className = "card bg-white h-100"; // Aggiungiamo "h-100" per garantire che tutte le card nella stessa riga abbiano la stessa altezza
        textContainer.className = "card-body d-flex flex-column justify-content-between"; // Aggiungiamo "d-flex flex-column justify-content-between" per allineare il testo in basso
        cardImage.className = "card-img-top";   
        cardTitle.className = "card-title";
        cardDescription.className = "card-text";
        cardButton.className = "btn btn-primary mt-auto"; // Aggiungiamo "mt-auto" per spostare il pulsante in basso

        cardImage.alt = film.title;
        cardImage.src = `https:image.tmdb.org/t/p/w500${film.backdrop_path}`;
        cardButton.href = `https:image.tmdb.org/t/p/w500${film.poster_path}`;

        cardTitle.textContent = film.title;
        cardDescription.textContent = film.overview;
        cardButton.textContent = "Scopri di più";

        textContainer.appendChild(cardTitle);
        textContainer.appendChild(cardDescription);
        textContainer.appendChild(cardButton);
        card.appendChild(cardImage);
        card.appendChild(textContainer);
        col.appendChild(card);

        // Aggiungiamo la colonna alla riga
        row.appendChild(col);
    });

    // Aggiungiamo la riga con tutte le colonne al container delle card
    cardContainer.appendChild(row);
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
        const divImage = document.createElement("div");
        const imgImage = document.createElement("img");
        const buttonImage = document.createElement("a");
        divImage.className = "carousel-item";
        imgImage.className = "d-block w-100";
        imgImage.src = `https:image.tmdb.org/t/p/w500${film.backdrop_path}`;
        buttonImage.href = `https:image.tmdb.org/t/p/w500${film.poster_path}`;
        imgImage.appendChild(buttonImage);
        divImage.appendChild(imgImage);
        imageContainer.appendChild(divImage);
    });
}
