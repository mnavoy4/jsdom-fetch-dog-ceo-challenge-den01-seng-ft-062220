// console.log('%c HI', 'color: firebrick')
const breedsUrl = 'https://dog.ceo/api/breeds/list/all'
let dogImagesDiv = document.querySelector("#dog-image-container");
let dogListUl = document.querySelector("#dog-breeds");

document.addEventListener("DOMContentLoaded", function(){
  fetchDogs();
  getDogBreeds();
});

function fetchDogs(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(response => response.json())
    .then(json => {
      json.message.forEach(imageURL => createAndAddImage(imageURL))
    });
}

function createAndAddImage(imageUrlFromJson){
  let newImg = document.createElement('img');
  newImg.src = imageUrlFromJson;
  dogImagesDiv.appendChild(newImg);
}

function getDogBreeds(){
  fetch(breedsUrl)
    .then(response => response.json())
    .then(json => {
      let breedsArray = Object.keys(json.message);
      createBreedsList(breedsArray);
    });
};

function createDogBreedsLi(breedFromJson){
  let newLi = document.createElement('li');
  newLi.addEventListener("click", changeColor)
  newLi.textContent = capitalizeFirstLetter(breedFromJson);
  dogListUl.appendChild(newLi);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function changeColor(event){
  event.target.style.color = 'red';
}

// function filterBreeds(letter){
//   return breedsArray.filter(breed => breed.startsWith(letter));
// }

function deleteLis(){
  let dogListUl = document.querySelector("#dog-breeds");
  let breedLis = dogListUl.querySelectorAll("li");
  breedLis.forEach(li => li.remove());
}

function createBreedsList(breeds){
  deleteLis();
  breeds.forEach(breed => createDogBreedsLi(breed));
}







