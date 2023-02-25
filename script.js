function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    //pegar a imag
    const img = document.querySelector("#profile img")

    //substituir a img
    if (html.classList.contains('light')) {
        // se tiver light mode,adicionar a imagem light
        img.setAttribute("src", "./assets/avatar-light.png")
        img.alt = "Eu brancão "
    } else {
        //se tiver sem light mode,manter a imagem normal
        img.src = "./assets/Avatar.png"
        img.setAttribute("src", "./assets/Avatar.png")
        img.alt = "Eu escurão"

    }
}


//html.classList.remove('light')
//html.classList.add('light')