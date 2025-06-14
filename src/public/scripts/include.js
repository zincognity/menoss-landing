document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("[data-include]");
  includes.forEach(async el => {
    const file = el.getAttribute("data-include");
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error("Error al cargar: " + file);
      const content = await response.text();
      el.innerHTML = content;
    } catch (err) {
      el.innerHTML = `<p style="color:red;">${err.message}</p>`;
      console.error(`${err.message}`);
    }
  });
});
