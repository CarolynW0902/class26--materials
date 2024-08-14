//Create a constructor with 4 properties and 3 methods
function Pizza(crust,sauce,toppings,size) {
  this.crust = crust
  this.sauce = sauce
  this.toppings = toppings
  this.size = size

  this.deliveryTime = function(){
    console.log('calculating....')
  }
  this.burnMouth = function(){
    console.log('oucchhhhhhh!!!!')
  }
  this.frisbee = function (){
    console.log('yeeeettttttt!')
  }
}

let cheesyPizza = new Pizza('thin', 'garlic alfredo', 'extra cheese', 'large')