type Pizza = { id: number; name: string; price: number };
type Order = { pizza: Pizza; orderID: number; status: "completed" | "pending" };
const menu: Pizza[] = [
  { id: 1, name: "Margherita", price: 8 } as Pizza,
  { id: 2, name: "Pepperoni", price: 10 } as Pizza,
  { id: 3, name: "Vegetarian", price: 9 } as Pizza,
  { id: 4, name: "BBQ Chicken", price: 11 } as Pizza,
  { id: 5, name: "Hawaiian", price: 10 } as Pizza,
];

var cashInRegister: number = 100;
const orderQueue: Order[] = [];
var orderID: number = 1;
function addNewPizza(pizza: Pizza) {
  menu.push(pizza);
}

function placeOrder(pizzaName: string) {
  const pizza = menu.find((p) => p.name === pizzaName);
  if (pizza) {
    const newOrder = { pizza, orderID, status: "pending" } as Order;
    orderQueue.push(newOrder);
    orderID++;
    orderQueue.push(newOrder);
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

addNewPizza({ id: 6, name: "Four Cheese", price: 12 } as Pizza);
console.log(placeOrder("Pepperoni"));
console.log(placeOrder("Four Cheese"));
console.log(completeOrder(1));
console.log(completeOrder(2));
console.log(cashInRegister);
console.log(menu);
