document.addEventListener("DOMContentLoaded", function () {
    fetch("clients.json")
      .then(response => response.json())
      .then(data => {
        const container = document.querySelector(".grid"); // Select the grid container

        data.forEach(client => {
          const div = document.createElement("div");
          div.className = "border p-4 flex items-center justify-center";

          const img = document.createElement("img");
          img.src = client.src;
          img.alt = client.alt;

          div.appendChild(img);
          container.appendChild(div);
        });
      })
      .catch(error => console.error("Error loading client data:", error));
});