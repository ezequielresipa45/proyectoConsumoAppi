let contenedorPrincipal = document.getElementsByClassName(
  "contenedorPrincipal"
)[0];

let contenedor = document.getElementsByClassName("contenedor")[0];

let boton = document.getElementById("boton-enviar");

let input = document.getElementById("input-number");

let spinner = document.getElementsByClassName("spinner")[0];

let atras = document.getElementsByClassName("atras")[0];

boton.style.display = "none";

input.addEventListener("keyup", (e) => {
  if (input.value === "" || input.value > 100) {
    boton.style.display = "none";
  } else {
    boton.style.display = "flex";
  }
});

boton.addEventListener("click", () => {
  let URL = `https://dog.ceo/api/breed/hound/images/random/${input.value}`;

  contenedorPrincipal.style.display = "none";
  contenedor.style.display = "flex";

  spinner.style.display = "flex";
  setTimeout(() => {
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((perros) => {
        spinner.style.display = "none";
        atras.style.display = "flex";
        const { message } = perros;
        console.log(message);

        for (let i = 0; i < message.length; i++) {
          let img = document.createElement("img");
          contenedor.appendChild(img);
          img.src = message[i];
        }
      });
  }, 2000);
});
