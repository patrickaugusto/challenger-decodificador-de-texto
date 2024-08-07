function criptografar() {
    let texto = document.getElementById("inserir_texto").value.trim();

    switch (true) {
        case (texto === ""):
            alert("Digite uma mensagem");
            break;
        
        default:
            mudarEstado();
            let texto_criptografado = "";

            for (let i = 0; i < texto.length; i++) {
                let letra = texto[i];
                
                switch (letra) {
                    case "a":
                        texto_criptografado += "ai";
                        break;
                    case "e":
                        texto_criptografado += "enter";
                        break;
                    case "i":
                        texto_criptografado += "imes";
                        break;
                    case "o":
                        texto_criptografado += "ober";
                        break;
                    case "u":
                        texto_criptografado += "ufat";
                        break;
                    default:
                        texto_criptografado += letra;
                        break;
                }
            }

            // Atualiza o conteúdo do elemento com o texto criptografado
            document.getElementById("texto_criptografado").textContent = texto_criptografado;
            break;
    }
}


function descriptografar() {
    let texto_criptografado = document.getElementById("inserir_texto").value;
    let texto_descriptografado = "";

    let i = 0;
    while (i < texto_criptografado.length) {
        let substr = texto_criptografado.substr(i, 2);

        switch (substr) {
            case "ai":
                texto_descriptografado += "a";
                i += 2;
                break;
            case "en":
                if (texto_criptografado.substr(i, 5) === "enter") {
                    texto_descriptografado += "e";
                    i += 5;
                    break;
                }
            case "im":
                if (texto_criptografado.substr(i, 4) === "imes") {
                    texto_descriptografado += "i";
                    i += 4;
                    break;
                }
            case "ob":
                if (texto_criptografado.substr(i, 4) === "ober") {
                    texto_descriptografado += "o";
                    i += 4;
                    break;
                }
            case "uf":
                if (texto_criptografado.substr(i, 4) === "ufat") {
                    texto_descriptografado += "u";
                    i += 4;
                    break;
                }
            default:
                texto_descriptografado += texto_criptografado[i];
                i++;
                break;
        }
    }

    document.getElementById("texto_criptografado").textContent = texto_descriptografado; // Corrigido de innerHTML para textContent
}

function mudarEstado() {
        document.getElementById("conteudo_exibir").style.display = "none";
        document.getElementById("conteudo_criptografia").style.display = "flex";
}