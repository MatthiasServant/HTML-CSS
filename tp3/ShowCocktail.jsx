import style from './style.css';

const ShowCocktail = (props) => {

    const cocktail = props.cocktail;

    const getIngredients = () => {
        const ingredients = [];
        for(let i = 1; i <=15;i++){
            if (cocktail['strIngredient'+i]){
                ingredients.push(cocktail['strIngredient'+i])
            }
        }
        return ingredients;
    }

    return(
        <div class ="cocktail-container">
        <h1 class="cocktail-name " >{cocktail.strDrink}</h1>
        <img class="cocktail-image" src = {cocktail.strDrinkThumb}></img>
        <h3 class ="cocktail-category">{cocktail.strCategory}</h3>
        {getIngredients().map((ingredient) => {
            return(
                <div key = {cocktail.idDrink}>
                    <p class="ingredient" >{ingredient}</p>
                </div>
            )
        })}
    </div>
    );
}

export default ShowCocktail