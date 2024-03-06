import { opts } from "./config.js";

export const getTrending = async (baseUrl) => {

    const response = await fetch(baseUrl + "trending/all/day?language=en-US", opts);

    const data = await response.json();

    return data;

};

/**getTrendingMovies
 * 
 * @param baseUrl
 * 
 * @returns film di tendenza 
 */

export const getTrendingMovies = async (baseUrl) => {

    const response = await fetch(baseUrl + "trending/movie/day?language=en-US", opts);

    const data = await response.json();

    return data;

};

/**getTrendingTv
 * 
 * @param baseUrl
 * 
 * @returns tv di tendenza 
 */

export const getTrendingTv = async (baseUrl) => {

    const response = await fetch(baseUrl + "trending/tv/day?language=en-US", opts);

    const data = await response.json();

    return data;

};
