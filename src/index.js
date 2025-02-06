import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  //<h1 style={style} >Fast React Pizza Co</h1>

  return (
    <header className="header">
      <h1> Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
      {/* <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/salamino.jpg"
        price={18}
      />
      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price={6}
        photoName="pizzas/focaccia.jpg"
      /> */}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price} €</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 8;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour < closeHours;
  console.log(isOpen);

  //   if (hour >= openHours && hour < closeHours) alert("We are currently open");
  //   else alert("We are currently closed");

  return (
    <footer className="footer">
      © {new Date().toLocaleTimeString()} We are currently open
    </footer>
  );
  //React.createElement("footer", null, "© We are currently open");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
