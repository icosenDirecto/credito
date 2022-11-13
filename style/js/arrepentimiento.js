const form = document.getElementById('formArrepentimiento');
const result = document.getElementById('resultArrepentimiento');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    const Dni = formData.get('dni', 'prestamo consumo', 'asistencia salud');
    const mySubject = `Arrepentimiento :: ${Dni}`;
    formData.append("subject", mySubject);

    e.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
        object[key] = value
    });
    var json = JSON.stringify(object);
    resultArrepentimiento.innerHTML = "Por favor espere..."

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
                resultArrepentimiento.innerHTML = "¡Mensaje enviado!";
            } else {
                console.log(response);
                resultArrepentimiento.innerHTML = "¡Mensaje enviado!";
            }
        })
        .catch(error => {
            console.log(error);
            resultArrepentimiento.innerHTML = "¡Algo salió mal, pruebe nuevamente!";
        })
        .then(function() {
            formContacto.reset();
            setTimeout(() => {
                resultArrepentimiento.innerHTML = "Enviar un nuevo mensaje";
            }, 3000);
        });
});