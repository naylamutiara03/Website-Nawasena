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

function renderEvents(events, year) {
    return events
        .filter(event => event.year === year)
        .map(event => `
            <div class="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <img class="w-full h-56 object-cover" src="${event.image}" alt="${event.name}">
                <div class="p-3">
                    <h3 class="text-lg font-semibold font-poppins">${event.name}</h3>
                    <p class="text-gray-400 text-sm font-opensans">${event.location}</p>
                    <div class="flex justify-end">
                        <a class="mt-2 inline-block bg-cyan-500 text-white px-3 py-1.5 text-sm rounded-full hover:bg-cyan-600 transition font-poppins" href="event-detail.html?id=${event.id}">See More</a>
                    </div>
                </div>
            </div>
        `).join('');
}

function redirectToDetail(id) {
    window.location.href = `event-detail.html?id=${id}`;
}


// Panggil fungsi saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", loadEvents);
