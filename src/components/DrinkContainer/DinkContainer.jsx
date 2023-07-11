import styles from "./DrinkContainer.module.css";

export default function DrinkContainer({ imageUrl, name }) {
  return (
    <div className="p-3">
      <img className="img-responsive" src={imageUrl} alt={name} />
      <div className={styles.textContainer}>
        <p className={`${styles.text} text-center`}>{name}</p>
      </div>
    </div>
  );
}
