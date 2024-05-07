document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    
    // Obtener los valores de los campos del formulario
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    
    // Verificar si las contraseñas son iguales
    if (password !== confirmPassword) {
        document.getElementById('error-message').innerText = 'Las contraseñas no coinciden';
        return; // Detener la ejecución si las contraseñas no coinciden
    }
    
    // Si las contraseñas son iguales, redirigir a la página principal
    window.location.href = '../html/index.html';
});