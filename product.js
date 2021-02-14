const url = "https://kea-alt-del.dk/t7/api/products/";

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
}

//.then(function (res) {
//return res.json();
//});

//*.then(function(data) {
// handleproductList(data);
//});

//function handleproductList(data){

//data.foreach (function(item){
// showProduct(item);
//},
//});

//function showProduct(product)
