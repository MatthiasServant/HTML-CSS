import { useState } from 'react';
import CocktailSearchForm from './CocktailSearchForm';
import ShowCocktail from './ShowCocktail';

const CocktailSearch = () => {
    //on vient affecter à notre variable cocktailsData un tableau de cocktails
    const [cocktailsData, setCocktailData] = useState([]);
    // on vient affecter à notre variable searchTerm la valeure de notre input

    //au clique du bouton on vient fetch les données de notre API avec notre variable searchTerm
    const handleClick = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e.target.search.value}`);
        const responseData = await response.json();
        setCocktailData(responseData.drinks);
    }

    return (
        <div>
                <CocktailSearchForm handleClick={handleClick} />
            {/* on passe chaque cocktail dans le component ShowCocktail */}
            {cocktailsData.map((cocktail) => {
                return (
                    <ShowCocktail cocktail = {cocktail}/>
                )
            })}
        </div>
    )
}

export default CocktailSearch;


