loadDoc()
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '../JSON/contenido.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log('this.responseText');
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let res = document.querySelector('#res');
            res.innerHTML = '';
            for (let item of datos) {
                res.innerHTML += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.email}</td>
                        <td>${item.username}</td>
                        <td>${item.phone}</td>
                        <td>${item.website}</td>
                    </tr>
                `
            }

        }
    }
}
