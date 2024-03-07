import { getTrending, getTrendingMovies, getTrendingTv } from "./api/trendingGetters.js";
import { getSearchPerson } from "./api/searchGetters.js";

let person_name = "Clooney";

/**
 * Da aggiungere:
 * id
 * poster_path
 * titòe
 * vote_average
 * media_type
 * release_date
 */

const trending = getTrending () .then ((data) => {
    console.log(data)
});
const TrendingMovies = getTrendingMovies () .then ((data) => {
    console.log(data)
});
const trendingTv = getTrendingTv () .then ((data) => {
    console.log(data)
});
const searchPersond = getSearchPerson( person_name ) .then ((data) => {
    console.log(data)
});
