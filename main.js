//const url = "https://api.funtranslations.com/translate/pirate.json?text=";
const urlCat = "https://api.thecatapi.com/v1/images/search";
let text = "I am a hero";

// fetch(url + text)
// .then(function(response) {
//     console.log(response);
// 	return response.json();
// })
// .then(function(myJson) {
// 	console.log(myJson.contents.translation);
//     let userData = myJson.contents.translation;
//     let pElement = document.createElement("p");
//     pElement.innerText = userData;
//     document.body.appendChild(pElement);
//     console.log(myJson);
// });

fetch(urlCat)
.then(function(response) {
    console.log(response);
	return response.json();
})
.then(function(myJson) {
	console.log(myJson.url);
    let userData = myJson.url;
    let imgElement = document.createElement("img");
    imgElement.src = userData;
    document.body.appendChild(imgElement);
    console.log(myJson);
});