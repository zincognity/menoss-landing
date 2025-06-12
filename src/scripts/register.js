document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("register-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Recuperar usuarios previos
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    // Verificar si ya existe
    if (usuarios.find(u => u.email === email)) {
      alert("Ya existe un usuario con este correo.");
      return;
    }

    // Agregar nuevo usuario
    usuarios.push({ name, email, password });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    window.location.href = "/src/pages/login.html";
  });
});
