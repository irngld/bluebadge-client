const DrinkDetails = ({drink}) => {
    return (
        <>
          <p>{drink.strDrink}</p>
          <img src={drink.strDrinkThumb}/>
          <p>{drink.strMeasure1 && `${drink.strMeasure1} ${drink.strIngredient1}`}</p>
          <p>{drink.strMeasure2 && `${drink.strMeasure2} ${drink.strIngredient2}`}</p>
          <p>{drink.strMeasure3 && `${drink.strMeasure3} ${drink.strIngredient3}`}</p>
          <p>{drink.strMeasure4 && `${drink.strMeasure4} ${drink.strIngredient4}`}</p>
          <p>{drink.strMeasure5 && `${drink.strMeasure5} ${drink.strIngredient5}`}</p>
          <p>{drink.strMeasure6 && `${drink.strMeasure6} ${drink.strIngredient6}`}</p>
          <p>{drink.strInstructions}</p>
        </>
      )
}

export default DrinkDetails;