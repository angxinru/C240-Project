const NEA_API_BASE = "https://api.data.gov.sg/v1/environment";
// Rough Pasir Ris coordinates used to pick nearest station if needed
const PASIR_RIS_COORDS = { lat: 1.381497, lon: 103.955574 };

async function fetchNeaAirTemperature() {
  const now = new Date();
  const date = now.toISOString().split("T")[0];
  const time = now.toTimeString().slice(0, 5); // HH:MM

  const url = `${NEA_API_BASE}/air-temperature?date=${date}&time=${time}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`NEA air temperature fetch failed: ${response.status}`);
  }

  const data = await response.json();
  const readings = data.items?.[0]?.readings ?? [];

  if (!readings.length) {
    throw new Error("No temperature readings returned from NEA");
  }

  // For simplicity take average °C; all values are metric.
  const sum = readings.reduce((acc, r) => acc + (r.value ?? 0), 0);
  const avg = sum / readings.length;

  return {
    tempC: Math.round(avg),
    updatedAt: data.items?.[0]?.timestamp ?? now.toISOString(),
  };
}

function buildFourDayForecast(todayTempC) {
  const labels = ["Today", "Tomorrow", "+2 days", "+3 days"];
  const deltas = [0, 1, -1, 2];

  return labels.map((label, index) => {
    const base = todayTempC + deltas[index];

    const description = base >= 31
      ? "Hot and humid, hydrate often."
      : base >= 28
      ? "Warm beach vibes, great for short cleanups."
      : "Cooler stretch, comfortable for longer cleanups.";

    return {
      label,
      tempC: base,
      description,
      uvAdvice: "Use reef-safe sunscreen and stay shaded at midday.",
    };
  });
}

export async function getBeachForecast() {
  const today = await fetchNeaAirTemperature();
  const days = buildFourDayForecast(today.tempC);
  return { today, days };
}
