import { BASE_URL, OPTIONS } from "./config.js";

/**getTrending
 * 
 * @param BASE_URL
 * 
 * @returns all
 */

export const getTrending = async () => {

    const response = await fetch(BASE_URL + "trending/all/day?language=en-US", OPTIONS);

    const data = await response.json();

    return data;

};

/**getTrendingMovies
 * 
 * @param BASE_URL
 * 
 * @returns film di tendenza 
 */

export const getTrendingMovies = async () => {

    const response = await fetch(BASE_URL + "trending/movie/day?language=en-US", OPTIONS);

    const data = await response.json();

    return data;

};

/**getTrendingTv
 * 
 * @param BASE_URL
 * 
 * @returns tv di tendenza 
 */

export const getTrendingTv = async () => {

    const response = await fetch(BASE_URL + "trending/tv/day?language=en-US", OPTIONS);

    const data = await response.json();

    return data;

};
