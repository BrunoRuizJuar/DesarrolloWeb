document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    
    // Obtener los valores de usuario y contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Validar las credenciales (este es solo un ejemplo simple)
    if (username === 'usuario' && password === 'contraseña') {
        // Si las credenciales son correctas, redirigir a la página principal
        window.location.href = '../html/index.html'
    } else {
        // Si las credenciales son incorrectas, mostrar un mensaje de error
        document.getElementById('error-message').innerText = 'Usuario o contraseña incorrectos';
    }
});
