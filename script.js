function criptografar() {
    mudarEstado();

    let texto_normal = document.getElementById("inserir_texto").value;
    let texto_criptografado = "";

    for (let i = 0; i < texto_normal.length; i++) {
        let letra = texto_normal[i];
        
        if (letra === "a") {
            texto_criptografado += "ai";
        } else if (letra === "e") {
            texto_criptografado += "enter";
        } else if (letra === "i") {
            texto_criptografado += "imes";
        } else if (letra === "o") {
            texto_criptografado += "ober";
        } else if (letra === "u") {
            texto_criptografado += "ufat";
        } else {
            texto_criptografado += letra;
        }
    }

    document.getElementById("texto_criptografado").innerHTML = texto_criptografado;
}

function descriptografar() {
    let texto_criptografado = document.getElementById("inserir_texto").value;
    let texto_descriptografado = "";
    
    for (let i = 0; i < texto_criptografado.length; i += 4) {
        let substr = texto_criptografado.substr(i, 4);

        if (substr === "ai") {
            texto_descriptografado += "a";
        } else if (substr === "enter") {
            texto_descriptografado += "e";
        } else if (substr === "imes") {
            texto_descriptografado += "i";
        } else if (substr === "ober") {
            texto_descriptografado += "o";
        } else if (substr === "ufat") {
            texto_descriptografado += "u";
        } else {
            texto_descriptografado += substr;
        }
    }

    document.getElementById("texto_criptografado").innerHTML = texto_descriptografado;
}

function mudarEstado() {
    document.getElementById("normal").style.display = "none";
    document.getElementById("mudar").style.visibility = "visible";
}
