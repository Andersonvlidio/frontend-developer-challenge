const containerCards = document.querySelector(".container-cards");

let url = "frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"

async function loadProducts() {
    const response = await fetch('https://' + url)
    const responseJson = await response.json()
    renderProducts(responseJson.products)
    console.log(responseJson.nextPage)
    url = responseJson.nextPage
}

function renderProducts(products) {
    products.map(product => {
        const valueReplaced = product.installments.value.toString().replace("." , ",")
        containerCards.innerHTML += `<div class="card">
                                        <div class="container-img">
                                            <img src="${product.image}" alt="">
                                        </div>
                                        <h4>${product.name}</h4>
                                        <p>${product.description}</p>
                                        <span>De: R$${product.oldPrice},00</span>
                                        <span>Por: R$${product.price},00</span>
                                        <span>ou ${product.installments.count}x de R$${valueReplaced}</span>
                                        <button class="button">comprar</button>
                                    </div>`
    })

}

loadProducts()




