document.addEventListener("DOMContentLoaded", () => {
  const nextSlotEl = document.getElementById("next-slot");
  const weatherSummaryEl = document.getElementById("weather-summary");
  const crewListEl = document.getElementById("crew-list");
  const locationForm = document.querySelector(".hero-cta");
  const locationInput = document.getElementById("location-input");

  const demoSlots = [
    {
      label: "Sat • 8–10am",
      reason: "Cool temps, low UV, low tide window",
    },
    {
      label: "Sun • 4–6pm",
      reason: "Breeze picks up, sunset clean-and-chill",
    },
    {
      label: "Wed • 6–7:30pm",
      reason: "After-class micro cleanup with golden hour",
    },
  ];

  const crew = [
    {
      name: "East Coast Park Pier",
      host: "@shoreclub.sg",
      time: "Sat • 9am",
      spots: 6,
    },
    {
      name: "Pasir Ris – Mangrove edge",
      host: "RP Green Crew",
      time: "Sun • 4:30pm",
      spots: 9,
    },
    {
      name: "Changi Boardwalk",
      host: "Hall 3 Squad",
      time: "Thu • 6pm",
      spots: 4,
    },
  ];

  function pickSlot(slots) {
    const hour = new Date().getHours();
    const index = hour % slots.length;
    return slots[index];
  }

  function hydrateNextSlot() {
    const slot = pickSlot(demoSlots);
    if (nextSlotEl) {
      nextSlotEl.textContent = `${slot.label} – ${slot.reason}`;
    }
  }

  function hydrateWeather() {
    if (!weatherSummaryEl) return;
    const hour = new Date().getHours();

    let summary;
    if (hour < 10) {
      summary = "Chill morning swells, UV is friendlier. Great for cleanups.";
    } else if (hour < 17) {
      summary = "Bit warm; hydrate and aim for shaded stretches.";
    } else {
      summary = "Breezy with softer sun. Pack a headlamp if you’re pushing it.";
    }

    weatherSummaryEl.textContent = summary;
  }

  function renderCrew() {
    if (!crewListEl) return;
    crewListEl.innerHTML = "";

    crew.forEach((spot) => {
      const card = document.createElement("article");
      card.className = "crew-card";
      card.innerHTML = `
        <div class="crew-chip">Open cleanup</div>
        <h3>${spot.name}</h3>
        <p class="crew-meta">
          <span>${spot.time}</span>
          <span>${spot.spots} spots left</span>
        </p>
        <p class="crew-meta">
          <span>Host: ${spot.host}</span>
          <button type="button" class="btn-ghost">Save spot</button>
        </p>
      `;

      const button = card.querySelector(".btn-ghost");
      button?.addEventListener("click", () => {
        button.textContent = "Saved";
        button.setAttribute("aria-pressed", "true");
      });

      crewListEl.appendChild(card);
    });
  }

  if (locationForm && locationInput) {
    locationForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = locationInput.value.trim();
      if (!value) {
        locationInput.focus();
        return;
      }

      const toast = document.createElement("div");
      toast.role = "status";
      toast.textContent = `We’ll surface cleanups near ${value} soon.`;
      document.body.appendChild(toast);

      setTimeout(() => toast.remove(), 2200);
    });
  }

  hydrateNextSlot();
  hydrateWeather();
  renderCrew();
});
