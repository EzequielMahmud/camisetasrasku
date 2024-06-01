function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    let valid = true;

    if (name === "") {
        alert("El nombre es obligatorio");
        valid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "" || !emailPattern.test(email)) {
        alert("Por favor, ingresa un email válido");
        valid = false;
    }

    const phonePattern = /^\+?[0-9]{7,14}$/;
    if (phone === "" || !phonePattern.test(phone)) {
        alert("Por favor, ingresa un teléfono válido (desde 7 hasta 14 dígitos, puede incluir el prefijo '+')");
        valid = false;
    }

    if (message === "") {
        alert("El mensaje es obligatorio");
        valid = false;
    }

    return valid;
}

document.getElementById('formulario').onsubmit = function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
}