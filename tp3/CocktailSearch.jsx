import { useState } from 'react';
import ShowCocktail from './ShowCocktail';

const CocktailSearch = () => {
    //on vient affecter à notre variable cocktailsData un tableau de cocktails
    const [cocktailsData, setCocktailData] = useState([]);
    // on vient affecter à notre variable searchTerm la valeure de notre input
    const [searchTerm, setSearchTerm] = useState('');

    //au clique du bouton on vient fetch les données de notre API avec notre variable searchTerm
    const handleClick = async () => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const responseData = await response.json();
        setCocktailData(responseData.drinks);
    }

    return (
        <div>
            {/* formulaire de recherche */}
            <input 
                placeholder='Cherchez un cocktail...'
                //On affecte la valeur de notre input à notre variable searchTerm
                onChange={e => setSearchTerm(e.target.value)}
            ></input>
            {/* au clique du bouton, on appelle la fonction handleClick */}
            <button onClick={handleClick}>Afficher une recette</button>
            <div>
            {/* on passe chaque cocktail dans le component ShowCocktail */}
            {cocktailsData.map((cocktail) => {
                return (
                    <ShowCocktail cocktail = {cocktail}/>
                )
            })}
        </div>
        </div>
    )
}

export default CocktailSearch;


