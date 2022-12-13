import { useEffect, useState } from 'react';

const ListCocktails = () => {
    const [cocktailsData, setCocktailData] = useState([]);

    useEffect(() => {
        (async () => {
        const cocktailResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
        const cocktailResponseData = await cocktailResponse.json();
        setCocktailData(cocktailResponseData.drinks);
    })();
    }, []);

    return (
        <div>
            {cocktailsData.map((cocktail) => {
                return (
                    <div>
                        <h2>{cocktail.strDrink}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default ListCocktails;