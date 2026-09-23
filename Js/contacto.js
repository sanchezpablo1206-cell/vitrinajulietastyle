// =========================================
// FORMULARIO DE CONTACTO
// Vitrina Julieta Style
// =========================================


// =========================================
// OBTENER ELEMENTOS
// =========================================

const nombre = document.querySelector("#nombre");

const correo = document.querySelector("#correo");

const asunto = document.querySelector("#asunto");

const mensaje = document.querySelector("#mensaje");

const botonEnviar = document.querySelector("#boton-enviar");

const modal = document.querySelector("#modal-exito");

const mensajeExito = document.querySelector("#mensaje-exito");

const cerrarModal = document.querySelector("#cerrar-modal");

const botonModal = document.querySelector("#boton-modal");


// =========================================
// BOTÓN ENVIAR
// =========================================

botonEnviar.addEventListener("click", function () {


    // =====================================
    // VALIDAR NOMBRE
    // =====================================

    if (nombre.value.trim() === "") {

        alert("Por favor, ingresa tu nombre completo.");

        nombre.focus();

        return;
    }


    // =====================================
    // VALIDAR CORREO
    // =====================================

    if (correo.value.trim() === "") {

        alert("Por favor, ingresa tu correo electrónico.");

        correo.focus();

        return;
    }


    // Validar formato del correo

    if (!correo.checkValidity()) {

        alert("Por favor, ingresa un correo electrónico válido.");

        correo.focus();

        return;
    }


    // =====================================
    // VALIDAR ASUNTO
    // =====================================

    if (asunto.value === "") {

        alert("Por favor, selecciona un asunto.");

        asunto.focus();

        return;
    }


    // =====================================
    // VALIDAR MENSAJE
    // =====================================

    if (mensaje.value.trim() === "") {

        alert("Por favor, escribe tu mensaje.");

        mensaje.focus();

        return;
    }


    // =====================================
    // OBTENER NOMBRE
    // =====================================

    const nombreUsuario = nombre.value.trim();


    botonEnviar.disabled = true;

    botonEnviar.innerHTML = "Enviando...";


    setTimeout(function () {


        // =================================
        // MENSAJE PERSONALIZADO
        // =================================

        mensajeExito.innerHTML =
            `<strong>¡${nombreUsuario}!</strong><br>
            Tu mensaje se envió correctamente.`;


        // =================================
        // MOSTRAR MODAL
        // =================================

        modal.classList.add("mostrar");


        // =================================
        // RESTAURAR BOTÓN
        // =================================

        botonEnviar.disabled = false;

        botonEnviar.innerHTML =
            "<span>✈</span> Enviar mensaje";


        // =================================
        // LIMPIAR CAMPOS
        // =================================

        nombre.value = "";

        correo.value = "";

        asunto.value = "";

        mensaje.value = "";


    }, 1500);

});


// =========================================
// CERRAR MODAL
// =========================================

cerrarModal.addEventListener("click", function () {

    modal.classList.remove("mostrar");

});


botonModal.addEventListener("click", function () {

    modal.classList.remove("mostrar");

});


// =========================================
// CERRAR AL HACER CLIC FUERA
// =========================================

modal.addEventListener("click", function (evento) {

    if (evento.target === modal) {

        modal.classList.remove("mostrar");

    }

});


// =========================================
// CERRAR CON ESC
// =========================================

document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape") {

        modal.classList.remove("mostrar");

    }

});