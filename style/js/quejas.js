const form = document.getElementById('formQuejas');
const result = document.getElementById('resultQuejas');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    const Nombre = formData.get('nombre-apellido');
    const mySubject = `Libro de Quejas :: ${Nombre}`;
    formData.append("subject", mySubject);

    e.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
        object[key] = value
    });
    var json = JSON.stringify(object);
    resultQuejas.innerHTML = "Por favor espere..."

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
                resultQuejas.innerHTML = "¡Mensaje enviado!";
            } else {
                console.log(response);
                resultQuejas.innerHTML = "¡Mensaje enviado!";
            }
        })
        .catch(error => {
            console.log(error);
            resultQuejas.innerHTML = "¡Algo salió mal, pruebe nuevamente!";
        })
        .then(function() {
            formQuejas.reset();
            setTimeout(() => {
                resultQuejas.innerHTML = "Enviar un nuevo mensaje";
            }, 3000);
        });
});