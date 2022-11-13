const form = document.getElementById('formBaja');
const result = document.getElementById('resultBaja');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    const Dni = formData.get('dni');
    const mySubject = `Botón de Baja :: ${Dni}`;
    formData.append("subject", mySubject);

    e.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
        object[key] = value
    });
    var json = JSON.stringify(object);
    resultBaja.innerHTML = "Por favor espere..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                resultBaja.innerHTML = "¡Mensaje enviado!";
            } else {
                console.log(response);
                resultBaja.innerHTML = "¡Mensaje enviado!";
            }
        })
        .catch(error => {
            console.log(error);
            resultBaja.innerHTML = "¡Algo salió mal, pruebe nuevamente!";
        })
        .then(function() {
            formBaja.reset();
            setTimeout(() => {
                resultBaja.innerHTML = "Enviar un nuevo mensaje";
            }, 3000);
        });
});