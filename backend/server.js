const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 500
  },
  {
    id: 2,
    name: "Phone",
    price: 300
  },
  {
    id: 3,
    name: "Headphones",
    price: 50
  }
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});