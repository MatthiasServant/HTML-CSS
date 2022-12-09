class CocktailFetcher {
    constructor() {
      this.root = document.querySelector('#root');
      this.div = document.querySelector('#div');
    }
  
    async getIngredients(cocktail) {
      const drinkIngredientArray = [];
  
      for (let i = 1; i < 16; i += 1) {
        const ingr = cocktail[`strIngredient${i}`];
        if (ingr != null) {
          drinkIngredientArray.push(ingr);
        }
      }
  
      return drinkIngredientArray;
    }
  
    createElement(type, classes, text = '') {
      const element = document.createElement(type);
  
      for (const className of classes) {
        element.classList.add(className);
      }
  
      if (text !== '') {
        element.textContent = text;
      }
  
      this.div.appendChild(element);
      return element;
    }
  
    async renderSearchedCocktails(name) {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        const data = await response.json();
  
        const cocktails = data.drinks;
  
        if (!cocktails || cocktails.length === 0) {
          throw new Error('PAS DE COCKTAIL QUI PORTE CE NOM :)');
        }
  
        for (const cocktail of cocktails) {
          const drinkThumbnail = this.createElement('img', '', cocktail.strDrinkThumb);
          drinkThumbnail.src = cocktail.strDrinkThumb;
          const drinkName = this.createElement('h1', '', cocktail.strDrink);
          const drinkInstruction = this.createElement('span', '', cocktail.strInstructions);
          const drinkCategory = this.createElement('h2', '', cocktail.strCategory);
          const drinkIngredients = this.createElement('span', '', await this.getIngredients(cocktail));
  
          this.root.append(drinkName);
          this.root.append(drinkThumbnail);
          this.root.append(drinkCategory);
          this.root.append(drinkInstruction);
          this.root.append(drinkIngredients);
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }
  
    clear() {
      this.root.innerHTML = null;
    }
  }
  
  const cocktailFetcher = new CocktailFetcher();
  
  const button = cocktailFetcher.createElement('button', '', 'Liste de cocktails');
  const searchInput = cocktailFetcher.createElement('input', '', '');

  
  button.addEventListener('click', async () => {
      cocktailFetcher.clear();
      cocktailFetcher.renderSearchedCocktails();
  });
    
  searchInput.addEventListener('change', async (event) => {
      const searchTerm = event.target.value;
    
      cocktailFetcher.clear();
      cocktailFetcher.renderSearchedCocktails(searchTerm);
  });