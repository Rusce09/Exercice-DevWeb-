let superlien = document.createElement ("a")
superlien.setAttribute ("href", "https://unil.ch")
superlien.innerHTML = "cliquez ici"
superlien.classList.add("couleurRouge")
document.body.appendChild(superlien)

let newlien = document.createElement("a")
newlien.setAttribute ("href", "https://github.com")
newlien.innerHTML= "cliquez là"
document.body.appendChild(newlien)

let monimage = document.createElement ("imag")
monimage.setAttribute("src, https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png")
document.body.appendChild(monimage)

let monparagraphe = document.createElement("p")
monparagraphe.innerHTML= "je déteste le covid"
document.body.appendChild(monparagraphe)
