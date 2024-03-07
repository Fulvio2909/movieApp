import { getTrending, getTrendingMovies, getTrendingTv } from "./api/trendingGetters.js";
import { BASE_URL } from "./api/config.js";
import { getSearchPerson } from "./api/searchGetters.js";

getTrending (BASE_URL);

getTrendingMovies (BASE_URL);

getTrendingTv (BASE_URL);

getSearchPerson(BASE_URL, "clooney");
