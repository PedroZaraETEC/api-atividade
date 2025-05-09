const host = "https://dattebayo-api.onrender.com"

fetch(`${host}/characters`, {
    method: "GET",
    headers: {
        Accept: "application/json"
    }
}).then((response) => {
    return response.json();
}).then((data) => {
    images = data.characters[0].images[0];
    characters = data.characters[0].jutsu;

    console.log(images);
    for (let i = 0; i < characters.length; i++) {
        console.log(`${i+1}. ${characters[i].toUpperCase()}`)
    }
}).catch((error) => {
    console.log(error);
})
