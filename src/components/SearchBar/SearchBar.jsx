import {useState} from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

   return (
      <div className={styles.nav}>
         <input type='search' className={styles.search} onChange={handleChange} />
      <button className={styles.boton} onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
};