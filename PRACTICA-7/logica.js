// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    const listaCarrito = document.getElementById('lista-carrito');
    const item = document.createElement('li');
    item.textContent = producto;
    listaCarrito.appendChild(item);
}
