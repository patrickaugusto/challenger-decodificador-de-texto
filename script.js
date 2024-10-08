function verificarTexto(texto) {
    const possuiCaracteresEspeciais = /[^\w\s]/.test(texto);
    const possuiMaiuscula = /[A-Z]/.test(texto);
    const possuiAcento = /[\u00C0-\u00FF]/.test(texto);

    return possuiMaiuscula || possuiAcento || possuiCaracteresEspeciais;
}

function criptografar() {
    let texto = document.getElementById("inserir_texto").value.trim();
    let avisoElemento = document.querySelector('.aviso_texto');

    if (verificarTexto(texto)) {
        avisoElemento.style.color = 'red';
        return;
    } else {
        avisoElemento.style.color = '';
    }

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

    document.getElementById("texto_criptografado").textContent = texto_descriptografado;
}

function mudarEstado() {
    document.getElementById("conteudo_exibir").style.display = "none";
    document.getElementById("conteudo_criptografia").style.display = "flex";
}

function copiarTexto() {
    const texto = document.getElementById("texto_criptografado").textContent;

    const textarea = document.createElement("textarea");
    textarea.value = texto;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);

    document.getElementById("popup").style.display = "flex";
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".btn_copiar").addEventListener("click", copiarTexto);

    document.getElementById("popup-close").addEventListener("click", () => {
        document.getElementById("popup").style.display = "none";
    });
});
