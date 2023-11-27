function titulo() {
    title = document.getElementById("titulo")
    ti = title

    var h1 = document.createElement("h1")
    h1.setAttribute("id", "cor")
    h1.setAttribute("onclick", "editar_titulo()")
    h1.setAttribute("onclick", "editar_titulo()")
    h1.innerText = title.value

    if (h1.innerText.length > 0) {
        title.remove()
        document.getElementById("inicio").appendChild(h1)
    }
}

function editar_titulo() {
    var div = document.getElementById("inicio")
    var h1 = div.getElementsByTagName("h1")[0]
    var input = document.createElement("input")
    input.setAttribute("id", "titulo")
    input.setAttribute("type", "text")
    input.setAttribute("onfocusout", "titulo()")
    input.setAttribute("value", h1.innerText)
    input.setAttribute("style", "margin: auto; display: block;")

    h1.remove()
    div.appendChild(input)


}

function formulario(tipo) {
    remove()
    var new_botoes = document.getElementById("botoes")
    verificador = new_botoes.getElementsByClassName("botao-ed")

    if (verificador.length > 0) {
        var div = document.createElement("div")
        new_botoes.appendChild(div)
        div.appendChild(verificador[0])
        div.appendChild(verificador[0])
        div.remove()
    }

    var botoes = document.getElementById("botoes")
    var input = document.createElement("textarea")
    input.setAttribute("id", "form")
    input.setAttribute("placeholder", tipo)

    var botao = document.createElement("button")
    botao.innerText = "salvar"
    botao.setAttribute("class", "botao-ed")

    if (tipo == "subtitulo") {
        input.setAttribute("maxlength", "40")
        botao.setAttribute("onclick", "sub()")
        botoes.appendChild(botao)
    } else if (tipo == "paragrafo") {
        botao.setAttribute("onclick", "txt()")
        botoes.appendChild(botao)
    } else {
        botao.setAttribute("onclick", "yt()")
        botoes.appendChild(botao)
    }

    document.getElementById("corpo").appendChild(input)
}

function yt() {
    var botao = document.getElementsByClassName("botao-ed")[0]
    input = document.getElementById("form")

    var div = document.createElement("div")
    var p = document.createElement("p")
    p.setAttribute("id", "centralizar")

    link = input.value
    var position = link.search("embed/")

    var img = document.createElement("img")
    img.setAttribute("name", link)
    img.setAttribute("class", "dado")
    img.addEventListener('click', () => { botoes(img) })


    if (position != -1) {
        var url = link.slice(position + 6, position + 17)
        var nova_url = "https://img.youtube.com/vi/" + url + "/0.jpg"
        img.setAttribute("src", nova_url)
        p.appendChild(img)
        div.appendChild(p)

        remove()
        botao.remove()
        news = document.getElementById("corpo")
        news.appendChild(div)
    }

}

function sub() {
    var botao = document.getElementsByClassName("botao-ed")[0]
    input = document.getElementById("form")
    var div = document.createElement("div")
    var h2 = document.createElement("h2")
    h2.setAttribute("class", "dado")
    h2.innerText = input.value
    h2.addEventListener("click", (e) => { botoes(h2) })
    div.appendChild(h2)

    if (h2.innerText.length > 0) {
        remove()
        botao.remove()
        news = document.getElementById("corpo")
        news.appendChild(div)
    }
}

function txt() {
    var botao = document.getElementsByClassName("botao-ed")[0]

    input = document.getElementById("form")
    var div = document.createElement("div")
    var p = document.createElement("p")
    p.setAttribute("class", "dado")
    p.innerText = input.value
    p.addEventListener("click", (e) => { botoes(p) })
    div.appendChild(p)

    if (p.innerText.length > 0) {
        remove()
        botao.remove()
        news = document.getElementById("corpo")
        news.appendChild(div)
    }
}

function remove() {
    formu = document.getElementById("form")

    if (formu != null) {
        formu.remove()
    }
}

function botoes(elemento) {
    remove()
    var botoes = document.getElementById("botoes")
    verificador = botoes.getElementsByClassName("botao-ed")
    tipo = elemento.nodeName
    pai = elemento.parentElement

    if (tipo == "IMG") {
        filho = pai
        pai = pai.parentElement
        filho.remove()
    }

    if (verificador.length > 0) {
        var div = document.createElement("div")
        botoes.appendChild(div)
        div.appendChild(verificador[0])
        div.appendChild(verificador[0])
        div.remove()
    }

    var input = document.createElement("textarea")
    if (tipo == "IMG") {
        img_name = elemento.name
        input.value = img_name
    } else {
        input.value = elemento.innerText
    }
    input.setAttribute("id", "form")

    elemento.remove()
    pai.appendChild(input)


    var mod = document.createElement("button")
    mod.setAttribute("class", "botao-ed")
    mod.addEventListener("click", (e) => { editar(elemento, 1) })
    mod.innerText = "salvar"

    var apagar = document.createElement("button")
    apagar.setAttribute("class", "botao-ed")
    apagar.addEventListener("click", (e) => { editar(elemento, 2) })
    apagar.innerText = "apagar"

    botoes.appendChild(mod)
    botoes.appendChild(apagar)
}

function editar(elemento, botao) {
    verificador = document.getElementsByClassName("botao-ed")
    tamanho = verificador.length
    tipo = elemento.nodeName
    var input = document.getElementById("form")
    div = input.parentElement


    if (botao == 1 & input.value.length > 0) {
        modificar(tipo)
    } else if (botao == 2 & tipo != "H1") {
        modificar(tipo)
        div.remove()
        verificador[0].remove()
        verificador[0].remove()
    }
}

function modificar(tipo) {
    var input = document.getElementById("form")
    var div = input.parentElement
    var verificador = document.getElementsByClassName("botao-ed")
    var liberado = false

    if (tipo == "H2") {
        var h2 = document.createElement("h2")
        h2.setAttribute("class", "dado")
        h2.innerText = input.value
        h2.addEventListener("click", (e) => { botoes(h2) })
        div.appendChild(h2)
        input.remove()
        liberado = true
    } else if (tipo == "P") {
        var p = document.createElement("p")
        p.setAttribute("class", "dado")
        p.innerText = input.value
        p.addEventListener("click", (e) => { botoes(p) })
        div.appendChild(p)
        input.remove()
        liberado = true
    } else if (tipo == "IMG") {
        var p = document.createElement("p")
        p.setAttribute("class", "dado")
        p.setAttribute("id", "centralizar")

        link = input.value
        var position = link.search("embed/")

        var img = document.createElement("img")
        img.setAttribute("class", "dado")
        img.setAttribute("name", link)
        img.addEventListener('click', () => { botoes(img) })


        if (position != -1) {
            var url = link.slice(position + 6, position + 17)
            var nova_url = "https://img.youtube.com/vi/" + url + "/0.jpg"
            img.setAttribute("src", nova_url)
            p.appendChild(img)
            div.appendChild(p)
            input.remove()
            liberado = true
        }
    }

    if (liberado) {
        verificador[0].remove()
        verificador[0].remove()
    }

}

function imagem() {
    var input = document.getElementById("imagem")
    var fr = new FileReader()
    fr.readAsDataURL(input.files[0])

    fr.addEventListener("load", () => {
        var url = fr.result
        var p = document.createElement("p")
        p.setAttribute("id", "centralizar")

        var foto = document.createElement("img")
        foto.setAttribute("class", "dado")
        foto.setAttribute("src", url)
        foto.addEventListener("click", () => { img_btn(foto) })

        p.appendChild(foto)
        news = document.getElementById("corpo")
        news.appendChild(p)
    })
}

function img_btn(elemento) {
    var corpo = document.getElementById("corpo")
    var imgs = corpo.getElementsByTagName("img")
    tam = imgs.length - 1
    for (i = 0; i <= tam; i++) {
        imgs[i].style.borderStyle = "none"
    }
    elemento.style.borderStyle = "dotted"
    botoes_img(elemento)
}

function botoes_img(elemento) {
    var botoes = document.getElementById("botoes")
    verificador = botoes.getElementsByClassName("botao-img")

    pai = elemento.parentElement

    if (verificador.length > 0) {
        var div = document.createElement("div")
        botoes.appendChild(div)
        div.appendChild(verificador[0])
        div.appendChild(verificador[0])
        div.appendChild(verificador[0])
        div.remove()
    }

    var label = document.createElement("label")
    label.setAttribute("for", "editar_img")
    label.innerText = "editar"
    label.setAttribute("class", "botao-img")

    var mod = document.createElement("input")
    mod.setAttribute("type", "file")
    mod.setAttribute("accept", "image/*")
    mod.setAttribute("id", "editar_img")
    mod.setAttribute("class", "botao-img")
    mod.addEventListener("change", () => { editar_img(elemento, 1) })

    var apagar = document.createElement("button")
    apagar.setAttribute("class", "botao-img")
    apagar.addEventListener("click", () => {
        pai.remove()
        verificador[0].remove()
        verificador[0].remove()
        verificador[0].remove()
    })
    apagar.innerText = "apagar"

    botoes.appendChild(label)
    botoes.appendChild(mod)
    botoes.appendChild(apagar)
}

function editar_img(elemento) {
    var btn = document.getElementById("botoes")
    var verificador = btn.getElementsByClassName("botao-img")
    var input = document.getElementById("editar_img")
    var fr = new FileReader()
    fr.readAsDataURL(input.files[0])

    fr.addEventListener("load", () => {
        var url = fr.result
        elemento.src = url
        elemento.style.borderStyle = "none"
    })
    verificador[0].remove()
    verificador[0].remove()
    verificador[0].remove()
}

function enviar() {
    var form = document.getElementById("dados")
    var corpo = document.getElementsByClassName("dado")
    tam = corpo.length
    console.log(tam)
    console.log(corpo)
    for(i=0; i<tam; i++){
        console.log(corpo[i].name)
    }
}