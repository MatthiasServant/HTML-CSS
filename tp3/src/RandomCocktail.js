import { useState } from 'react';

const RandomCocktail = () => {
    const [cocktailData, setCocktailData] = useState(null);

    const handleClick = async () => {
        const cocktailResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const cocktailResponseData = await cocktailResponse.json();
        setCocktailData(cocktailResponseData);
    };

    return (
        <div>
            <button onClick={handleClick}>Afficher une recette</button>
            {cocktailData ? (
                <div>
                    <h1>{cocktailData.drinks[0].strDrink}</h1>
                    <img src={cocktailData.drinks[0].strDrinkThumb} />
                    <h3>{cocktailData.drinks[0].strCategory}</h3>
                </div>
            ) : (
                <h1>Chargement du cocktail</h1>
            )}
        </div>
    )
}

export default RandomCocktail;