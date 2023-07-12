import styles from "./MenuPage.module.css";

const drinks = [
  {
    name: "Vodka",
    imageUrl:
      "https://res.cloudinary.com/kxnxchukwu/image/upload/v1689076493/DrinksWebsite/rectangle-14_2x_i04ddz.png",
  },
  {
    name: "Tequila",
    imageUrl:
      "https://res.cloudinary.com/kxnxchukwu/image/upload/v1689076490/DrinksWebsite/rectangle19_3x_mpaopz.png",
  },
  {
    name: "Champagne",
    imageUrl:
      "https://res.cloudinary.com/kxnxchukwu/image/upload/v1689076496/DrinksWebsite/rectangle-21_2x_hirdae.png",
  },
  {
    name: "Cognac",
    imageUrl:
      "https://res.cloudinary.com/kxnxchukwu/image/upload/v1689076498/DrinksWebsite/rectangle-23_2x_b9jhwz.png",
  },
];

export default function MenuPage() {
  return (
    <div
      style={{
        backgroundImage: `url('https://res.cloudinary.com/kxnxchukwu/image/upload/v1689156103/iphone-14--4_3x_hxnmni.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        minHeight: "100vh",
        minWidth: "100vw",
        overflow: "auto",
      }}
    >
      <div>
        <h1 className={styles.menu}>Menu</h1>
      </div>

      <div className={styles.buttons}>
        <button className={styles.button}>Bottles and Drinks</button>
        <button className={styles.button}>Shisha</button>
      </div>

      <di className={styles.container}>
        {drinks.map((drink, index) => (
          <div key={index}>
            <img
              src={drink.imageUrl}
              alt={drink.name}
              className={styles.image}
            />
            <h2 className={styles.name}>{drink.name}</h2>
          </div>
        ))}
      </di>
    </div>
  );
}
