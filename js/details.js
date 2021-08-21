const detailContainer = document.querySelector(".product-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://stianaolsen.one/wp-json/wc/store/products" + "/" + id;

console.log(url);

async function getProducts() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
      
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
    
}

getProducts();

function createHtml(details) {
    detailContainer.innerHTML += `<h1 class="details-heading">${details.name}</h1>
                                
                                <div class="details-image" 
                                    style="background-image:url('${details.images[0].src}')"></div>
                                <div class="details-description">Genre: ${details.tags[0].name},  ${details.tags[1].name}</div>
                                <time class="details-date">${details.description}</time>
                                <div class="details-price"><h3 class="details-sale-price">Price: $${details.prices.sale_price}</h3>  <h3 class="details-regular-price">$${details.prices.regular_price}</h3></div>`;
}