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
                resultContacto.innerHTML = json.message;
            } else {
                console.log(response);
                resultContacto.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            resultContacto.innerHTML = "¡Mensaje enviado!";
        })
        .then(function() {
            formContacto.reset();
            setTimeout(() => {
                resultContacto.style.display = "none";
            }, 3000);
        });
});