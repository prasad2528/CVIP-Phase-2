const shortenBtn = document.getElementById("shorten")
shortenBtn.addEventListener("click", shorten);
async function shorten() {
    let longUrl = document.getElementById("longUrl").value;
    let result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
    let data = await result.json();
    console.log(data.result.short_link2);
    let shortUrl = document.getElementById("shortUrl");
    shortUrl.value = data.result.short_link2;
}
let newUrl = document.getElementById("shortUrl");
let copyBtn = document.getElementById("copy");
copyBtn.onclick = function() {
    newUrl.select();
    window.navigator.clipboard.writeText(newUrl.value);
}