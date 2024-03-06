const opts = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGRkMDQ0MGFkOGVkZmY2ZjUwNjhiMzI0YjNjMzdjNyIsInN1YiI6IjY1ZTg2YzlmYTZjMTA0MDE4N2U5ZjA2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3JONL7uIeyugpFh4DRlK2dohwPH7kMz-H16gz-fp85s",
    },
};

export const getTrending = async (baseUrl) => {

    const response = await fetch(baseUrl + "all/day?language=en-US", opts);

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

    const response = await fetch(baseUrl + "movie/day?language=en-US", opts);

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

    const response = await fetch(baseUrl + "tv/day?language=en-US", opts);

    const data = await response.json();

    return data;

};