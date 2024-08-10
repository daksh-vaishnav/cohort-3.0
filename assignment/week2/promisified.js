const fs = require("fs")

function promisifiedSetTimeout(callback, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const result = callback();
                // const result = await callback(); // if callback is async function
                resolve(result);
            } catch (error) {
                console.error(error);
                reject(error);
            }
        }, timeout);
    });
}

function promisifiedFetch(url, method = "GET", body = null, headers = {}) {
    const options = {
        method: method.toUpperCase(),
        headers,
        body: method.toUpperCase() === "GET" ? null : body,
    };

    return fetch(url, options)
        .then((response) => {
            if (!response.ok) {
                console.error(JSON.stringify(response));
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response
            // return response.json() // if it is api or returning json
        })
        .catch((error) => {
            console.error(error);
            throw error
        });
}


function promisifiedReadFile(fileName,encode="utf-8") {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile(fileName,encode,(err,data)=>{
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        } catch (error) {
            console.error(error);
            reject(error)
        }

    })
}
(async ()=>{
    let data = await promisifiedReadFile("qwerty.txt")
    console.log(data);
    data = await promisifiedFetch("http://dakshv.in")
    console.log(data);
    data = await promisifiedSetTimeout(()=>{
        console.log("after 1000 mili sec");
        return "finished"
    },1000)
    console.log(data);
})();