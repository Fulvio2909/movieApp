import { BASE_URL, OPTIONS } from "./config.js";

/**getTrending
 * 
 * @param BASE_URL
 * 
 * @returns all
 */

export const getTrending = async () => {
    try {
        const response = await fetch(BASE_URL + "trending/all/day?language=en-US", OPTIONS);

        const data = await response.json();

        return data;
    } catch (error) {
        document.write("Error 404")
    }
};

/**getTrendingMovies
 * 
 * @param BASE_URL
 * 
 * @returns film di tendenza 
 */

export const getTrendingMovies = async () => {
    try {
        const response = await fetch(BASE_URL + "trending/movie/day?language=en-US", OPTIONS);

        const data = await response.json();

        return data;
    } catch (error) {
        document.write("Error 404")
    }


};

/**getTrendingTv
 * 
 * @param BASE_URL
 * 
 * @returns tv di tendenza 
 */

export const getTrendingTv = async () => {
    try {
        const response = await fetch(BASE_URL + "trending/tv/day?language=en-US", OPTIONS);

        const data = await response.json();

        return data;
    } catch (error) {
        document.write("Error 404")
    }
};
