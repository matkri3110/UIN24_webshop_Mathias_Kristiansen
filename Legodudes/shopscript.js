console.log(products)

// Gå igjennom alle produkter,, generere HTML for hvert produkt og skrive dette til index.html. 

// Lager en variabel som inneholder HTML-koden for produktene

let productHTML = ""

products.map((product, index) => productHTML += 
            `<article class="product-card">
                <img src="website_images/PROD_${product.imagefile}" alt="PRODUKTTITTEL" />
                <a href="#${product.category}">Ninjago</a> 
                <h3>${product.title}</h3>
                <p>Kr. ${product.price},-</p>
                <button onclick="addProductToCart(${product.prodid})">Legg i handlekurv</button>
            </article>`)

//Finn id #productlist, og fyll den med verdiene i variabelen productHTML

document.getElementById("productlist").innerHTML = productHTML

// Togglefunksjonalitet for handlevogn

document.getElementById("shoppingcart").addEventListener("click", function() {
    document.getElementById("cart").classList.toggle("visible")

})

//Funksjon for å legge til produkter i handlekurv

function addProductToCart(prodid) {
    console.log("Du vil legge til produktid" + prodid)
    // Bruk .some for å sjekke om prodid allerede finnes i cart
    const idExists = cart.some(cartprod => cartprod.cartprodid === prodid)
    if (idExists) {
        //Oppdatere dette produktetes quantity i cart
        // Først: finne indeksen til denne ID-en:
        const index = cart.findIndex(p => p.cartprodid === prodid)
        // Så: Oppdatere riktig quantity for dette produktet
        cart[index].quantity++
    } else {
        cart.push({cartprodid: prodid, quantity: 1})

    }

    printCart()
    console.log(cart)
}

// Funksjon som skriver ut oppdatert versjon av handlevognen. 
function printCart() {
    // Starte med en tom variabel vi kan fylle med HTML
    let cartHTML = ""
    // Lag klar variabel for pris
    let cartTotal = 0
    // Lag variabel for antall produkter i handlekurven
    let cartNumber = 0
    // Gå igjennom cartarrayen og genere html for hvert produkt
    cart.map((cartprod, index) => {
        const currentProduct = products.findIndex(p => p.prodid === cartprod.cartprodid)
        const currentProductInfo = products[currentProduct]
        cartHTML += `
                <article class="cart-product">
                    <span class="title">${currentProductInfo.title}</span>
                    <span class="price">${currentProductInfo.price},-</span>
                    <span class="quantity">x<span class="quantity-number">${cartprod.quantity}</span></span>
                    <button class="delete">x</button>
                </article>`
        
        cartTotal += currentProductInfo.price * cartprod.quantity
        // Regn ut antall produkter i handlekurven
        cartNumber += cartprod.quantity
    })

    // Skriver ut generert HTML til index-filen:
    document.getElementById("cart-products").innerHTML = cartHTML

    // Skriver ut totalpris til index-filen:
    document.getElementById("cart-total").innerHTML = cartTotal

    // Skriver ut antall produkter til index-filen:
    document.getElementById("cart-count").innerHTML = cartNumber
}

printCart()