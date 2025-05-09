const host = "https://dattebayo-api.onrender.com";

fetch(`${host}/characters`, {
    method: "GET",
    headers: {
        Accept: "application/json"
    }
}).then((resive) => {
    return resive.json();
}).then((data) => {
    ids = data.characters;

    for (let i = 0; i < ids.length; i++) {
        console.log(ids[i].id);
        
        fetch(`${host}/characters/ids`, {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        }).then((resive) => {
            
        })

    }
}).catch((error) => {
    console.error(error);
})