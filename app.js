let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    console.log(fact);
    document.querySelector("#result").innerText = fact;
    
    let link = await getImage();
    console.log(link);
    document.querySelector("#image").setAttribute("src", link);
});

const url = "https://catfact.ninja/fact";
const url1 = "https://api.thedogapi.com/v1/images/search";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("error -", e);
        return "no fact found";
    }
}

async function getImage() {
    try {
        let ress = await axios.get(url1);
        return ress.data[0].url;
    } catch (e) {
        console.log("error -", e);
        return "image not found";
    }
}
