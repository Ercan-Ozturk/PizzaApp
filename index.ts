const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Vegetarian", price: 9 },
  { name: "BBQ Chicken", price: 11 },
  { name: "Hawaiian", price: 10 },
];

var cashInRegister: number = 100;
const orderQueue: any[] = [];
var orderID: number = 1;
function addNewPizza(name: string, price: number) {
  menu.push({ name, price });
}

function placeOrder(pizzaName: string) {
  const pizza = menu.find((p) => p.name === pizzaName);
  const newOrder = { pizza, orderID, status: "pending" };
  if (pizza) {
    orderQueue.push(newOrder);
    orderID++;
  }
  return pizza ? `Order placed for ${pizzaName}` : "Pizza not found";
}
function completeOrder() {
  if (orderQueue.length > 0) {
    const completedOrder = orderQueue.shift();
    completedOrder.status = "completed";
    return `Order for ${completedOrder.pizza.name} completed`;
  }
}

addNewPizza("Four Cheese", 12);
console.log(placeOrder("Pepperoni"));
console.log(placeOrder("Four Cheese"));
console.log(completeOrder());
console.log(completeOrder());
console.log(cashInRegister);
console.log(menu);
