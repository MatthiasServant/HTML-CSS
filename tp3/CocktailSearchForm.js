
const CocktailSearchForm = (props) => {
    return (
        <form onSubmit={(e) => props.handleClick(e)}>
        <input 
            placeholder='Cherchez un cocktail...'
            name="search"
            //On affecte la valeur de notre input à notre variable searchTerm
        ></input>
        <input type = "submit" value="Valider" />
        </form>
    )
}

export default CocktailSearchForm;