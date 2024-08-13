document.getElementById('boton').addEventListener('click', function(event) {
    event.stopPropagation(); 
    alert('Botón presionado');
});
