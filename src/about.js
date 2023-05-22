import * as backg from "./backg";
import { infoBtn } from "./backg";
import { tabBackground } from "./backg";


infoBtn.addEventListener('click', () => {
    tabBackground.innerHTML = ""
    tabBackground.style.backgroundColor = "#dcdbd9"
})
