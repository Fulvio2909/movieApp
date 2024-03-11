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
    const card = document.getElementById(cardID);
    data.forEach(element => {

          const cardTitle = document.createElement("h5"); 
          cardTitle.textContent = element.title;
          card.appendChild(cardTitle);
          
          const cardDescription = document.createElement("p");

          cardDescription.textContent = element.overview;
          card.appendChild(cardDescription);
          const cardButton = document.createElement("button"); 

          cardButton.textContent = "Scopri di più";
          card.appendChild(cardButton);
    });
}