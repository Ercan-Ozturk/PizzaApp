type Pizza = { name: string; price: number };
const menu: Pizza[] = [
  { name: "Margherita", price: 8 } as Pizza,
  { name: "Pepperoni", price: 10 } as Pizza,
  { name: "Vegetarian", price: 9 } as Pizza,
  { name: "BBQ Chicken", price: 11 } as Pizza,
  { name: "Hawaiian", price: 10 } as Pizza,
];

var cashInRegister: number = 100;
const orderQueue: { pizza: Pizza; orderID: number; status: string }[] = [];
var orderID: number = 1;
function addNewPizza(pizza: Pizza) {
  menu.push(pizza);
}

function placeOrder(pizzaName: string) {
  const pizza = menu.find((p) => p.name === pizzaName);
  if (pizza) {
    const newOrder = { pizza, orderID, status: "pending" } as {
      pizza: Pizza;
      orderID: number;
      status: string;
    };
    orderQueue.push(newOrder);
    orderID++;
  }
  return pizza ? `Order placed for ${pizzaName}` : "Pizza not found";
}
function completeOrder(orderID: number) {
  if (orderQueue.length > 0) {
    const completedOrder = orderQueue.find(
      (order) => order.orderID === orderID,
    );
    if (completedOrder) {
      completedOrder.status = "completed";
      return `Order for ${completedOrder.pizza.name} completed`;
    }
  }
}

addNewPizza({ name: "Four Cheese", price: 12 } as Pizza);
console.log(placeOrder("Pepperoni"));
console.log(placeOrder("Four Cheese"));
console.log(completeOrder(1));
console.log(completeOrder(2));
console.log(cashInRegister);
console.log(menu);
