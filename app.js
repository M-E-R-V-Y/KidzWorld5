var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

// var book1Add = document.getElementById("book1");
// var book2Add = document.getElementById("book2");
// var book3Add = document.getElementById("book3");
// var book4Add = document.getElementById("book4");
// var book5Add = document.getElementById("book5");
// var book6Add = document.getElementById("book6");

// var game1Add = document.getElementById("game1");
// var game2Add = document.getElementById("game2");
// var game3Add = document.getElementById("game3");
// var game4Add = document.getElementById("game4");

// var Craft1Add = document.getElementById("Craft1");
// var Craft2Add = document.getElementById("Craft2");
// var Craft3Add = document.getElementById("Craft3");
// var Craft4Add = document.getElementById("Craft4");

var addsButtons = document.getElementsByClassName("button")

console.log(addButtons[0]);

var items = [
{
    name: "This was our pact",
   quantity:0,
   dollar: 7,
   cents: 49,
};{

// console.log(book1.name);

},{

    name: "The famous five",
   quantity:0,
   dollar: 4,
   cents: 59,
},{

var book3 = {
    name: "Matilda",
   quantity:0,
   dollar: 6,
   cents: 80,
},
{

{
    name: "Harry Potter",
   quantity:0,
   dollar: 10,
   cents: 0,
},
{

{
    name: "For Young Readers",
   quantity:0,
   dollar: 7,
   cents: 29,
},
{

{
    name: "Wimpy Kid - DIY",
   quantity:0,
   dollar: 4,
   cents: 99,
},
{

{
    name: "Dart Board",
   quantity:0,
   dollar: 17,
   cents: 49,
},
{

    name: "connect 4",
   quantity:0,
   dollar: 19,
   cents: 99,
},
{
    name: "Jenga",
   quantity:0,
   dollar: 20,
   cents: 99,
},
{
    name: "Monopoly",
   quantity:0,
   dollar: 19,
   cents: 49,
},
{
    name: "Bookmarks",
   quantity:0,
   dollar: 12,
   cents: 49,
},
{
    name: "Brirthday card",
   quantity:0,
   dollar: 19,
   cents: 49,
},
{
    name: "Stuffed toys",
   quantity:0,
   dollar: 15,
   cents: 99,
},
{
    name: "Dream catcher drawing",
   quantity:0,
   dollar: 18,
   cents: 49,
},
];


function updateCart () {
    let cart = 0;
    for (index = 0; index < items < items .length; index++){
        cart = cart+items[index].quantity;

    }
    cartValuee.innerHTML = cart;
}

// function updateCart() {
//     cart = 
//         book1.quantity +
//         book2.quantity +
//         book3.quantity +
//         book4.quantity +
//         book5.quantity +
//         book6.quantity +
//         game1.quantity +
//         game2.quantity +
//         game3.quantity +
//         game4.quantity +
//         Craft1.quantity +
//         Craft2.quantity +
//         Craft3.quantity +
//         Craft4.quantity;
//     cartValue.innerHTML = cart;
// }
for (let i = 0; i < addButtons.length; i++){
    addButtons[i].onclick = (e) => {
        items[i].quantity++;
        updateCart();
    };


}

// book1Add.onclick = (e)=> {
//     book1.quantity++;
//     updateCart();
// }

// book2Add.onclick = (e)=> {
//     book2.quantity++;
//     updateCart();
// }

// book3Add.onclick = (e)=> {
//     book3.quantity++;
//     updateCart();
// }

// book4Add.onclick = (e)=> {
//     book4.quantity++;
//     updateCart();
// }

// book5Add.onclick = (e)=> {
//     book5.quantity++;
//     updateCart();
// }

// book6Add.onclick = (e)=> {
//     book6.quantity++;
//     updateCart();
// }
// game1Add.onclick = (e)=> {
//     game1.quantity++;
//     updateCart();
// }

// game2Add.onclick = (e)=> {
//     game2.quantity++;
//     updateCart();
// }

// game3Add.onclick = (e)=> {
//     game3.quantity++;
//     updateCart();
// }

// game4Add.onclick = (e)=> {
//     game4.quantity++;
//     updateCart();
// }

// Craft1Add.onclick = (e)=> {
//     Craft1.quantity++;
//     updateCart();
// }

// Craft2Add.onclick = (e)=> {
//     Craft2.quantity++;
//     updateCart();
// }

// Craft3Add.onclick = (e)=> {
//     Craft3.quantity++;
//     updateCart();
// }

// Craft4Add.onclick = (e)=> {
//     Craft4.quantity++;
//     updateCart();
// }

var funtionDolar = 0;
var finalecent = 0;
function updatePrice(){
    let totalPriceInCent =0;

    for (index = 0; index < items.length; index++){
        totalPriceInCents = totalPriceInCent+items[index].quantity *(items)[index].dollars * 100 + items[index].
    }
    finalDollars = Math.floor(totalPriceInCents / 100);
finalCents = totalPriceInCents % 100;
}


// // var finalDollars = 0;
// // var finalcents = 0;
// // function updatePrice() {
// //   var book2CostInCents =
// // book2.quantity * book2.dollars * 100 + book2.quantity * book2.cents
// //   var book3CostInCents =
// // book3.quantity * book3.dollars * 100 + book3.quantity * book3.cents
// //   var book4CostInCents =
// // book4.quantity * book4.dollars * 100 + book4.quantity * book4.cents
// //   var book5CostInCents =
// // book5.quantity * book5.dollars * 100 + book5.quantity * book5.cents
 //   var book6CostInCents =
 // book6.quantity * book6.dollars * 100 + book6.quantity * book6.cents

// // var game1CostInCents =
// // game1.quantity * game1.dollars * 100 + game1.quantity * game1.cents
// // var game2CostInCents =
// // game2.quantity * game2.dollars * 100 + game2.quantity * game2.cents
// // var game3CostInCents =
// // game3.quantity * game3.dollars * 100 + game3.quantity * game3.cents
// // var game4CostInCents =
// // game4.quantity * game4.dollars * 100 + game4.quantity * game4.cgame

// // var craft1CostInCents =
// // craft1.quantity * craft1.dollars * 100 + craft1.quantity * craft1.cents
// // var game2CostInCents =
// // craft2.quantity * craft2.dollars * 100 + craft2.quantity * craft2.cents
// // var game3CostInCents =
// // craft3.quantity * craft3.dollars * 100 + craft3.quantity * craft3.cents
// // var game4CostInCents =
// // craft4.quantity * craft4.dollars * 100 + craft4.quantity * craft4.cents

// // totalPriceInCents
// // book1CostInCents +
// // book2CostInCents +
// // book3CostInCents +
// // book4CostInCents +
// // book5CostInCents +
// // book6CostInCents +

// // game1CostInCents +
// // game2CostInCents +
// // game3CostInCents +
// // game4CostInCents +

// // craft1CostInCents +
// // craft2CostInCents +
// // craft3CostInCents +
// // craft4CostInCents;

// finalDollars = Math.floor(totalPriceInCents / 100);
// finalCents = totalPriceInCents % 100;
// }
// var whatsappLink = "https://api.whatsapp.com/send?phone=919000000000text=Order%20details"

// function updateWhatsappLink(){
//     for (let index = 0); index < items.length; index++){
//         if(items[index].quantity != 0) {
//       whatsappLink+="%0A" + items[index].name + "%20" + items[index].quantity;    
//      }
// }
// whatsappLink+="%0A" +"Total%20Price:%20$"+ finalDollars + "%20"+finalcents + "c";
// }
// // function updateWhatsappLink() {
// //         if(book1.quantity != 0) {
// //         whatsappLink+="%0A" + book1.name + "%20" + book1.quantity;    
// //         }
// //         if(book2.quantity != 0) {
// //         whatsappLink+="%0A" + book2.name + "%20" + book2.quantity;    
// //        }
// //        if(book2.quantity != 0) {
// //         whatsappLink+="%0A" + book2.name + "%20" + book2.quantity;    
// //        }
// //        if(book3.quantity != 0) {
// //         whatsappLink+="%0A" + book3.name + "%20" + book3.quantity;    
// //        }
// //        if(book4.quantity != 0) {
// //         whatsappLink+="%0A" + book4.name + "%20" + book4.quantity;    
// //        }
// //        if(book6.quantity != 0) {
// //         whatsappLink+="%0A"+ book6.name + "%20" + book6.quantity;   
        
         
// //        }
// //        if(game1.quantity != 0) {
// //         whatsappLink+="%0A" + game1.name + "%20" + game1.quantity;    
// //        }
// //        if(game2.quantity != 0) {
// //         whatsappLink+="%0A" + game2.name + "%20" + game2.quantity;    
// //        }
// //        if(game3.quantity != 0) {
// //         whatsappLink+="%0A" + game3.name + "%20" + game3.quantity;    
// //        }
// //        if(game4.quantity != 0) {
// //         whatsappLink+="%0A" + game4.name + "%20" + game4.quantity;    
// //        }
// //        if(craft1.quantity != 0) {
// //         whatsappLink+="%0A" + craft1.name + "%20" + craft1.quantity;    
// //        }
// //        if(craft2.quantity != 0) {
// //         whatsappLink+="%0A" + craft2.name + "%20" + craft2.quantity;    
// //        }
// //         if(craft3.quantity != 0) {
// //         whatsappLink+="%0A" + craft3.name + "%20" + craft3.quantity;    
// //        }
// //        if(craft4.quantity != 0) {
//         // whatsappLink+="%0A" + craft4.name + "%20" + craft4.quantity;    
// //        }
// //        whatsappLink+="%0A" +"Total%20Price:%20$"+ finalDollars + "%20"+finalcents + "c";
// //     }

cartButton.onclick = () => {
    updatePrice();
   updateWhatsappLink();
   window.open(whatsappLink, "_blank");

};
