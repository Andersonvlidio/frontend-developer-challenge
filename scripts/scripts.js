const containerCards = document.querySelector(".container-cards");


async function loadProducts() {
    const url = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"
    const response = await fetch(url)
    const responseJson = await response.json()
    
}

loadProducts()



