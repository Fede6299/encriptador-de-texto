const ingreso__texto = document.getElementById("ingreso__texto");
const btn__encriptar = document.getElementById("btn__encriptar");
const btn__desencriptar = document.getElementById("btn__desencriptar");
const btn__copiar = document.getElementById("btn__copiar");
const mensaje = document.getElementById("mensaje__final");

const munheco = document.getElementById("munheco");
const mensaje__encriptar = document.getElementById("mensaje__encriptar");
const section__right = document.getElementById("section__right");

let matrizCodigo = [
                    ["e", "enter"],
                    ["o", "ober"],
                    ["i", "imes"],
                    ["a", "ai"],
                    ["u", "ufat"]];

const remplace = (nuevoValor) => {
    mensaje.innerHTML = nuevoValor;
    munheco.classList.add("oculto");
    ingreso__texto.value = "";
    mensaje__encriptar.classList.add ("oculto");
    btn__copiar.style.display = "block";
    section__right.classList.add("section__right__text");
    mensaje.classList.add("section__right__text");
}

const reset = () => {
    ingreso__texto.value = "";
    mensaje.innerHTML = "";
    section__right.classList.remove("section__right__text");
    mensaje.classList.remove("section__right__text");
    munheco.classList.remove("oculto");
    mensaje__encriptar.classList.remove("oculto");
    btn__copiar.style.display = "none";
    ingreso__texto.focus();
}

btn__encriptar.addEventListener("click", () => {
    const texto = ingreso__texto.value.toLowerCase();
    if(texto != ""){   
        function encriptar(newText){
            for(let i = 0; i < matrizCodigo.length; i++){
                if(newText.includes(matrizCodigo[i][0])){
                    newText = newText.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
                };
            };
            return newText;
        };
        remplace(encriptar(texto));
    }else{
        alert("Ingrese texto a encriptar");
        reset();
    }
});

btn__desencriptar.addEventListener("click", () => {
    const texto = ingreso__texto.value.toLowerCase();
    if(texto != ""){
        function desencriptar(newText){
            for(let i = 0; i < matrizCodigo.length; i++){
                if(newText.includes(matrizCodigo[i][1])){
                    newText = newText.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
                };
            };
            return newText;
        };
        remplace(desencriptar(texto));
    }else{
        alert("Ingrese texto a desencriptar");
        reset();
    }
});

btn__copiar.addEventListener("click", () => {
    let texto = mensaje;
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado");
    reset();
})