const form = document.getElementById('formContacto');
const result = document.getElementById('resultContacto');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    const Dni = formData.get('dni');
    const mySubject = `Contacto :: ${Dni}`;
    formData.append("subject", mySubject);

    e.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
        object[key] = value
    });
    var json = JSON.stringify(object);
    resultContacto.innerHTML = "Por favor espere..."

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
                resultContacto.innerHTML = "¡Mensaje enviado!";
            } else {
                console.log(response);
                resultContacto.innerHTML = "¡Mensaje enviado!";
            }
        })
        .catch(error => {
            console.log(error);
            resultContacto.innerHTML = "¡Algo salió mal, pruebe nuevamente!";
        })
        .then(function() {
            formContacto.reset();
            setTimeout(() => {
                resultContacto.innerHTML = "Enviar un nuevo mensaje";
            }, 3000);
        });
});