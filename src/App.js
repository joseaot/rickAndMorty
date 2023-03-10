import Cards from '../src/components/Cards/Cards'
import styles from '../src/components/styles/styles.module.css'
import titulo from '../src/img/RickandMorty.png'
import Nav from '../src/components/Nav/Nav';
import { useState } from "react";




function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "2d0fd52418f5.d3d6077a3b4c1857914f";

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
          // setCharacters([...characters, data]);
        } else {
          alert("ID Ya fue agregado o No es valido");
        }
      });
  };

  const onClose = (id) => {
    // porque filter.... no modifica el array original
    setCharacters(characters.filter((char) => char.id !== id));

  };


  return (
    <div className={styles.divFondo}>
      <div>
        <Nav onSearch={onSearch} />
      </div>
      <div>
        <img src={titulo} className={styles.titulo}></img>
      </div>
      <div>
        <Cards
          characters={characters} onClose={onClose} 
        />
      </div>
    </div>
  )
};

export default App
