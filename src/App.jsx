import './App.css'
import spiderman from './assets/spiderman-pelicula_979270-2918.avif'

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>🕷️ Spider-Man 🕷️</h1>
        <p>Un Héroe, Muchas Aventuras</p>
      </header>

      <main>

        <section className="imagen">
          <img src={spiderman} alt="Spider-Man" />
        </section>

        <section className="intro">
          <h2>Bienvenidos</h2>
          <p>
            Spider-Man es uno de los personajes más conocidos de Marvel.
            Con sus habilidades, inteligencia y sentido de responsabilidad,
            protege a las personas y enfrenta diferentes amenazas.
          </p>
        </section>

        <section className="cards">
          <div className="card">
            <h3>🕷️ Habilidades</h3>
            <p>
              Fuerza, agilidad, reflejos, sentido arácnido y la capacidad de
              desplazarse utilizando telarañas.
            </p>
          </div>

          <div className="card">
            <h3>🎬 Películas</h3>
            <p>
              Spider-Man ha protagonizado numerosas películas y diferentes
              versiones del personaje a lo largo de los años.
            </p>
          </div>

          <div className="card">
            <h3>🦸 Héroe</h3>
            <p>
              Peter Parker utiliza sus habilidades para ayudar a los demás y
              asumir la responsabilidad de ser Spider-Man.
            </p>
          </div>
        </section>

        <section className="quote">
          <h2>El poder también significa responsabilidad</h2>
          <p>
            "Un gran poder conlleva una gran responsabilidad"
          </p>
        </section>

      </main>

      <footer>
        <p>© 2026 - Proyecto Spider-Man | Creado con React + Vite</p>
      </footer>
    </div>
  )
}

export default App