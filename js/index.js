import { getTrending, getTrendingMovies, getTrendingTv } from "./api/trendingGetters.js";
import { getSearchPerson } from "./api/searchGetters.js";
import { person_name } from "./api/config.js";

/**
 * Da aggiungere:
 * id
 * poster_path
 * title
 * vote_average
 * media_type
 * release_date
 */

const trendingAll = getTrending () .then ((data) => {
    data.results.forEach(movie => {
        console.log(movie.id)
        console.log(movie.poster_path)
if (movie.media_type == "movie" ) {
        console.log(movie.title)
    }
    else if (movie.media_type == "tv") {
        console.log(movie.name)
    }
        console.log(movie.vote_average)
        console.log(movie.media_type)
        console.log(movie.release_date)
    });
});
const TrendingMovies = getTrendingMovies () .then ((data) => {
    //console.log(data)
});
const trendingTv = getTrendingTv () .then ((data) => {
    //console.log(data)
});
const searchPersond = getSearchPerson( person_name ) .then ((data) => {
    //console.log(data)
});

