let bread1 = prompt("Which bread would you like to have?");
let veggies1 = prompt("What are your fav veggies?");
let sauce1 = prompt("Which sauces would you like to have?");

function makeSandwich(bread, veggies, sauce) {
  let sandwich = `${bread} bread is used and the veggies are ${veggies} and the sauces used are ${sauce}`;
  return sandwich;
}
let vegSandwich = makeSandwich(bread1 ,veggies1, sauce1);
console.log(vegSandwich)
