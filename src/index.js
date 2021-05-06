const fetch = require("node-fetch");

console.log("Hello, Glovo!");

function drinkswithG() {
  const results = fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(
        "Total: " +
          data.drinks.length +
          ". " +
          "Names: " +
          data.drinks.map((e) => e.strDrink)
      );
    })

    .catch((err) => console.log(err));

  console.log(results);
}
drinkswithG();

function fourIngredients() {
  const results = fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(
        //"Cocktails with more than 4 ingredients: " +
        data.drinks.filter((e) => e.strIngredient4 !== null)
        //.map((e) => e.strDrink) // doing so you would be able to have the list of just the names of the cockatil
      );
    })
    .catch((err) => console.log(err));

  //console.log(results);
}

fourIngredients();

function values() {
  const results = fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(
        "Cocktails with just id/name/ingredients: " +
          data.drinks
            .filter((e) => e.strIngredient4 !== null)
            .map(
              (e) =>
                " name: " +
                e.strDrink +
                ", id: " +
                e.idDrink +
                ", ingredients: " +
                [
                  e.strIngredient1,
                  e.strIngredient2,
                  e.strIngredient3,
                  e.strIngredient4,
                  e.strIngredient5,
                  e.strIngredient6,
                ]
            )
      );
    })
    .catch((err) => console.log(err));

  console.log(results);
}

values();

function quantities() {
  const results = fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(
        "Cocktails with ingredient quantities: " +
          data.drinks
            .filter((e) => e.strIngredient4 !== null)
            .map(
              (e) =>
                " name: " +
                e.strDrink +
                ", id: " +
                e.idDrink +
                ", ingredients: " +
                [
                  e.strIngredient1,
                  e.strMeasure1,
                  e.strIngredient2,
                  e.strMeasure2,
                  e.strIngredient3,
                  e.strMeasure3,
                  e.strIngredient4,
                  e.strMeasure4,
                  e.strIngredient5,
                  e.strMeasure5,
                  e.strIngredient6,
                  e.strMeasure6,
                ]
            )
      );
    })
    .catch((err) => console.log(err));

  console.log(results);
}

quantities();

function alcohol() {
  const results = fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(
        "Alcoholic: " +
          data.drinks
            .filter(
              (e) => e.strIngredient4 !== null && e.strAlcoholic === "Alcoholic"
            )
            .map(
              (e) =>
                " name: " +
                e.strDrink +
                ", id: " +
                e.idDrink +
                ", ingredients: " +
                [
                  e.strIngredient1,
                  e.strMeasure1,
                  e.strIngredient2,
                  e.strMeasure2,
                  e.strIngredient3,
                  e.strMeasure3,
                  e.strIngredient4,
                  e.strMeasure4,
                  e.strIngredient5,
                  e.strMeasure5,
                  e.strIngredient6,
                  e.strMeasure6,
                ]
            ) +
          "Non-Alcoholic: " +
          data.drinks
            .filter(
              (e) => e.strIngredient4 !== null && e.strAlcoholic !== "Alcoholic"
            )
            .map(
              (e) =>
                " name: " +
                e.strDrink +
                ", id: " +
                e.idDrink +
                ", ingredients: " +
                [
                  e.strIngredient1,
                  e.strMeasure1,
                  e.strIngredient2,
                  e.strMeasure2,
                  e.strIngredient3,
                  e.strMeasure3,
                  e.strIngredient4,
                  e.strMeasure4,
                  e.strIngredient5,
                  e.strMeasure5,
                  e.strIngredient6,
                  e.strMeasure6,
                ]
            )
      );
    })
    .catch((err) => console.log(err));

  //console.log(results);
}

alcohol();
