import { OPTIONS, BASE_URL, BASE_SEARCH_URL } from "./config.js";

/**getSearchPerson
 * 
 * @param BASE_URL
 * 
 * @returns tv di tendenza 
 */

export const getSearchPerson = async ( personToSearch ) => { 
    
    const response = await fetch(BASE_URL + `search/person?query=${ personToSearch }`, OPTIONS);
    
    const data = await response.json();
   
    return data;

}; 

/**getSearchMovies
 * 
 * @param query una stringa che corrisponde all'imput dell'utente 
 * 
 * @returns film ricercato dall'utente 
 */


export const getSearchMovies = async (query) => {

    const response = await fetch (`${BASE_SEARCH_URL}${query}`, OPTIONS);
    const data = await response.json();
    return data;

};

console.log(await getSearchMovies("star"));

/**handleSearch
 * 
 * 1. recuperare il tag input grazie al'id
 * 2. recuperare il contenuto del tag input
 * 3. deverichiamare la funzione getSearchMovies passando il valore dell'imput alla funzione come parametro.
 * 4. deve restituire il risultato della chiamata getSearchMovies
 * 
 * @returns il risultato della chiamata getSearchMovies
 * 
 */

export const handleSearch = async () => {
    // 1
    const queryInput = document.getElementById("queryInput");

    // 2
    const queryInputValue = queryInput.innerText;

    // 3
    const result = await getSearchMovies(queryInputValue);

    // 4
    return result;
};
