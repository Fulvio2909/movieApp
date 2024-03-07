//import del package che mi rende disponibili le variabili d'ambiente
import dotenv from 'dotenv';

//carica le variabili d'ambiente del file .env
dotenv.config();

export let person_name = "Clooney";

export const BASE_URL = "https://api.themoviedb.org/3/" 

export const OPTIONS = {
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`
    },
};