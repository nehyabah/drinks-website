
import DrinkContainer from '../../components/DrinkContainer/DinkContainer';
import styles from './MenuPage.module.css';

const drinks = [
    {
        name: "Vodka",
        imageUrl: 'https://res.cloudinary.com/kxnxchukwu/image/upload/v1689076493/DrinksWebsite/rectangle-14_2x_i04ddz.png',
    },
    {
        name: "Tequila",
        imageUrl: 'https://res.cloudinary.com/kxnxchukwu/image/upload/v1689076490/DrinksWebsite/rectangle19_3x_mpaopz.png',
    },
    {
        name: "Champagne",
        imageUrl: "https://res.cloudinary.com/kxnxchukwu/image/upload/v1689076496/DrinksWebsite/rectangle-21_2x_hirdae.png",
    },
    {
        name: "Cognac",
        imageUrl: 'https://res.cloudinary.com/kxnxchukwu/image/upload/v1689076498/DrinksWebsite/rectangle-23_2x_b9jhwz.png',
    },
]

export default function MenuPage() {
    return (
        <div>
            <div className={styles.menuContainer}>
            <h1 className={styles.menuText}>Menu</h1>
            </div>

            <div className={`d-flex justify-content-around ${styles.menuButtonContainer}`}>
                <button className={`${styles.menuButton}`}>Bottles and Drinks</button>
                <button className={`${styles.menuButton}`}>Shisha</button>
            </div>

            <div className={`${styles.menuDrinkContainer} d-flex justify-content-around row gy-5 px-4`}>
                {drinks.map(({imageUrl, name}, index) => {   
                    return (
                        <div class="col-5"><DrinkContainer key={index} imageUrl={imageUrl} name={name}  />
                        </div>
                        
                    )
                })} 
            </div>

            
        </div>
    )
}