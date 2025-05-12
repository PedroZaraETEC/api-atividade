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

    for (let i = 0; i < 1; i++) {
        fetch(`${host}/characters`, {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        }).then((resive) => {
            return resive.json();   
        }).then((dataIds) => {
            ids = dataIds.characters;
            array = new Array(ids.length);

            for(let i = 0; i < ids.length; i++) {
                array[i] = ids[i].id;
            }

            for(let i = 0; i < ids.length - 1; i++) {
                for(let j = 0; j < ids.length - 1; j++) {
                    if (ids[j].jutsu.length < ids[j+1].jutsu.length) {
                        //                  ^   ASC: > | DESC: < 
                        //Se quiser em outra ordem além da definida, mude acima :)
                        let temp = array[j];
                        array[j] = array[j+1];
                        array[j+1] = temp;

                        let tempID = ids[j];
                        ids[j] = ids[j+1];
                        ids[j+1] = tempID;
                    }
                }
            }

            for (let i = 0; i < ids.length; i++) {
                console.log(`ID: ${ids[i].id}  |  Jutsus: ${ids[i].jutsu.length}  |  Nome: ${ids[i].name}`);
            }

        }).catch((error) => {
            console.error(error);
        })
    }
}).catch((error) => {
    console.error(error);
})
