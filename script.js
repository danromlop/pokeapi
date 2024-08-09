// Buscar datos del pokemon dependiendo de su numero o nombre


function buscarPokemon(contenedorNumero){
    let inputId = `pokemonInput${contenedorNumero}`;
    let nombrePokemon = document.getElementById(inputId).value.trim().toLowerCase();
    console.log(nombrePokemon)
    let urlApi = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
    console.log(urlApi)


    fetch(urlApi)  
    .then(Response => Response.json())
    .then(datosPokemon => mostrarPokemon(datosPokemon, contenedorNumero))
    .catch(() => mostrarError(contenedorNumero))

    
}

// Mostrar información del pokémon 


function mostrarPokemon(datosPokemon, contenedorNumero){
    let infoDivId = `pokemonInfo${contenedorNumero}`;
    console.log(infoDivId)
    let infoDiv =  document.getElementById(infoDivId);

    infoDiv.innerHTML = `
    <h2 class="pk-name">${datosPokemon.name.toUpperCase()}</h2>
    <img class="pk-img" src="${datosPokemon.sprites.other["official-artwork"].front_default}">
    `
    
}


function mostrarError(contenedorNumero){
    console.log("Error en el catch")
}