type Pizza = { id: number; name: string; price: number };
type Order = { pizza: Pizza; orderID: number; status: "completed" | "pending" };
var nextPizzaID: number = 1;
const menu: Pizza[] = [
  { id: nextPizzaID++, name: "Margherita", price: 8 } as Pizza,
  { id: nextPizzaID++, name: "Pepperoni", price: 10 } as Pizza,
  { id: nextPizzaID++, name: "Vegetarian", price: 9 } as Pizza,
  { id: nextPizzaID++, name: "BBQ Chicken", price: 11 } as Pizza,
  { id: nextPizzaID++, name: "Hawaiian", price: 10 } as Pizza,
];
const orderQueue: Order[] = [];
var orderID: number = 1;

var cashInRegister: number = 100;

function addNewPizza(pizza: Omit<Pizza, "id">): Pizza {
  const newPizza: Pizza = { id: nextPizzaID++, ...pizza };
  menu.push(newPizza);
  return newPizza;
}

function placeOrder(pizzaName: string): string {
  const pizza = menu.find((p) => p.name === pizzaName);
  if (pizza) {
    const newOrder = { pizza, orderID, status: "pending" } as Order;
    orderQueue.push(newOrder);
    orderID++;
    orderQueue.push(newOrder);
  }

  return pizza ? `Order placed for ${pizzaName}` : "Pizza not found";
}
function completeOrder(orderID: number): string | undefined {
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
function getPizzaDetail(identifier: number | string): Pizza | undefined {
  if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    return menu.find((pizza) => pizza.name === identifier);
  }
}
addNewPizza({ name: "Four Cheese", price: 12 } as Pizza);
console.log(placeOrder("Pepperoni"));
console.log(placeOrder("Four Cheese"));
console.log(completeOrder(1));
console.log(completeOrder(2));
console.log(cashInRegister);
console.log(menu);
