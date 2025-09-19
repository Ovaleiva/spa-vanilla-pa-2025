import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Launch = async () => {
  const id = getHash();
  const launch = await getData(id);

  return `
    <div class="Launch-detail">
<img src="${launch.links?.patch?.small || ''}" alt="${launch.name}">
      <h2>${launch.name}</h2>
      <p><strong>Flight Nº:</strong> ${launch.flight_number}</p> // Número de vuelo
      <p><strong>Date:</strong> ${new Date(launch.date_utc).toLocaleString()}</p> // Formateo de fecha
      <p><strong>Details:</strong> ${launch.details || "No details available"}</p> // Manejo de detalles nulos
      <p><strong>Failures:</strong> ${launch.failures.length > 0 ? launch.failures.map(f => f.reason).join(', ') : "None"}</p> // Mostrar razones de fallos si existen
    </div>
  `;
};

export default Launch;