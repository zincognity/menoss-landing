document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    const usuarioEncontrado = usuarios.find(
      (u) => u.email === email && u.password === password
    );

    if (usuarioEncontrado) {
      alert("¡Bienvenido, " + usuarioEncontrado.name + "!");
      // Aquí puedes redirigir al usuario a la página principal
      window.location.href = "/src/pages/home.html";
    } else {
      alert("Correo o contraseña incorrectos");
    }
  });
});
