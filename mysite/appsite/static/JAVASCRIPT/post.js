var count = 0

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

function formimg(){
    news = document.getElementById("corpo")
    var div = document.createElement("div")
    div.innerHTML = "<label class='picture'><input type='file' accept='image/*' name='img"+count+"' ><span>ESCOLHER IMAGEM</span></label>"

    news.appendChild(div)
    input = div.getElementsByTagName("input")[0]

    input.addEventListener("change", ()=>{imagem(div)})
    div.addEventListener("click", ()=>{botoes_img(div)})
    count+=1
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
    var secret = hidden("yt", input.value) 
    div.appendChild(secret)
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
    var secret = hidden("sub", input.value) 
    div.appendChild(secret)
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
    var secret = hidden("txt", input.value) 
    div.appendChild(secret)
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
        var secret = div.getElementsByTagName("input")[0]
        secret.value = input.value
        liberado = true
    } else if (tipo == "P") {
        var p = document.createElement("p")
        p.setAttribute("class", "dado")
        p.innerText = input.value
        p.addEventListener("click", (e) => { botoes(p) })
        div.appendChild(p)
        input.remove()
        var secret = div.getElementsByTagName("input")[0]
        secret.value = input.value
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
            var secret = div.getElementsByTagName("input")[0]
            secret.value = link
            liberado = true
        }
    }

    if (liberado) {
        verificador[0].remove()
        verificador[0].remove()
    }

}

function imagem(div) {
    input = div.getElementsByTagName("input")[0]
    span = div.getElementsByTagName("span")[0]

    var fr = new FileReader()
    fr.readAsDataURL(input.files[0])

    fr.addEventListener("load", () => {
        var url = fr.result

        var foto = document.createElement("img")
        foto.setAttribute("class", "picture_img")
        foto.setAttribute("src", url)

        span.innerHTML = ""
        span.appendChild(foto)
    })
}

function botoes_img(picture) {
    remove()
    var botoes = document.getElementById("botoes")
    verificador = botoes.getElementsByClassName("botao-ed")

    if (verificador.length > 0) {
        var div = document.createElement("div")
        botoes.appendChild(div)
        div.appendChild(verificador[0])
        div.appendChild(verificador[0])
        div.appendChild(verificador[0])
        div.remove()
    }

    var apagar = document.createElement("button")
    apagar.setAttribute("class", "botao-ed")
    apagar.addEventListener("click", () => {
        picture.remove()
        verificador[0].remove()
    })
    apagar.innerText = "apagar"

    botoes.appendChild(apagar)
}

function hidden(nome, value){
    novo_nome = nome+count
    console.log(novo_nome)
    var input = document.createElement("input")
    input.setAttribute("type", "hidden")
    input.setAttribute("name", novo_nome)
    input.setAttribute("value", value)
    count+=1
    return input
}

function enviar() {
    var form = document.getElementById("dados")
    form.submit()
}