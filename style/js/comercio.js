const form = document.getElementById('formComercio');
const result = document.getElementById('resultComercio');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    const Empresa = formData.get('compania');
    const mySubject = `Nuevo Comercio :: ${Empresa}`;
    formData.append("subject", mySubject);

    e.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
        object[key] = value
    });
    var json = JSON.stringify(object);
    resultComercio.innerHTML = "Por favor espere..."

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
                resultComercio.innerHTML = "¡Mensaje enviado!";
            } else {
                console.log(response);
                resultComercio.innerHTML = "¡Mensaje enviado!";
            }
        })
        .catch(error => {
            console.log(error);
            resultComercio.innerHTML = "¡Algo salió mal, pruebe nuevamente!";
        })
        .then(function() {
            formComercio.reset();
            setTimeout(() => {
                resultComercio.innerHTML = "Enviar un nuevo mensaje";
            }, 3000);
        });
});