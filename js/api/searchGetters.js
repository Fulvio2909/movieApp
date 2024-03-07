import { OPTIONS, BASE_URL } from "./config.js";

/**getSearchPerson
 * 
 * @param BASE_URL
 * 
 * @returns tv di tendenza 
 */

export const getSearchPerson = async ( nome ) => { 
    
    const response = await fetch(BASE_URL + "search/person" + `?query=${ nome }`, OPTIONS);
    
    const data = await response.json();
   
    return data;

};