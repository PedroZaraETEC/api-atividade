const promise = new Promise((resolve,reject) => {
    let name = "Pedro";

    if (name == "Zara") {
        resolve("Correto");
    }

    else {
        reject("Errado");
    }
});

const pr1 = new Promise((resolve,reject) => {
    let name = "Zara";

    if (name == "Zara") {
        resolve("Correto");
    }

    else {
        reject("Errado");
    }
})

/*promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});*/

const resolveAll = Promise.all([promise,pr1]).then((data) => {
    console.log(data.toUpperCase());
}).catch((error) => {
    console.error(error.toUpperCase());
})