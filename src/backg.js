const content = document.querySelector('.content')
content.style.backgroundColor = "#dcdbd9"
content.style.width = "100vw"
content.style.height = "100vh"
content.style.display = "flex"
content.style.flexDirection = "column"

const header = document.createElement('div')
header.style.width = "100vw"
header.style.height = "7vw"
content.appendChild(header)
header.style.display = "flex"
header.style.justifyContent = "space-between"
header.style.alignItems = "center"
header.style.padding = "4vw"

export const brandLogo = document.createElement('img')
brandLogo.src = "../font_images/brand logo.png"
header.appendChild(brandLogo)
brandLogo.style.height = "5vw"

export const homeBtn = document.createElement('button')
homeBtn.innerHTML = "Home"
homeBtn.classList.add("header-btn")
header.appendChild(homeBtn)

export const menuBtn = document.createElement('button');
menuBtn.innerHTML = "Menu"
menuBtn.classList.add("header-btn")
header.appendChild(menuBtn);

export const infoBtn = document.createElement('button');
infoBtn.innerHTML = "About"
infoBtn.classList.add("header-btn")
header.appendChild(infoBtn);

export const contBtn = document.createElement("button");
contBtn.innerHTML = "Contact"
contBtn.classList.add("header-btn")
header.appendChild(contBtn)

export const tabBackground = document.createElement('div');
tabBackground.classList.add(".tabs-background");
tabBackground.style.width = "100vw"
tabBackground.style.height = "93vh"
tabBackground.style.display = "flex"
tabBackground.style.flexDirection = "column"
tabBackground.style.textAlign = "center"
tabBackground.style.alignItems = "center"
tabBackground.style.marginTop = "4vh"
content.appendChild(tabBackground)
