async function loadEvents() {
  try {
      const response = await fetch('events.json'); // Ambil data dari events.json
      const events = await response.json(); // Convert ke JSON

      // Render data ke masing-masing tahun
      document.getElementById("portfolio-2024").innerHTML = renderEvents(events, 2024);
      document.getElementById("portfolio-2023").innerHTML = renderEvents(events, 2023);
  } catch (error) {
      console.error("Error loading events:", error);
  }
}

// Fungsi untuk membuat kartu event berdasarkan tahun
function renderEvents(events, year) {
  return events
      .filter(event => event.year === year)
      .map(event => `
          <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img class="w-full h-48 object-cover" src="${event.image}" alt="${event.name}">
            <div class="p-4">
                <h3 class="text-xl font-semibold">${event.name}</h3>
                <p class="text-gray-400">${event.location}</p>
                <div class="flex justify-end"> <!-- Added flex container -->
                    <a class="mt-2 inline-block bg-cyan-500 text-white px-4 py-2 rounded-full hover:bg-cyan-600 transition" href="#">See More</a>
                </div>
            </div>
        </div>
      `).join('');
}

// Panggil fungsi saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", loadEvents);
