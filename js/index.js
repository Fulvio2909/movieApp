import { getTrending, getTrendingMovies, getTrendingTv } from "./api/trendingGetters.js";
import { baseUrl } from "./api/config.js";
import { getSearchPerson } from "./api/searchGetters.js";

getTrending (baseUrl);

getTrendingMovies (baseUrl);

getTrendingTv (baseUrl);

getSearchPerson(baseUrl, "clooney");
