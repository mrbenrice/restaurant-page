import * as backg from "./backg";
import { homeBtn } from "./backg";
import { tabBackground } from "./backg";

homeBtn.addEventListener('click', () => {
    tabBackground.innerHTML = ""
    tabBackground.style.backgroundColor = "#dcdbd9"
    LoadHomeTab();
}) 

export function LoadHomeTab() {


    const title = document.createElement('div')
    tabBackground.appendChild(title)
    title.style.display = "flex"
    title.style.flexDirection = "column"
    title.style.alignItems = "center"
    title.style.border = "3px solid #babca5"
    title.style.borderRadius = "20%"

    const titleText = document.createElement("h1")
    titleText.innerHTML = "Welcome to Ralbal Restaurants!"
    titleText.style.margin = "3vw"
    title.appendChild(titleText)

    const titleTextSub = document.createElement('p')
    titleTextSub.style.width = "55vw"
    titleTextSub.innerHTML = 
    "The freshest, finest ingredients, grown in Ralbal's own farmsteads are used in our foods. That is why Ralbal has been voted as Mercury's number one Italian food restaurant since 2387."
    titleTextSub.style.marginBottom = "3vw"
    title.appendChild(titleTextSub)

    const titleLogo = document.createElement(`img`)
    titleLogo.src = "../font_images/brand logo.png"
    titleLogo.style.width = "50vw"
    titleLogo.style.height = "auto"
    titleLogo.style.margin = "4vw"
    tabBackground.appendChild(titleLogo)


}
