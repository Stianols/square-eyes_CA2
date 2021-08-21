const baseUrl = "https://stianaolsen.one/wp-json/wc/store/products";
const productContainer = document.querySelector(".products")

async function getProducts(url) {
    try {
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function(product) {
        productContainer.innerHTML += `
        <a href="details.html?id=${product.id}" class="product"><h2>${product.name}</h2>
        <div class="product-image" style="background-image:url('${product.images[0].src}')"
        </div>
        <div class="price"><h3 class="sale-price">$${product.prices.sale_price}</h3>  <h3 class="regular-price">$${product.prices.regular_price}</h3></div>`
    });
}
catch(error) {
    console.log(error);
    productContainer.innerHTML = message("error", error);
}
}

getProducts(baseUrl);