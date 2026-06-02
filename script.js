let cart = 0;
let total = 0;

function addToCart(price){
    cart++;
    total += price;

    document.getElementById("count").innerText = cart;
    document.getElementById("total").innerText = total;

    alert("Product added to cart successfully!");
}
function searchProducts(){

    let input = document
        .getElementById("search")
        .value
        .toLowerCase();

    let laptop = document.getElementById("laptop");
    let phone = document.getElementById("phone");
    let headphones = document.getElementById("headphones");

    laptop.style.display =
        input === "" || "laptop".includes(input)
        ? "block"
        : "none";

    phone.style.display =
        input === "" || "phone".includes(input)
        ? "block"
        : "none";

    headphones.style.display =
        input === "" || "headphones".includes(input)
        ? "block"
        : "none";
}
function checkout(){

    if(cart === 0){
        alert("Cart is empty!");
    }
    else{

        alert(
            "Order placed successfully!\nTotal: $" + total
        );

        cart = 0;
        total = 0;

        document.getElementById("count").innerText = cart;
        document.getElementById("total").innerText = total;
    }
}