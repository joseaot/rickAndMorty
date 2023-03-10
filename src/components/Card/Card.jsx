import styles from './Card.module.css';
export default function Card({ id, name, species, gender, image, onClose }) {
   return (
      <div className={styles.tarjetas}>
          <button onClick={() => onClose(id)} className={styles.boton}>
        X
      </button>
         <h2 className={styles.h2}>{name}</h2>
         <img className={styles.img}  src={image} alt="" />
         <h2 className={styles.h2}>Especie: {species}</h2>
         <h2 className={styles.h2}>Genero: {gender}</h2>
      </div>
   );
}



