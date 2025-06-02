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
            <div class="card bg-gray-800 rounded-lg overflow-hidden shadow-md flex flex-col h-full">
                <img class="w-full h-56 object-cover" src="${event.image}" alt="${event.name}">
                <div class="p-3 flex flex-col flex-grow">
                    <h3 class="text-lg font-semibold font-poppins">${event.name}</h3>
                    <p class="text-gray-400 text-sm font-opensans">${event.location}</p>
                    <div class="flex justify-end mt-auto">
                        <button
                            class="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-poppins text-sm"
                            onclick="window.location.href='event-detail.html?id=${event.id}'"
                        >
                            See More
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
}


// Panggil fungsi saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", loadEvents);