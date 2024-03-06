import { opts } from "./config.js";

/**getSearchPerson
 * 
 * @param baseUrl
 * 
 * @returns tv di tendenza 
 */

export const getSearchPerson = async (baseUrl, nome) => { 
    
    const response = await fetch(baseUrl + "search/person" + `?query=${nome}`, opts);
    
    const data = await response.json();
   
    return data;

};