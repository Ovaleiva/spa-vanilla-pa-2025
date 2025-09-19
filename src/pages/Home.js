import getData from '../utils/getData';   // 👈 este import es el que faltaba

const Home = async () => {
  const launches = await getData();   // devuelve array completo de lanzamientos
  return `
    <div class="Launches">
      ${launches.slice(0, 20).map(l => `
        <article class="Launch-card">
          <a href="#/${l.id}">
            <img src="${l.links.patch.small || ''}" alt="${l.name}">
            <h2>${l.name}</h2>
          </a>
        </article>
      `).join('')}
    </div>
  `;
};

export default Home;