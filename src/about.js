import * as backg from "./backg";
import { infoBtn } from "./backg";
import { tabBackground } from "./backg";


infoBtn.addEventListener('click', () => {
    tabBackground.innerHTML = ""
    tabBackground.style.backgroundColor = "#dcdbd9"
    LoadAboutTab();
})


function LoadAboutTab() {
const restPhoto = document.createElement('img')
restPhoto.src = "../font_images/restaurant photo.jpeg"
restPhoto.style.width = "60vw"
tabBackground.appendChild(restPhoto)

const history = document.createElement('h1')
history.innerHTML = "About the owners"
history.style.marginTop = "3vh"
tabBackground.appendChild(history)


const foodLoca = document.createElement('p');
foodLoca.style.margin = '3vh'
foodLoca.style.width = "65vw"
foodLoca.innerHTML = 
"Founded in 2267, Ralbal Restaurants has been dedicated to providing the best Itagalactian food that travellers can buy in the Solar System. An idea birthed by brothers Robert and George Ralbal in the 51b Mars Colony in 2256, the restaurant was opened as the first Mediterranean diner on the then newly colonised Mercury."
tabBackground.appendChild(foodLoca)

const foodLoca2 = document.createElement('p')
foodLoca2.style.width = "65vw"
foodLoca2.style.marginBottom = "3vh"
foodLoca2.innerHTML =
"In 2307, to celebrate the 50th anniversary of the first diner release, Robert and George opened a restaurant on the opposite pole of Mercury, to explore the attraction of à la carte dining in Intergalactic space. This proved to be a tremendous success, with the brothers being immortalised into their own star on the Torriwood Walk of Fame - Mercury's biggest memorial to the biggest celebrities on the planet."
tabBackground.appendChild(foodLoca2)

const findUs = document.createElement('h1')
findUs.style.marginBottom = "1vh"
findUs.innerHTML = "How to find us!"
tabBackground.appendChild(findUs)

const location = document.createElement('p')
location.style.width = "65vw"
location.innerHTML = "The restaurant is found at coordinates: 80.6007, 20.7422, atop the crater Bzint. We offer parking but please be considerate to nearby residents who would appreciate the thruster level at the lowest they can be."
tabBackground.appendChild(location)
}



