//AQUI TENEMOS NUESTRA PARTE LOGICA, AHORA MISMO SOLO NOS SERVIRA PARA ARRASTRAR NUESTRAS IMAGENES PARA PODER TENER INTERACCION Y MOVIMIENTO DE LAS MISMAS

let currentImageIndex = 0;
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    document.getElementById("background-image").src = images[currentImageIndex];
}
