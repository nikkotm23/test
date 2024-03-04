

function funcion_encriptar()
{
let textoEntrada = document.getElementById('entradaTexto').value;
let textoEncriptado=textoEntrada.replaceAll("e" , "enter").replaceAll("i" , "imes").replaceAll("a" , "ai").replaceAll("o", "ober").replaceAll("u" , "ufat")
console.log(textoEncriptado)
document.getElementById('resultado').innerHTML=textoEncriptado;
}

function funcion_desencriptar()
{
    let textoEntrada = document.getElementById('entradaTexto').value;
    let textoDesencriptado=textoEntrada.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat","u")
    console.log(textoDesencriptado)
    document.getElementById('resultado').innerHTML=textoDesencriptado;
}

async function copiar()
{   
    let copia = document.getElementById('resultado').textContent;
    console.log(copia)
    navigator.clipboard.writeText(copia)
}

/*console.log(enc)

let decrip= enc.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat","u")

console.log(decrip)*/