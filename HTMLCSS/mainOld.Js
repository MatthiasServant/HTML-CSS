const root = document.querySelector('#root')
const div = document.querySelector('#div')

function clear(){
    root.innerHTML = null;
}


async function fetchRandomCocktail(){
    try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const data = await response.json();
        
        return  data.drinks[0];
    } catch (error) {
        throw new Error("An error occured while fetching the cocktail data");
    }
}


async function getIngredients(){
    const getDrink = await fetchRandomCocktail()
    let drinkIngredientArray = []

    for(let i=1; i < 16; i++){
        let ingr = getDrink[`strIngredient${i}`]
        if(ingr != null){
            drinkIngredientArray.push(ingr)
        }
    }
    return drinkIngredientArray
}

async function renderRandomCocktail(){
    const randomDrink = await fetchRandomCocktail() 

    const drinkThumbnail = createElement('img', '', randomDrink.strDrinkThumb)
    drinkThumbnail.src = randomDrink.strDrinkThumb
    const drinkName = createElement('span', '', randomDrink.strDrink)
    const drinkInstruction = createElement('span', '', randomDrink.strInstructions)
    const drinkCategory = createElement('span', '', randomDrink.strCategory)
    const drinkIngredient = createElement('span', '', await getIngredients())

    root.append(drinkName)
    root.append(drinkThumbnail)
    root.append(drinkCategory)
    root.append(drinkInstruction)
    root.append(drinkIngredient)
}


const createElement = (type, classes, text = '') => {
    const element = document.createElement(type);
    
    for (const className of classes) {
        element.classList.add(className);
    }

    if (text !== '') {
        element.textContent = text;
    }

    div.appendChild(element);
    return element;
} 


const button = createElement('button', '', 'Click me!');


button.addEventListener('click', async () => {
    clear()
    renderRandomCocktail()
})