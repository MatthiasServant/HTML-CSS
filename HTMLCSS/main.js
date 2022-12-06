const root = document.querySelector('#root');
const ingredient = document.querySelector('#ingredient');


const button = document.createElement('button');
button.textContent = 'Click me';

root.appendChild(button);

const fetchRandomDrink = async () => {
    const responseCocktail = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');

    return await responseCocktail.json();
}

function getIngredients(drink){
    const ul = document.createElement('ul')

    for(let i = 1; i<=15; i++){
        if(drink['strIngredient' + i] !== null ){
        const liEl = document.createElement("li");
        liEl.textContent = drink['strIngredient' + i];
        ul.appendChild(liEl);
        }
    }
    
    return ul;
}

button.addEventListener("click", async () =>{
   ingredient.innerHTML = '';
   const response = await fetchRandomDrink();
   const randomDrink = response.drinks[0];
   console.log(randomDrink);

   const h1 = document.createElement('h1');
   const h2 = document.createElement('h3');
   const img = document.createElement('img');
   const p = document .createElement('p');

   h1.textContent = randomDrink.strDrink;
   h2.textContent = randomDrink.strCategory;
   img.src = randomDrink.strDrinkThumb;
   p.textContent = randomDrink.strInstructions;

   ingredient.appendChild(h1);
   ingredient.appendChild(h2);
   ingredient.appendChild(img);
   ingredient.appendChild(getIngredients(randomDrink));
   ingredient.appendChild(p);

});
