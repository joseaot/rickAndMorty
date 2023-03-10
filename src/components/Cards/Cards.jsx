import styles from './Cards.module.css'
import Card from '../Card/Card';

export default function Cards(props) {
   const { characters, onClose } = props;
   return(

      <div className={styles.cartas}>
         {
         characters.map(({id,name, species, gender, image})=>{
            return <Card
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
            />
         })
         };
      </div>
   )
}




