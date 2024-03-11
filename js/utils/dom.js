//funizione che al caricamento della pagina verifichi che il titolo sia corretto, in caso lo corregge

export const fixTitle = () => {
    //tag h1 che contiene il titolo
    const title = document.getElementById('header');
    
    const titleContent = title.innerHTML; 

    if(titleContent === "Movie App")
    return;

    else{
        title.innerHTML = "Movie App";
    }
};




