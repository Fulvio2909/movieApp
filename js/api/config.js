//import del package che mi rende disponibili le variabili d'ambiente


//carica le variabili d'ambiente del file .env

export let person_name = "Clooney";

export const BASE_URL = "https://api.themoviedb.org/3/" 

export const OPTIONS = {
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGRkMDQ0MGFkOGVkZmY2ZjUwNjhiMzI0YjNjMzdjNyIsInN1YiI6IjY1ZTg2YzlmYTZjMTA0MDE4N2U5ZjA2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3JONL7uIeyugpFh4DRlK2dohwPH7kMz-H16gz-fp85s"
    },
};