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
    row.className = "row";

    data.forEach(film => {
        // Creiamo il contenitore per ogni card all'interno della griglia
        const col = document.createElement("div");
        col.className = "col-12 col-md-6 col-lg-4"; // Utilizziamo le classi di Bootstrap per definire le dimensioni delle colonne

        // Creiamo la card
        const card = document.createElement("div");
        const cardImage = document.createElement("img");
        const textContainer = document.createElement("div");
        const cardTitle = document.createElement("h5"); 
        const cardDescription = document.createElement("p"); 
        const cardButton = document.createElement("a"); 

        card.className = "card";
        textContainer.className = "card-body";
        cardImage.className = "card-img-top";   
        cardTitle.className = "card-title";
        cardDescription.className = "card-text";
        cardButton.className = "btn btn-primary";

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
