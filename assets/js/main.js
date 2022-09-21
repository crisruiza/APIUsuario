console.log("Entro al main.js");

const base_url_api = "http://ucamp.alumnos.dev4humans.com.mx";
const tblUsuarios = document.getElementById("tblUsuarios");

function cargarUsuario() {
  fetch(base_url_api + "/Main/alumnos", { method: "GET" })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      tblUsuarios.innerHTML = "";
      for (const usuario of result.data) {
        let tr = `<tr>	
          <td>${usuario.nombre}</td>	
          <td>${usuario.paterno}</td>	
          <td>${usuario.materno}</td>	
          <td>${usuario.email}</td>		
          </tr>`;
        tblUsuarios.innerHTML += tr;
      }
    })
    .catch((error) => {
      console.log("Ocurrió un error");
    });
}
function agregarUsuario() {
  let form_data = new FormData();
  form_data.append("nombre", document.getElementById("nombre").value);
  form_data.append("paterno", document.getElementById("paterno").value);
  form_data.append("materno", document.getElementById("materno").value);
  form_data.append("email", document.getElementById("email").value);

  fetch(base_url_api + "/Main/alumnos", { method: "POST", body: form_data })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      limpiarFormulario();
      cargarUsuario();
    })
    .catch((error) => {
      console.log("Ocurrió un error");
    });
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("paterno").value = "";
  document.getElementById("materno").value = "";
  document.getElementById("email").value = "";
}
